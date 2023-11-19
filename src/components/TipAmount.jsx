import React from 'react';
import {Row, Col, Form, InputGroup} from 'react-bootstrap'

function TipAmount({title, percents, setTip, tipVal}) {
    const handleTip = (e) => {
        setTip(() => Number(e.target.value))
    }

    return (
        <div>
            <Row>
                <Col className={"d-flex col-3"}>
                    <Form.Group className="">
                        <Form.Label>{title}?</Form.Label>
                    </Form.Group>
                </Col>
                <Col className={"col-3"}>
                    <InputGroup className="mx-3">
                        <InputGroup.Text className={"px-3"}>%</InputGroup.Text>
                        <Form.Select value={tipVal} onChange={handleTip}>
                            {percents.map((percent, i) => (
                                <option key={i * Date.now()} value={percent}>{percent}</option>
                            ))}
                        </Form.Select>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    )
        ;
}

export default TipAmount;