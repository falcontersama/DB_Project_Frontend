import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import styled from 'styled-components'

const BottomLeftBox = styled.div`
    width: 35vw;
    height: 60vh;
    max-height: 60vh;
    padding: 10px 10px 10px 10px;
    text-align: center;
    overflow-y:scroll;
    
`;

export default class BottomLeft extends Component {

    constructor(props){
        super(props)
        this.selectSubject = this.selectSubject.bind(this)
    }

    selectSubject(item,i){
        this.props.selectSubject(item.id)
    }

    render(){
        return(
            <BottomLeftBox>
                <div>รายชื่อวิชา</div>
                <div>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th style={{textAlign:"center"}}><h6>รหัสวิชา</h6></th>
                                <th style={{textAlign:"center"}}><h6>ชื่อวิชา</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.subject.map((item,i)=>
                                <tr onClick={() => this.selectSubject(item)}>
                                
                                    <td>{item.subjectId}</td>
                                    <td>{item.subjectName}</td>
                                
                                    
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            
            </BottomLeftBox>
        )
    }
}