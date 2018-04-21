import React, { Component } from 'react'
import {Navbar,Col, Tab} from 'react-bootstrap'
import styled from 'styled-components'
import Sidebar from 'react-sidebar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//Page
import Startpage from './Startpage'
import RegisterStudentAll from '../registerStudent/RegisterStudentAll'
import ViewSubjectsAll from '../viewSubjects/ViewSubjectsAll'
import RequestDocsAll from '../requestDocs/RequestDocsAll'
import Schedule from './Schedule'
import RecordgradeAll from '../Recordgrade/RecordgraadeAll'
import TeacherViewStudentsAll from '../teacherViewStudents/TeacherViewStudentsAll'

const ContentBox = styled.div`
    padding: 10px 10px 0px 60px;

`;

const SideBox = styled.div`
    width: 15vw;
    height: 100vh;
    background-color: rgb(253,195,215);
    color: black;
    display: block;
    min-width: 150px;
`;

const TabBox = styled.div`
    &:hover {
        background-color: white;
    }
    width:100%;
    height:100%;
    padding:10px;
    color:black;
    font-family: sans-serif;
`;

const HamburgerBox = styled.div`
    height: 100vh;
    background-color: black;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

// const teacherCommand = (
//         <div>
//             <div onClick={()=> {this.changePageState(1)}}>
//             <h6>หน้าหลัก</h6>
//             </div>    
//             <div onClick={()=> {this.changePageState(2)}}>
//             <h6>จัดการการสอนรายวิชา</h6>
//             </div>        
//             <div onClick={()=>this.changePageState(3)}>
//             <h6>บันทึกเกรด</h6>
//             </div>
//             <div onClick={()=>this.changePageState(4)}>
//             <h6>ตรวจสอบนิสิตในความดูแล</h6>
//             </div>
//             <div onClick={()=>this.changePageState(5)}>
//             <h6>เพิ่มงาน</h6>
//             </div>    
//             <div>
//             <Link to="/"><div><h6>ออกจากระบบ</h6></div></Link>
//             </div>
//         </div>
//     );


const mql = window.matchMedia(`(min-width: 800px)`);

export default class Slidebar extends Component{
    constructor(props){
        super(props)
        this.state = {
            mql: mql,
            open: props.open,
            tabs: 1,
            sidebarOpen: false,
            pageState: 1,
            // userType: "student",
            // subpage: "home"
        }
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
        this.changePageState = this.changePageState.bind(this)
    }

    changePageState(state){
        console.log(this.state.pageState)
        this.setState({pageState:state})
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
                <SideBox>
                {this.state.status == "student" ? 
                    <div>
                        <StyledLink to="/Main"><TabBox>หน้าหลัก</TabBox></StyledLink>    
                        <StyledLink to="/Main/register"><TabBox>ลงทะเบียนวิชา/เพิ่ม</TabBox></StyledLink>       
                        <StyledLink to="/Main/manage"><TabBox>จัดการรายวิชา</TabBox></StyledLink>
                        <StyledLink to="/Main/document"><TabBox>ขอเอกสาร</TabBox></StyledLink>
                        <StyledLink to="/"><TabBox>ออกจากระบบ</TabBox></StyledLink>
                    </div> : 
                this.state.status == "teacher" ?
                    <div>
                        <StyledLink to="/Main"><TabBox>หน้าหลัก</TabBox></StyledLink>    
                        <StyledLink to="/Main/register"><TabBox>ลงทะเบียนวิชา/เพิ่ม</TabBox></StyledLink>       
                        <StyledLink to="/Main/recordGrade"><TabBox>จัดการรายวิชา</TabBox></StyledLink>
                        <StyledLink to="/Main/document"><TabBox>ขอเอกสาร</TabBox></StyledLink>
                        <StyledLink to="/"><TabBox>ออกจากระบบ</TabBox></StyledLink>
                    </div>:
                    <div>
                    </div>
                }
                </SideBox>
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
                             <Route exact path="/Main" render={()=><RecordgradeAll/>} />
                             {/* <Route exact path="/Main" render={()=><TeacherViewStudentsAll/>} /> */}
                             <Route exact path="/Main/register" render={()=><RegisterStudentAll/>} />
                             <Route exact path="/Main/manage" render={()=><ViewSubjectsAll/>} />
                             <Route exact path="/Main/document" render={()=><RequestDocsAll/>} />
                        </ContentBox>
                    </Col>     
                </Sidebar>
            
            </div>
        )
    }
}