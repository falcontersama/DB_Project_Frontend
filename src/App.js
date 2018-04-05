import React, { Component } from 'react'
import axios from "axios"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './page/Home'
import Main from './page/Main'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
          <Route exact path="/" component={Home} />
          <Route exact path="/Main" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;

// Ahm checking in