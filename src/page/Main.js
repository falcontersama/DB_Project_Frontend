import React, { Component } from 'react'
import Slidebar from '../component/mainPage/Slidebar'

export default class Main extends Component {

    render(){
        
        return(
            <div>
                <div>
                <Slidebar usernameLog={this.props.usernameLog} nameLog={this.props.nameLog}/>
                
                </div>
            </div>
        
        )
    }
}