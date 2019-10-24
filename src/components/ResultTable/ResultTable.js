import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

export default function ResultTable(props) {
    return (
        <Card>
            <Card.Header>RESULT - {props.table.length} combinations for remaining {11 - props.fixed.length} cards</Card.Header>
            <Card.Body style={{ maxWidth: 'full', maxHeight: '900px', overflowY: 'auto', overflowX: 'auto', fontSize: '14px', textAlign: 'center' }}>
                <Table bordered hover>
                    <thead>
                        <tr>
                            {
                                props.header.map((elem, index) => <th key={index}>{elem}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.table.map((elem, index) => <tr key={index}>{Object.keys(elem).map((value, index) => <td key={index}>{elem[value]}</td>)}</tr>)
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}