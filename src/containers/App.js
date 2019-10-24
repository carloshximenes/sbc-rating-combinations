import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import generateRangeOVR from '../assets/generateRangeOVR/generateRangeOVR';
import createURL from '../assets/createURL/createURL';

import TargetSquadOVR from '../components/TargetSquadOVR/TargetSquadOVR';
import AvailablesOVR from '../components/AvailablesOVR/AvailablesOVR';
import RangeOVR from '../components/RangeOVR/RangeOVR';
import ResultTable from '../components/ResultTable/ResultTable';
import Header from '../components/Header/Header';

const styles = {
  marginTop: '10px',
  marginBottom: '10px'
}

function App() {
  const [targetOVR, setTargetOVR] = useState(83);

  // const [list, setList] = useState([]);
  const [targetList, setTargetList] = useState([]);
  const [occurrencesList, setOccurrencesList] = useState([]);
  const [arrayList, setArrayList] = useState([]);
  const [currentList, setCurrentList] = useState(['', '', '', '', '', '', '', '', '', '']);
  const [intervalOVR, setIntervalOVR] = useState({ min: 78, max: 86 });

  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(false);
      setIsLoading(false);
    } else {
      setValidated(true);
      setIsLoading(true);

      setArrayList(generateRangeOVR(intervalOVR.min, intervalOVR.max));
    }
    event.stopPropagation();
    event.preventDefault();
  };

  const reset = () => {
    setTargetOVR(83);
    setTargetList([]);
    setOccurrencesList([]);
    setArrayList([]);
    setCurrentList(['', '', '', '', '', '', '', '', '', '']);
    setIntervalOVR({ min: 78, max: 86 });
    setValidated(false);
    setIsLoading(false);
  }

  // Atualiza a lista com os OVRs possíveis
  useEffect(() => {
    if (isLoading && validated) {

      const myCurrentList = currentList.filter(e => e !== '');
      // Será realizado o cálculo considerando somente o tamanho do array 'dinâmico', ou seja, desconsiderando o que houver na variável currentList.      
      const arraySize = 11 - myCurrentList.length;

      const fetchData = async () => {
        const result = await axios(createURL(arrayList, arraySize, myCurrentList, targetOVR));
        // setList(result.data);
        setTargetList(result.data);
        setIsLoading(!isLoading);
      };
      fetchData();
    }
    // eslint-disable-next-line
  }, [isLoading, validated]);

  // Conta a quantidade de ocorrências de cada valor nos arrays
  useEffect(() => {
    const newOccurrencesList = targetList.map(elem => {
      return elem.reduce((counter, item) => {
        const p = String(item);
        counter[p] = (counter[p] || 0) + 1;
        return counter;
      }, {})
    });


    // Completa o array agora com os valores zerados
    const fixedOccurrencesList = newOccurrencesList.map(elem => {
      return arrayList.reduce((counter, item) => {
        const p = String(item);
        counter[p] = (elem[p] || 0);
        return counter;
      }, {})
    });

    setOccurrencesList(fixedOccurrencesList);
    // eslint-disable-next-line
  }, [targetList]);

  return (<>
    <Header/>
    <Container>
      <Form validated={validated} onSubmit={handleSubmit}>
        <Form.Row style={styles}>
          <Col><TargetSquadOVR value={targetOVR} onchange={(e) => setTargetOVR(Number(e.target.value))} /></Col>
          <Col><RangeOVR interval={intervalOVR} onchange={(e) => setIntervalOVR({ ...intervalOVR, [e.target.name]: Number(e.target.value) })} /></Col>
        </Form.Row>
        <AvailablesOVR fixed={currentList} onchange={(e) => {
          const auxList = [...currentList];
          auxList.splice(e.target.dataset.index, 1, (e.target.value === '') ? '' : Number(e.target.value));
          setCurrentList(auxList);
        }} />
        <Form.Row style={styles}>
          <div className='col-3'><Button block variant='secondary' onClick={reset}>Reset</Button></div>
          <Col><Button type='submit' block variant={(isLoading) ? 'primary' : 'success'}>{(isLoading) ? 'Loading...' : 'Calculate'}</Button></Col>
        </Form.Row>
        <ResultTable header={arrayList} table={occurrencesList} fixed={currentList.filter(e => e !== '')} />
      </Form>
    </Container>
  </>);
}

export default App;
