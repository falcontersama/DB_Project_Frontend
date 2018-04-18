import React, { Component } from 'react'
import {Navbar,Col} from 'react-bootstrap'
import styled from 'styled-components'
import Sidebar from 'react-sidebar'
import { Link } from 'react-router-dom'

//Page
import Startpage from './Startpage'
import RegisterStudentAll from '../registerStudent/RegisterStudentAll'
import ViewSubjectsAll from '../viewSubjects/ViewSubjectsAll'
import RequestDocsAll from '../requestDocs/RequestDocsAll'
import Schedule from './Schedule'

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
                <SlideBox>
                <div>  
                    <div onClick={()=>this.changePageState(1)}>
                    <h6>หน้าหลัก</h6>
                    </div>    
                    <div onClick={()=>this.changePageState(2)}>
                    <h6>ลงทะเบียนวิชา/เพิ่ม</h6>
                    </div>        
                    <div onClick={()=>this.changePageState(3)}>
                    <h6>จัดการรายวิชา</h6>
                    </div>
                    <div onClick={()=>this.changePageState(4)}>
                    <h6>ขอเอกสาร</h6>
                    </div>    
                    <div>
                    <Link to="/"><h6>ออกจากระบบ</h6></Link>
                    </div>
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
                        
                    <Col xs={1} style={{padding:"0px",width:"4vw",minWidth:"50px"}}>
                    
                        <HamburgerBox>
                            <img src="/img/hamburgerButton.png" height="auto" width="50" onClick={this.onSetSidebarOpen}/>
                            
                        </HamburgerBox>
                
                    </Col>
                    <Col xs={21}>
                        <ContentBox>
                            {this.state.pageState == 1 ? <Startpage/>:
                             this.state.pageState == 2 ? <RegisterStudentAll/>:
                             this.state.pageState == 3 ? <ViewSubjectsAll />:
                             this.state.pageState == 4 ? <RequestDocsAll />: <div/>}
                        </ContentBox>
                    </Col>     
                </Sidebar>
            
            </div>
        )
    }
}