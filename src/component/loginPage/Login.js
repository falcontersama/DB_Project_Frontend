import React, { Component } from 'react'
import {form, FormGroup, FormControl, HelpBlock} from 'react-bootstrap'
import styled from 'styled-components';

const LoginBox = styled.div`
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
`;


export default class Login extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleUsername(e){
        this.setState({username:e.target.value})
    }

    handlePassword(e){
        this.setState({password:e.target.value})
    }
   
    render(){
        return(
            <LoginBox>
                
                <form>
                    <FormGroup>
                    
                    <div>Username</div>
                    <FormControl
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsername}
                    />
                    <div>Password</div>
                    <FormControl
                        type="text"
                        value={this.state.password}
                        onChange={this.handlePassword}
                    />  
                    
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>
                </form>
            </LoginBox>
        )
    }

} 