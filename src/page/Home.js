import React, { Component } from 'react'
import Login from '../component/loginPage/Login'


export default class Home extends Component{

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