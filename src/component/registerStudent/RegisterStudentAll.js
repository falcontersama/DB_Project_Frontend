import React, { Component } from 'react'
import Topleft from './Topleft'
import BottomLeft from './BottomLeft'

export default class RegisterStudentAll extends Component {

    constructor(props){
        super(props)
        this.state = {
            id:"",
            name:"",
            gened:"",
            subject:[
                {
                    "id" : "2110212",
                    "name" : "calculus",
                    "detail" : [
                        {
                            "sec" : 1, 
                            "time":"13.00-16.00",
                            "teacher":"atiwong",
                            "seat":35
                        },
                        {
                            "sec" : 2, 
                            "time":"13.00-16.00",
                            "teacher":"atiwong",
                            "seat":40
                        }
                    ]

                },
                {    
                    "id" : "2110222",
                    "name": "physics",
                    "detail" : [
                        {
                            "sec" : 1, 
                            "time":"13.00-16.00",
                            "teacher":"atiwong",
                            "seat":35
                        }
                        
                    ]
                }
            ],
        }
        this.searchSubject = this.searchSubject.bind(this)
    }

    searchSubject(idx,namex,genedx){
        this.setState({id:idx, name:namex, gened:genedx})
        //api search subject
        
    }

    render(){
        return(
            <div>
                <Topleft searchSubject={this.searchSubject} />
                <BottomLeft subject={this.state.subject} />
            </div>
        )
    }

}