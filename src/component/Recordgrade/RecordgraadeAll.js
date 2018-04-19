import React, { Component } from 'react'
import { Table, DropdownButton, MenuItem } from 'react-bootstrap'

export default class Recordgrade extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectdata : "subject1",
            data : [
                {
                    name : "subject1",
                    student : [
                        {
                            name : "eiei",
                            grade : "A",
                        },
                        {
                            name : "eiei2",
                            grade : "B+"
                        }
                        
                    ],
                },
                {
                    name : "subject2",
                    student : [
                        {
                            name : "eiei",
                            grade : "A",
                        },
                        {
                            name : "eiei2",
                            grade : "B+"
                        }
                        
                    ],
                },
                {
                    name : "subject3",
                    student : [
                        {
                            name : "eiei3",
                            grade : "C+",
                        },
                        {
                            name : "eiei2",
                            grade : "B+"
                        }
                        
                    ],
                }
            ]
        }
            
    }

    render(){
        return(
            <div>
                <div>
                <DropdownButton id={`dropdown-basic`} title={this.state.selectdata}>
                    {this.state.data.map((item,i)=>
                        
                      (  
                        <MenuItem key={i} active={this.state.selectdata == item.name ? true:false}>
                            {item.name} bbbbb
                        </MenuItem> 
                            
                      )
                    )}
                </DropdownButton>
                </div>
            </div>
        )
    }
}