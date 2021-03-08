import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends React.Component{
    render(){
        return(
        <div>
            <Nav justify variant="tabs" defaultActiveKey="/Home">
                <Nav.Item>
                    <LinkContainer to="/Home">
                    <Nav.Link href="/">Home</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/About">
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/Contact">
                        <Nav.Link eventKey="link-2">Contact</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/Project">
                    <Nav.Link eventKey="link-3">Project</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </div>)
    }
}