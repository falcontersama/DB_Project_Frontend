import React, { Component } from 'react'
import {Tab,Col,Nav,NavItem,Row} from 'react-bootstrap'
import Schedule from './Schedule'

export default class Slidebar extends Component{
    render(){
        return(
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="clearfix">
                        <Col sm={2}>
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey="first">Tab 1</NavItem>
                            <NavItem eventKey="second">Tab 2</NavItem>
                        </Nav>
                        </Col>
                        <Col sm={10}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first"><Schedule /></Tab.Pane>
                            <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>;
            </div>
        )
    }
}