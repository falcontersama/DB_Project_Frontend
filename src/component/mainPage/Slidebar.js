import React, { Component } from 'react'
import {Navbar,Col} from 'react-bootstrap'
import styled from 'styled-components'
import Sidebar from 'react-sidebar'
import { Route, Link } from 'react-router-dom'

//Page student
import Startpage from './Startpage'
import RegisterStudentAll from '../registerStudent/RegisterStudentAll'
import ViewSubjectsAll from '../viewSubjects/ViewSubjectsAll'
import RequestTranscriptAll from '../requestTranscript/RequestTranscriptAll'

//Page teacher
import RecordgradeAll from '../recordgrade/RecordgraadeAll'
import TeacherViewStudentsAll from '../teacherViewStudents/TeacherViewStudentsAll'
import TeacherAddAssignmentAll from '../teacherAddAssignment/TeacherAddAssignmentAll'

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
                {this.props.status === "student" ? 
                    <div>
                        <StyledLink to="/Main"><TabBox>หน้าหลัก</TabBox></StyledLink>    
                        <StyledLink to="/Main/register"><TabBox>ลงทะเบียนวิชา/เพิ่ม</TabBox></StyledLink>       
                        <StyledLink to="/Main/manage"><TabBox>จัดการรายวิชา</TabBox></StyledLink>
                        <StyledLink to="/Main/document"><TabBox>ขอเอกสาร</TabBox></StyledLink>
                        <StyledLink to="/"><TabBox>ออกจากระบบ</TabBox></StyledLink>
                    </div> : 
                this.props.status === "teacher" ?
                    <div>
                        <StyledLink to="/Main"><TabBox>หน้าหลัก</TabBox></StyledLink>    
                        <StyledLink to="/Main/teacherViewStudent"><TabBox>ดูนิสิตในสังกัด</TabBox></StyledLink>
                        <StyledLink to="/"><TabBox>ออกจากระบบ</TabBox></StyledLink>
                    </div>:
                    <div>
                    </div>
                }
                </SideBox>
            </div>;
        
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
                        
                            {this.props.status === "student" ?
                                <ContentBox>
                                    <Route exact path="/Main" render={()=><Startpage nameLog={this.props.nameLog} usernameLog={this.props.usernameLog}/>} />
                                    <Route exact path="/Main/register" render={()=><RegisterStudentAll nameLog={this.props.nameLog} usernameLog={this.props.usernameLog}/>} />
                                    <Route exact path="/Main/manage" render={()=><ViewSubjectsAll nameLog={this.props.nameLog} usernameLog={this.props.usernameLog}/>} />
                                    <Route exact path="/Main/document" render={()=><RequestTranscriptAll nameLog={this.props.nameLog} usernameLog={this.props.usernameLog}/>} />
                                </ContentBox>:
                            this.props.status === "teacher" ? 
                                <ContentBox>
                                    <Route exact path="/Main" render={()=><RecordgradeAll nameLog={this.props.nameLog} usernameLog={this.props.usernameLog}/>} />
                                    <Route exact path="/Main/teacherViewStudent" render={()=><TeacherViewStudentsAll nameLog={this.props.nameLog} usernameLog={this.props.usernameLog}/>} />
                                    <Route exact path="/Main/teacherAddAssignment" render={()=><TeacherAddAssignmentAll nameLog={this.props.nameLog} usernameLog={this.props.usernameLog}/>} />
                                </ContentBox>:<div/>
                            }
                    </Col>     
                </Sidebar>
            </div>
        )
    }
}