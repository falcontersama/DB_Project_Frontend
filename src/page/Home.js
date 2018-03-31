import React, { Component } from 'react'
import Login from '../component/loginPage/Login'


export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            usernameLog:"",
            passwordLog:"",
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(user,pass){
        this.setState({usernameLog:user,passwordLog:pass})
    }
    
    render(){
        return(
            <div>
            
                <Login 
                    username={this.username}
                    password={this.password}
                    handleLogin={this.handleLogin} 
                    
                    />
            </div>
        )
    }

} 