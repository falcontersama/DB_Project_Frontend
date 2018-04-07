import React, { Component } from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import Startpage from './Startpage'
import styled from 'styled-components'
import Sidebar from 'react-sidebar'

const ContentBox = styled.div`
    padding: 10px 35px;
`;

const SlideBox = styled.div`
    width: 15vw;
    height: 100vh;
    background-color: white;
    color: black;
    padding: 16px;
    display: block;
`;


const mql = window.matchMedia(`(min-width: 800px)`);

export default class Slidebar extends Component{
    constructor(props){
        super(props)
        this.state = {
            mql: mql,
            open: props.open,
            tabs: 1,
            sidebarOpen: false,
        }
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        if(this.state.sidebarOpen){
            this.setState({sidebarOpen:false})
        }else{
            this.setState({sidebarOpen:true})
        }
      
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
                 <Navbar style={{backgroundColor:"grey", width:"15vw"}}>
                 <Navbar.Header>
                    <Navbar.Brand>
                        <div style={{color:"black"}}>Menu</div>
                    </Navbar.Brand>
                </Navbar.Header>
                </Navbar>
            <SlideBox>
                <div>
                    <h3>Main</h3>
                </div>    
                <div>
                    <h3>Tab2</h3>
                </div>        
                <div>
                    <h3>Tab3</h3>
                </div>    
                <div>
                    <h3>Tab4</h3>
                </div>  
            </SlideBox>
            </div>;

        var sidebarProps = {
            sidebar: this.state.sidebarOpen,
            onSetOpen: this.onSetSidebarOpen
        };
        
        return(
            <div>
                
                <Sidebar sidebar={sidebarContent}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}>
                        
                    <div>
                    <Navbar style={{backgroundColor:"grey"}}>
                        <Nav>
                            <img src="/img/hamburgerButton.png" height="50" width="50" onClick={this.onSetSidebarOpen}/>
                        </Nav>
                    </Navbar>
                    </div>
                    <ContentBox>
                        <Startpage />
                    </ContentBox>
                        
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