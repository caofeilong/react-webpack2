/*globals COURSES:true */
import React, { Component } from 'react'
import { Link } from 'react-router'
class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
