import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import styled from 'styled-components'

const RightBox = styled.div`
    width: 35vw;
    height: 60vh;
    max-height: 60vh;
    padding: 10px 10px 10px 10px;
    text-align: center;
    
`;


export default class Right extends Component{
    render(){
        console.log(this.props)
        return(
            <RightBox>
                รายละเอียดวิชา
                <Table>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}><h6>section</h6></th>
                        <th style={{textAlign:"center"}}><h6>วัน-เวลาเรียน</h6></th>
                        <th style={{textAlign:"center"}}><h6>ครูผู้สอน</h6></th>
                        <th style={{textAlign:"center"}}><h6>ทีจำนวน่นั่ง</h6></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.selectedSubject.detail.map((item,i)=>
                        <tr>
                        
                            <td>{item.sec}</td>
                            <td>{item.time.map((x, idx) => <span key={idx}>{x.day} {x.time}<br/></span>)}</td>
                            <td>{item.teacher.map((x, idx) => <span key={idx}>{x}<br/></span>)}</td>
                            <td>{item.seat}</td>
                        </tr>
                    )}
                </tbody>
                </Table>
            </RightBox>
        )
    }
}