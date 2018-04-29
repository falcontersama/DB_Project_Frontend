import React, { Component } from 'react'
import {Table, Button, Modal} from 'react-bootstrap'
import styled from 'styled-components'

const RightBox = styled.div`
    width: 35vw;
    height: 60vh;
    max-height: 60vh;
    padding: 10px 10px 10px 10px;
    text-align: center;
    margin-top: 10vh;
    
`;


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

    register(item){

    }

    handleClose() {
        this.setState({ show: false });
      }
    
    handleShow(item) {
        this.setState({ subjectID: this.props.selectedSubject[0].subjectID, sec:item.sec, usernameLog: this.props.usernameLog, show: true });
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
                            {this.state.subjectID}
                            {this.state.sec}
                            {this.state.usernameLog}
                           
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

                รายละเอียดวิชา {this.props.selectedSubject[0].subjectID}
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