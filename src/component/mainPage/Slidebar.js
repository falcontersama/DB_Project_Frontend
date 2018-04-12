import React, { Component } from 'react'
import {Navbar,Col} from 'react-bootstrap'
import styled from 'styled-components'
import Sidebar from 'react-sidebar'

//Page
import Startpage from './Startpage'
import RegisterStudentAll from '../registerStudent/RegisterStudentAll'

const ContentBox = styled.div`
    padding: 10px 10px 0px 60px;

`;

const SlideBox = styled.div`
    width: 15vw;
    height: 100vh;
    background-color: white;
    color: black;
    padding: 16px;
    display: block;
    min-width: 150px;
`;

const HamburgerBox = styled.div`
    height: 100vh;
    background-color: black;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const studentCommand = (
        <div>  
            <div>
                <h6>หน้าหลัก</h6>
            </div>    
            <div>
            <h6>ลงทะเบียนวิชา/เพิ่ม</h6>
            </div>        
            <div>
            <h6>จัดการรายวิชา</h6>
            </div>
            <div>
            <h6>ขอเอกสาร</h6>
            </div>    
            <div>
            <h6>ออกจาระบบ</h6>
            </div>
        </div>
    );

const teacherCommand = (
        <div>
            <div>
            <h6>หน้าหลัก</h6>
            </div>    
            <div>
            <h6>จัดการการสอนรายวิชา</h6>
            </div>        
            <div>
            <h6>บันทึกเกรด</h6>
            </div>
            <div>
            <h6>ตรวจสอบนิสิตในความดูแล</h6>
            </div>
            <div>
            <h6>เพิ่มงาน</h6>
            </div>    
            <div>
            <h6>ออกจาระบบ</h6>
            </div>
        </div>
    );


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
                 <Navbar style={{backgroundColor:"black", width:"15vw", minWidth:"150px", marginBottom:"0px"}}>
                 <Navbar.Header>
                    <Navbar.Brand>
                        <div style={{color:"white"}}>Menu</div>
                    </Navbar.Brand>
                </Navbar.Header>
                </Navbar>
                <SlideBox>
                      {studentCommand}
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
                        
                    <Col xs={1} style={{padding:"0px",width:"4vw",minWidth:"50px"}}>
                    
                        <HamburgerBox>
                            <img src="/img/hamburgerButton.png" height="auto" width="50" onClick={this.onSetSidebarOpen}/>
                            
                        </HamburgerBox>
                
                    </Col>
                    <Col xs={21}>
                        <ContentBox>
                            <RegisterStudentAll />
                        </ContentBox>
                    </Col>     
                </Sidebar>
            
            </div>
        )
    }
}