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
                        <div style={{color:"white"}}>Menu</div>
                    </Navbar.Brand>
                </Navbar.Header>
                </Navbar>
                <SlideBox>
                    <div>
                        <h3>หน้าหลัก</h3>
                    </div>    
                    <div>
                        <h3>แสดงความจำนงวิชาเรียน</h3>
                    </div>        
                    <div>
                        <h3>เพิ่ม-ลดรายวิชา</h3>
                    </div>
                    <div>
                        <h3>ตารางสอบ</h3>
                    </div>    
                    <div>
                        <h3>ตรวจสอบผลการเรียน</h3>
                    </div>
                    <div>
                        <h3>ขอจบการศึกษา</h3>
                    </div> 
                    <div>
                        <h3>ขอใบรับรองต่าง ๆ</h3>
                    </div> 
                    <div>
                        <h3>ข้อมูลทั่วไป</h3>
                    </div>   
                    <div>
                        <h3>สอบถามปัญหาชีวิต</h3>
                    </div>
                    <div>
                        <h3>ออกจาระบบ</h3>
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
                    <Navbar style={{backgroundColor:"grey"}} fluid>
                        <div>
                            <img src="/img/hamburgerButton.png" height="50" width="50" onClick={this.onSetSidebarOpen}/>
                            {this.props.usernameLog}
                        </div>
                    </Navbar>
                    </div>
                    <ContentBox>
                        <Startpage />
                    </ContentBox>
                        
                </Sidebar>
            
            </div>
        )
    }
}