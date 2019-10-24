import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const inputStyles = { marginBottom: '10px' };

export default function TargetSquadOVR(props) {
    return (<>
        <Card>
            <Card.Header>STEP 1 (required)</Card.Header>
            <Card.Body>
                <Form.Row>
                    <Form.Label>Enter the target squad rating</Form.Label>
                    <Form.Control type="number" pattern="[0-9]*" value={props.value} style={inputStyles} min='60' max='99' onChange={props.onchange} required/>
                </Form.Row>
            </Card.Body>
        </Card>
    </>);
}