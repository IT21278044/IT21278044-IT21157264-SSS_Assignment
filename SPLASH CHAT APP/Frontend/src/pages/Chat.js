import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";

function Chat() {
    return (
        <Container>
            <Row>
            <Col md={8}>
                    <MessageForm />
                </Col>
                <Col md={4}>
                    <Sidebar />
                </Col>
                
            </Row>
        </Container>
    );
}

export default Chat;
