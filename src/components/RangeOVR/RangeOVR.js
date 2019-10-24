import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const inputStyles = { marginBottom: '10px' };

export default function RangeOVR(props) {
    return (<>
        <Card>
            <Card.Header>STEP 2 (required)</Card.Header>
            <Card.Body>
                <Form.Label>Player ratings to try (Min/Max)</Form.Label>
                <Form.Row>
                    <Col><Form.Control type="number" pattern="[0-9]*" value={props.interval.min} style={inputStyles} min='60' max='99' step='1' name='min' onChange={props.onchange} required /></Col>
                    <Col><Form.Control type="number" pattern="[0-9]*" value={props.interval.max} style={inputStyles} min={props.interval.min} max='99' name='max' step='1' onChange={props.onchange} required /></Col>
                </Form.Row>
            </Card.Body>
        </Card>
    </>);
}