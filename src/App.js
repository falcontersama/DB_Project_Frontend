import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './page/Home'
import Main from './page/Main'
import Redirect from 'react-router/Redirect';

class App extends Component {

  constructor(props){
    super(props)
      this.state = {
          usernameLog:"",
          passwordLog:"",
          nameLog:"",
          status:"",
          show: false,
          login: false,
          
      }
      this.loginPass = this.loginPass.bind(this)

  }

  loginPass(user,pass,type){
    this.setState({usernameLog:user, passwordLog:pass, status:type, login:true})
  }

  render() {
    if(this.login === false){
      return(
        <Redirect to='/'/>
      )
    }
    return (
      <Router>
        <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
          
          <Route exact path="/" render={()=><Home loginPass={this.loginPass}/>} login={this.state.login} />
          <Route path="/Main" render={()=><Main usernameLog={this.state.usernameLog} nameLog={this.state.nameLog} status={this.state.status}/>}/>
          
          
        
        
        </div>
      </Router>
    );
  }
}

export default App;