import React from "react";
import { Row, Col, Button} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

document.body.style.backgroundColor="#e7cffc";

function Home() {
    return (
        <Row>
            
            <Col md={6} className="home__bg"></Col>
            <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div>  
                <Col md={6} className="home_t"></Col>
                    <h1>Unite and Explore</h1>
                    <h6>Connect with Friends Around the Globe.. Where Connections Blossom and Conversations Spark Joy</h6>

                    <LinkContainer to="/chat">
                        <button variant="success" className="round-rectangle">
                            Get Started <i className="fas fa-comments home-message-icon"></i>
                        </button>
                        </LinkContainer>


                </div>
            </Col>
        </Row>
    );
}

export default Home;
