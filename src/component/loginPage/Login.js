import React, { Component } from 'react'
import {form, FormGroup, FormControl, Button} from 'react-bootstrap'
import styled from 'styled-components';
//import anime from 'animejs'

const LoginBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
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
            <div>
                <LoginBox>
                    <form>
                        <FormGroup>
                        
                        <div>Username</div>
                        <FormControl
                            type="text"
                            value={this.state.username}
                            onChange={this.handleUsername}
                        />
                        <br />
                        <div>Password</div>
                        <FormControl
                            type="text"
                            value={this.state.password}
                            onChange={this.handlePassword}
                        />  
                        
                        <FormControl.Feedback />
                        <br />
                        <Button>Submit</Button>
                        </FormGroup>
                    </form>
                </LoginBox>

            
            </div>
        )
    }

} 