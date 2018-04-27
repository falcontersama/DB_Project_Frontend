import React, { Component } from 'react'
import Topleft from './Topleft'
import BottomLeft from './BottomLeft'
import Right from './Right'
import axios from 'axios'

import {Col} from 'react-bootstrap'

const API_listCourses = 'http://localhost:3006/listCourses'
const API_studentCourse = 'http://localhost:3006/studentCourse'
const API_courseDetail = 'http://localhost:3006/courseDetail'

export default class RegisterStudentAll extends Component {

    constructor(props){
        super(props)
        this.state = {
            id:"",
            name:"",
            gened:"",
            selectedSubject:[],
            listCourses:[],
            studentCourse:[],
            showSelected:false
        }
        this.searchlistCourses = this.searchlistCourses.bind(this)
        this.selectSubject = this.selectSubject.bind(this)
        this.handleId = this.handleId.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleGened = this.handleGened.bind(this)
    }

    searchlistCourses(){
        axios.get(API_listCourses, {params: {courseID: this.state.id, courseName: this.state.name }})
            .then((response) => {
                this.setState({listCourses:response.data.data})
            })
            .then((response)=>{
                axios.get(API_studentCourse, {params: {studentID: this.props.usernameLog}})
                .then((response) => {
                    this.setState({studentCourse:response.data.data})
                })
                .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))

    }

    handleId(e){
        this.setState({id:e.target.value})
    }

    handleName(e){
        this.setState({name:e.target.value})
    }

    handleGened(e){
        this.setState({gened:e.target.checked}) //true is uncheck, false is check
    }

    selectSubject(subj){
        console.log(subj)
        axios.get(API_courseDetail, {params: {courseID: subj}})
            .then((response) => {
                if(response.data.data.length > 0){
                    this.setState({selectedSubject:response.data.data })
                }
                
            })
            .then((response) => {
                if(response.data.data.length > 0){
                    this.setState({showSelected:true })
                }
            })
            .catch((error) => console.log(error))
    }

    render(){
        return(
            <div>
                <Col xs={5}>
                    <Topleft searchSubject={this.searchlistCourses} handleId={this.handleId} handleName={this.handleName} handleGened={this.handleGened} />
                    <BottomLeft listCourses={this.state.listCourses} selectSubject={this.selectSubject}/>
                </Col>
                <Col xs={5}>
                    {this.state.showSelected == false? 
                        <div></div>:
                        <Right selectedSubject={this.state.selectedSubject} />
                    }
                    
                </Col>
                
            </div>
        )
    }

}