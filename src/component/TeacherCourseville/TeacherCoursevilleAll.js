import React, { Component } from 'react'
import { SplitButton, MenuItem, Button,Col } from 'react-bootstrap'
import styled from 'styled-components'

export default class TeacherCoursevilleAll extends Component{

    constructor(props){
        super(props)
        this.state = {
            work : [
                {
                    CourseID:"",
                    WorkName:"",
                    DDate:""
                },
                {
                    CourseID:"",
                    WorkName:"",
                    DDate:""
                },
                {
                    CourseID:"",
                    WorkName:"",
                    DDate:""
                },
            ],
            selectedWork : [
                {
                    CourseID:"",
                    WorkName:"",
                    DDate:"",
                    Student:[
                        {
                            name:"",
                            studentID:"",
                            Score:"",
                        },
                        {
                            name:"",
                            studentID:"",
                            Score:"",
                        },
                        {
                            name:"",
                            studentID:"",
                            Score:"",
                        },
                    ]
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <Col>
                    {/* <div>
                    <SplitButton bsStyle="primary" id={`dropdown-basic`} title={this.state.selectdata.name} style={{minWidth:"150px"}}>
                        {this.state.data.map((item,i)=>
                            
                        (  
                            <MenuItem style={{minWidth:"170px"}} key={i} active={this.state.selectdata.name == item.name ? true:false} onClick={()=>this.changeStateDropDown(item)}>
                                {item.name}
                            </MenuItem> 
                                
                        )
                        )}
                    </SplitButton>
                    <Button className="btn pull-right" bsStyle="success">Export to CSV</Button>
                    </div>  */}
                </Col>
                <Col>
                </Col>
            </div>
        )
    }
}