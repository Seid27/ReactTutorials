import React from 'react'
import '../stylesheets/navComponentStyle.css'
import {Container,Row, Col,Button} from 'react-bootstrap'
import { faFacebookF, faTwitter, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function navComponent() {
    return (
        <Container className="container">

            <Row>
                <Col xs={2}><a href="#"><FontAwesomeIcon icon={faReact} size="lg"></FontAwesomeIcon>  Made with React</a></Col>
                <Col><a href="#">Theme</a></Col>
                <Col><a href="#">Dashboard</a></Col>
                <Col><a href="#">Elements</a></Col>
                <Col><a href="#">Others</a></Col>
                <Col md={{offset: 1}}><a href="#">Blog</a></Col>
                <Col><a href="#"><FontAwesomeIcon icon={faFacebookF} size="lg"></FontAwesomeIcon></a></Col>
                <Col><a href="#"><FontAwesomeIcon icon={faTwitter} size="lg"></FontAwesomeIcon></a></Col>
                <Col><a href="#"><FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon></a></Col>
                <Col xs={3}><Button className = "btn" variant="primary" size="sm"> <FontAwesomeIcon icon={faPlus} size="lg"></FontAwesomeIcon> Submit Product</Button></Col>
            </Row>
            {/* <nav>
                <ul>
                    <li><a href="#">Made with React</a></li>
                    <li><a href="#">Theme</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Others</a></li>
                </ul>
            </nav> */}
        </Container>
    )
}
