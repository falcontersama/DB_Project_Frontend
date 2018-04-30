import React, { Component } from 'react'
import {Table, Button, Modal} from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

const RightBox = styled.div`
    width: 35vw;
    height: 60vh;
    max-height: 60vh;
    padding: 10px 10px 10px 10px;
    text-align: center;
    margin-top: 10vh;
    
`;

const API_Register = "http://localhost:3006/register"

export default class Right extends Component{

    constructor(props){
        super(props)
        this.state = {
            show:false,
            subjectID:"",
            sec:"",
            usernameLog:"",
        }
        this.register = this.register.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    register(){
        console.log("check2")
        axios.post(API_Register,{
            courseID: this.state.subjectID,
            sec: this.state.sec,
            studentID: this.state.usernameLog
        }).then(()=>{
            this.setState({show: false})
        })
    }

    handleClose() {
        this.setState({ show: false })
      }
    
    handleShow(item) {
        this.setState({ subjectID: this.props.selectedSubject[0].subjectID, sec:item.sec, usernameLog: this.props.usernameLog, show: true })
    }

    render(){
        let subject = this.props.selectedSubject[0].detail
        return(
            <RightBox>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Comfirm Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <h4>{this.state.usernameLog} add {this.state.subjectID} sec: {this.state.sec} </h4>
                            <div>
                            <Button bsStyle="success" onClick={this.register}>Submit</Button>
                            <Button bsStyle="danger" onClick={this.handleClose}>Close</Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                รายละเอียดวิชา {this.props.selectedSubject[0].subjectID}
                <Table hover>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}><h6>section</h6></th>
                        <th style={{textAlign:"center"}}><h6>วัน-เวลาเรียน</h6></th>
                        <th style={{textAlign:"center"}}><h6>ครูผู้สอน</h6></th>
                        <th style={{textAlign:"center"}}><h6>ทีจำนวน่นั่ง</h6></th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        subject.map((item,i)=>
                        <tr key={i} onClick={()=>{this.handleShow(item)}}>
                        
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