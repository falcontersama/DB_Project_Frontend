import React, { Component } from 'react'
import { Col, Button, Checkbox, FormGroup, FormControl } from 'react-bootstrap' 
import styled from 'styled-components'

const TopleftBox = styled.div`
    width: 35vw;
    height: 35vh;
    padding: 10px 10px 10px 10px;
    text-align: center;
`;




export default class Registration extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:"",
            name:"",
            gened:false,
        }
        this.handleId = this.handleId.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleGened = this.handleGened.bind(this)
        this.searchSubject = this.searchSubject.bind(this)
    }

    handleId(e){
        this.props.handleId(e)
    }

    handleName(e){
        this.props.handleName(e)
    }

    handleGened(e){
        this.props.handleGened(e) //true is uncheck, false is check
        console.log(this.state.gened)
    }
    
    searchSubject(){
        this.props.searchSubject(this.state.id,this.state.name,this.state.gened)
    }
    
    render(){
        return(
            <TopleftBox>
                <form>
                    <FormGroup>
                        <div>
                            <Col xs={3}><h6>รหัสวิชา</h6></Col>
                            <Col xs={7}>
                            <FormControl
                                type="text"
                                value={this.state.Id}
                                onChange={this.handleId}
                            />
                            </Col>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div>
                            <Col xs={3}><h6>ชื่อวิชา</h6></Col>
                            <Col xs={7}>
                            <FormControl
                                type="text"
                                value={this.state.Name}
                                onChange={this.handleName}
                            />
                            </Col>  
                        </div>
                        <br />
                        <br />

                        <FormControl.Feedback />
                        <div>
                        <Checkbox checked={this.state.gened} onClick={this.handleGened}>Gened</Checkbox>
                        
                        </div>
                    </FormGroup>
                    <Button onClick={this.searchSubject}>Search</Button>
                    
                </form>
            </TopleftBox>
        )
    }
}