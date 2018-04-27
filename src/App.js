import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './page/Home'
import Main from './page/Main'

const API_Login = 'http://localhost:3006/login'

class App extends Component {

  constructor(props){
    super(props)
      this.state = {
          usernameLog:"0000000101",
          passwordLog:"",
          nameLog:"Jakkaraj",
          status:"teacher"
          
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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
          <Route exact path="/" render={()=><Home handleLogin={this.handleLogin}/>} />
          <Route path="/Main" render={()=><Main usernameLog={this.state.usernameLog} nameLog={this.state.nameLog} status={this.state.status}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;