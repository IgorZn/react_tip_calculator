import React from 'react';
import {Row, Col, Form, InputGroup} from 'react-bootstrap'

function TipAmount({title}) {
    return (
        <div>
            <Row>
                <Col className={"d-flex col-3"}>
                    <Form.Group className="">
                        <Form.Label>{title}?</Form.Label>
                    </Form.Group>
                </Col>
                <Col>
                    <InputGroup className="mx-3">
                        <InputGroup.Text className={"px-3"}>%</InputGroup.Text>
                        <Form.Select >
                            <option>0</option>
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </Form.Select>

                    </InputGroup>


                </Col>
            </Row>
        </div>
    )
        ;
}

export default TipAmount;