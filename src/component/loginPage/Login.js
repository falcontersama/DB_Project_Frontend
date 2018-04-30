import React, { Component } from 'react'
import {form, FormGroup, FormControl, Button, Modal} from 'react-bootstrap'
import styled from 'styled-components'
import Redirect from 'react-router-dom/Redirect'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Background from '../../loginBackground.png';

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
    background-image: url(${Background});
    background-color: black;
    background-size: cover;
    opacity: 0.7;
`;

const API_Login = 'http://localhost:3006/login'


export default class Login extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            login:false,
            show: false
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.loginProcess = this.loginProcess.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleUsername(e){
        this.setState({username:e.target.value})
    }

    handlePassword(e){
        this.setState({password:e.target.value})
    }

    handleLogin(){
        axios.post(API_Login, {
          ID: this.state.username, 
          password: this.state.password
        })
        .then((res)=>{
          console.log(res)
          if(res.data.staus === "success"){
            console.log("success")  
            this.props.loginPass(this.state.username, this.state.password)
            this.setState({login:true})
          }else if(res.data.staus === "fail"){
            console.log("fail")
            this.setState({username:"",password:""})
            this.handleShow()
          }
        })
        .catch((error) => console.log(error))
        
      }

    loginProcess(){
        if(true){
            this.props.handleLogin(this.state.username,this.state.password)
        }
    }

    handleClose() {
        this.setState({ show: false });
      }
    
    handleShow() {
        this.setState({ show: true });
    }
   
    render(){
        if (this.state.login == true) {
            return (
                <Redirect to='/Main' />)
          }
        return(
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <h3>Username or password is wrong.</h3>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                
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
                            type="password"
                            value={this.state.password}
                            onChange={this.handlePassword}
                        />  
                        
                        <FormControl.Feedback />
                        <br />
                        <Button onClick={this.handleLogin}><h4>Login</h4></Button>
                        </FormGroup>
                    </form>
                </LoginBox>

            
            </div>
        )
    }

} 