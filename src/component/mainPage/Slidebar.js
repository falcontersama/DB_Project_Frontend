import React, { Component } from 'react'
import {Tab,Col,Nav,NavItem,Row, NavDropdown, MenuItem} from 'react-bootstrap'
import Startpage from './Startpage'
import styled from 'styled-components'
import Sidebar from 'react-sidebar'

const SlideBox = styled.div`
    padding: 10px 35px;

`;

const mql = window.matchMedia(`(min-width: 800px)`);

export default class Slidebar extends Component{
    constructor(props){
        super(props)
        this.state = {
            mql: mql,
            docked: props.docked,
            open: props.open,
            tabs: 1,
        }
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open2) {
      this.setState({sidebarOpen: open2})
    }
    
    componentWillMount() {
      mql.addListener(this.mediaQueryChanged)
      this.setState({mql: mql, sidebarDocked: mql.matches})
    }
    
    componentWillUnmount() {
      this.state.mql.removeListener(this.mediaQueryChanged)
    }
    
    mediaQueryChanged() {
      this.setState({sidebarDocked: this.state.mql.matches})
    }

    

    render(){
        var sidebarContent = 
            <div>
                <div>
                    Tab1
                </div>
                <div>
                    Tab2
                </div>
            </div>;
        var sidebarProps = {
            sidebar: this.state.sidebarOpen,
            docked: this.state.sidebarDocked,
            onSetOpen: this.onSetSidebarOpen
        };
        return(
            <div>
                <Sidebar sidebar={sidebarContent}
                    open={this.state.sidebarOpen}
                    docked={this.state.sidebarDocked}
                    onSetOpen={this.onSetSidebarOpen}>
                    <b>Main content</b>
                </Sidebar>

                {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    
                    <Row className="clearfix">
                        <SlideBox>
                        <div>
                        Hamburger
                        
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="first">Main</NavItem>
                                <NavItem eventKey="second">Tab 1</NavItem>
                                <NavItem eventKey="third">Tab 2</NavItem>
                                <NavDropdown eventKey="3" title="Tab3" id="nav-dropdown-within-tab">
                                    <MenuItem eventKey="3.1">Action</MenuItem>
                                    <MenuItem eventKey="3.2">Another action</MenuItem>
                                </NavDropdown>
                            </Nav>
                        
                        </div>
                        
                        <Col>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first"><Startpage /></Tab.Pane>
                            <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                            <Tab.Pane eventKey="third">Tab 3 content</Tab.Pane>
                        </Tab.Content>
                        </Col>
                        </SlideBox>
                    </Row>
                </Tab.Container>; */}
            </div>
        )
    }
}