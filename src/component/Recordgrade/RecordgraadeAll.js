import React, { Component } from 'react'
import { Table, 
    MenuItem, 
    Button, 
    SplitButton, 
    Modal, 
    ButtonToolbar, 
    ToggleButton,
    ToggleButtonGroup } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

const TableBox = styled.div`
    margin : auto;
    width : 50vw;
    min-width : 200px;
    padding-top : 10px
`;

const API_teacherCourse = 'http://localhost:3006/teacherCourse'
const API_courseAllStudent = 'http://localhost:3006/courseAllStudent'
const API_grade = 'http://localhost:3006/grade'

export default class Recordgrade extends Component{
    constructor(props){
        super(props)
        this.state = {
            show : false,
            selectStudentID : "",
            selectGrade : "",
            selectCourseID : "",
            selectCourseSec: "",
            selectCourse : [],
            teacherCourse : [],
            loadFirstState : false,
            selectStudentID : "",
            selectGrade: "",
        }
        this.changeStateDropDown = this.changeStateDropDown.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.changeGrade = this.changeGrade.bind(this)
        this.putGrade = this.putGrade.bind(this)
    }

    componentWillMount(){
        axios.get(API_teacherCourse, {params: {teacherID: this.props.usernameLog }})
            .then((response) => {
                this.setState({teacherCourse:response.data.data, selectGrade:parseFloat(4.0)})
            })
            .then((response) => {
                axios.get(API_courseAllStudent, {params: {courseID: this.state.teacherCourse[0].courseID, sec:this.state.teacherCourse[0].sec}})
                .then((response)=>{
                    this.setState({selectCourse:response.data.data, selectCourseID:this.state.teacherCourse[0].courseID,selectCourseSec:this.state.teacherCourse[0].sec})
                })
            })
            .then((response)=>{
                this.setState({loadFirstState:true})
            })
            .catch((error) => console.log(error))
    }

    changeStateDropDown(item){

        this.setState({selectCourse:item, selectCourseSec:item.sec})
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow(id) {
        this.setState({ selectStudentID: id ,show: true});
    }

    changeGrade(e){
        let grade = e.target.value

    }

    selectGrade(grade,e){
        this.setState({selectGrade:grade})
    }

    putGrade(){
        //console.log(this.state.selectCourseID,this.state.selectCourseSec,this.state.selectStudentID, parseFloat(this.state.selectGrade))
        //console.log(this.state.selectCourseSec)
        console.log(this.state)
        axios.put(API_grade, {
            courseID: this.state.selectCourseID, 
            sec:this.state.selectCourseSec, 
            studentID: this.state.selectStudentID, 
            grade:this.state.selectGrade
        }).then(()=>{
            this.setState({show:false})
            console.log("Put grade success") 
            
        }).then(()=>{

            axios.get(API_courseAllStudent, {params: {courseID: this.state.teacherCourse[0].courseID, sec:this.state.teacherCourse[0].sec}})
            .then((response)=>{
                this.setState({selectCourse:response.data.data, selectCourseID:this.state.teacherCourse[0].courseID,selectCourseSec:this.state.teacherCourse[0].sec})
            })

        })
        .catch((error) => console.log(error))
    }

    render(){
        return(
            <div>
                {this.state.loadFirstState == true? 
                    <div>
                        <div>
                            <SplitButton bsStyle="primary" id={`dropdown-basic`} title={this.state.selectCourseID} style={{minWidth:"150px"}}>
                                {this.state.teacherCourse.map((item,i)=>
                                    
                                (  
                                    <MenuItem style={{minWidth:"170px"}} key={i} active={this.state.selectCourseID.name === item.name ? true:false} onClick={()=>this.changeStateDropDown(item)}>
                                        {item.courseID} sec{item.sec}
                                    </MenuItem> 
                                        
                                )
                                )}
                            </SplitButton>
                            <Button className="btn pull-right" bsStyle="success">Export to CSV</Button>
                        </div>
                        <TableBox>
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th style={{textAlign:"center"}}><h6>รหัสนิสิต</h6></th>
                                        <th style={{textAlign:"center"}}><h6>เกรด</h6></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.selectCourse.map((item,i)=>
                                        <tr key={i}>

                                            <td style={{textAlign:"center"}}>{item.studentID}</td>
                                            <td style={{textAlign:"center"}} onClick={()=>this.handleShow(item.studentID)}>{item.grade}</td>
                                            <Modal show={this.state.show} onHide={this.handleClose} >
                                            <Modal.Header closeButton>
                                                <Modal.Title>Submit grade</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <h4>กำหนดเกรดของนิสิต {this.state.selectStudentID}</h4>
                                                    <ButtonToolbar>
                                                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                            <ToggleButton value={1} onClick={()=>{this.selectGrade(4.0)}}>A</ToggleButton>
                                                            <ToggleButton value={2} onClick={()=>{this.selectGrade(3.5)}}>B+</ToggleButton>
                                                            <ToggleButton value={3} onClick={()=>{this.selectGrade(3.0)}}>B</ToggleButton>
                                                            <ToggleButton value={4} onClick={()=>{this.selectGrade(2.5)}}>C+</ToggleButton>
                                                            <ToggleButton value={5} onClick={()=>{this.selectGrade(2.0)}}>C</ToggleButton>
                                                            <ToggleButton value={6} onClick={()=>{this.selectGrade(1.5)}}>D+</ToggleButton>
                                                            <ToggleButton value={7} onClick={()=>{this.selectGrade(1.0)}}>D</ToggleButton>
                                                            <ToggleButton value={8} onClick={()=>{this.selectGrade(0)}}>F</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </ButtonToolbar>
                                                    <div style={{padding:"10px"}}>
                                                        <Button bsStyle="success" onClick={this.putGrade}>Submit</Button>
                                                        
                                                        <Button bsStyle="danger" onClick={this.handleClose}>Cancel</Button>
                                                    </div>

                                                </Modal.Body>
                                            </Modal>
                                        
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </TableBox>
                    </div>:
                    <div/>
            
                }

                
            </div>
        )
    }
}