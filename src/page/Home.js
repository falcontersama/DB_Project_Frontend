import React, { Component } from 'react'
import Login from '../component/loginPage/Login'


export default class Home extends Component{

    render(){
        return(
            <div>
            
                <Login 
                    loginPass={this.props.loginPass} 
                    login={this.props.login}
                    />
                
            </div>
        )
    }

} 