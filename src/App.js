import React, { Component } from 'react'
import axios from "axios"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './page/Home'
import Main from './page/Main'

class App extends Component {

  constructor(props){
    super(props)
      this.state = {
          usernameLog:"5831006021",
          passwordLog:"",
          nameLog:"Jakkaraj"
          
      }
      this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(user,pass){
    this.setState({usernameLog:user,passwordLog:pass})
  }

  render() {
    return (
      <Router>
        <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
          <Route exact path="/" render={()=><Home handleLogin={this.handleLogin}/>} />
          <Route exact path="/Main" render={()=><Main usernameLog={this.state.usernameLog}/>} nameLog={this.state.nameLog}/>
        </div>
      </Router>
    );
  }
}

export default App;

// Ahm checking in