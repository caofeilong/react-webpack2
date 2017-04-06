import React, { Component } from 'react'
import  Home  from './routes/home/Home.jsx'
import  House  from './routes/house/House.jsx'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    let {history} = this.props
    return (<Router history={history}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/house" component={House}/>
        </div>
      </Router>
    )
  }
}

export  default App;



