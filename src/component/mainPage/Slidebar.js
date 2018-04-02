import React, { Component } from 'react'
import {Tab,Col,Nav,NavItem,Row} from 'react-bootstrap'
import Startpage from './Startpage'
import styled from 'styled-components';

const SlideBox = styled.div`
    background-color: pink;
`;

export default class Slidebar extends Component{
    render(){
        return(
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="clearfix">
                        <Col sm={2}>
                        <SlideBox>
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey="first">Main</NavItem>
                            <NavItem eventKey="second">Tab 1</NavItem>
                            <NavItem eventKey="third">Tab 2</NavItem>
                        </Nav>
                        </SlideBox>
                        </Col>
                        <Col sm={10}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first"><Startpage /></Tab.Pane>
                            <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                            <Tab.Pane eventKey="third">Tab 3 content</Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>;
            </div>
        )
    }
}