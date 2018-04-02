import React, { Component } from 'react'
import {Tab,Col,Nav,NavItem,Row, NavDropdown, MenuItem} from 'react-bootstrap'
import Startpage from './Startpage'
import styled from 'styled-components';

const SlideBox = styled.div`
    padding: 10px 35px;
`;

export default class Slidebar extends Component{
    render(){
        return(
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    
                    <Row className="clearfix">
                        <SlideBox>
                        <Col sm={2}>
                        
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey="first">Main</NavItem>
                            <NavItem eventKey="second">Tab 1</NavItem>
                            <NavItem eventKey="third">Tab 2</NavItem>
                            <NavDropdown eventKey="3" title="Tab3" id="nav-dropdown-within-tab">
                                <MenuItem eventKey="3.1">Action</MenuItem>
                                <MenuItem eventKey="3.2">Another action</MenuItem>
                            </NavDropdown>
                        </Nav>
                        
                        </Col>
                        <Col sm={10}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first"><Startpage /></Tab.Pane>
                            <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                            <Tab.Pane eventKey="third">Tab 3 content</Tab.Pane>
                        </Tab.Content>
                        </Col>
                        </SlideBox>
                    </Row>
                </Tab.Container>;
            </div>
        )
    }
}