import React, { Component } from 'react'
import Topleft from './Topleft'
import BottomLeft from './BottomLeft'
import Right from './Right'

import {Col} from 'react-bootstrap'

export default class RegisterStudentAll extends Component {

    constructor(props){
        super(props)
        this.state = {
            id:"",
            name:"",
            gened:"",
            selectedSubject:{
                    "subjectId" : "2110212",
                    "subjectName" : "calculus",
                    "detail" : [
                        {
                            "sec" : 1, 
                            "time":[
                                {
                                    "day":"Mon",
                                    "time":"13.00-16.00"
                                },
                                {
                                    "day":"Wed",
                                    "time":"13.00-16.00"
                                }
                            ],
                            "teacher":["atiwong","ekapol"],
                            "seat":35
                        },
                        {
                            "sec" : 2, 
                            "time":[
                                {
                                    "day":"Mon",
                                    "time":"13.00-16.00"
                                },
                                {
                                    "day":"Wed",
                                    "time":"13.00-16.00"
                                }
                            ],
                            "teacher":["atiwong"],
                            "seat":40
                        }
                    ]
            },
            subject:[
                {
                    "subjectId" : "2110212",
                    "subjectName" : "calculus",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                },
                {    
                    "subjectId" : "2110222",
                    "subjectName": "physics",
                }
                
                    
                
            ],
        }
        this.searchSubject = this.searchSubject.bind(this)
        this.selectSubject = this.selectSubject.bind(this)
    }

    searchSubject(idx,namex,genedx){
        this.setState({id:idx, name:namex, gened:genedx})
        //api search subject
        
    }

    selectSubject(subj){
        this.setState({selectedSubject:subj})
    }

    render(){
        return(
            <div>
                <Col xs={5}>
                    <Topleft searchSubject={this.searchSubject} />
                    <BottomLeft subject={this.state.subject} selectSubject={this.selectSubject}/>
                </Col>
                <Col xs={5}>
                    <Right selectedSubject={this.state.selectedSubject} />
                </Col>
                
            </div>
        )
    }

}