import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const inputStyles = { marginBottom: '10px' };

export default function AvailablesOVR(props) {
    return (<>
        <Card>
            <Card.Header>STEP 3 (optional)</Card.Header>
            <Card.Body>
                <Form.Label>Enter the ratings of the cards which you want to use for this sbc (maximum 10)</Form.Label>
                <Form.Row>
                    {props.fixed.map((elem, index) =>
                        <div key={index} className={(index === 0 || index === 5) ? 'col-2 offset-1' : 'col-2'}>
                            <Form.Control type='text' pattern="[0-9]*" data-index={index} value={elem} style={inputStyles} min='60' max='99' onChange={props.onchange}/>
                        </div>
                    )}
                </Form.Row>
            </Card.Body>
        </Card>
    </>);
}