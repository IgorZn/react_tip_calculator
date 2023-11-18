import React from 'react';
import {Row, Col, Form, InputGroup} from 'react-bootstrap'

function Bill({setBill, bill}) {
    const handleBillInput = (e) => {
      setBill(() => Number(e.target.value))
    }

    return (
        <>
            <Row>
                <Col className={"col-3"}>
                    How much was the bill?
                </Col>
                <Col>
                    <InputGroup className="mx-3">
                        <InputGroup.Text className={"px-3"}>$&nbsp;</InputGroup.Text>
                        <Form.Control
                            aria-label="Dollar amount (with dot and two decimal places)"
                            onChange={handleBillInput}
                            value={bill > 0 ? bill : ''}
                        />
                    </InputGroup>
                </Col>
            </Row>

        </>
    );
}

export default Bill;