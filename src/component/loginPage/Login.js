import React, { Component } from 'react'
import {form, FormGroup, FormControl, Button} from 'react-bootstrap'
import styled from 'styled-components';
import Redirect from 'react-router-dom/Redirect';

const LoginBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("img/loginBackground.png");
    background-size: cover;
    opacity: 0.7;
`;

export default class Login extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            login:false,
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.loginProcess = this.loginProcess.bind(this)
    }

    handleUsername(e){
        this.setState({username:e.target.value})
    }

    handlePassword(e){
        this.setState({password:e.target.value})
    }

    loginProcess(){
        if(true){
            this.props.handleLogin(this.state.username,this.state.password)
            this.setState({login:true})
        }
    }
   
    render(){
        if (this.state.login == true) {
            return (
                
                <Redirect to='/Main' />)
          }
        return(
            <div>
                
                <Content />
                    
                <LoginBox>
                    
                    <form>
                        <FormGroup>
                        <div><h3>Username</h3></div>
                        <FormControl
                            type="text"
                            value={this.state.username}
                            onChange={this.handleUsername}
                        />
                        <br />
                        <div><h3>Password</h3></div>
                        <FormControl
                            type="text"
                            value={this.state.password}
                            onChange={this.handlePassword}
                        />  
                        
                        <FormControl.Feedback />
                        <br />
                        <Button onClick={this.loginProcess}><h4>Submit</h4></Button>
                        </FormGroup>
                    </form>
                </LoginBox>

            
            </div>
        )
    }

} 