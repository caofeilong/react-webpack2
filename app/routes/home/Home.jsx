import React, { Component } from 'react'
import  {Link}  from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div >
        <div>
          我是首页 热更成功了呵呵 yes
          <Link to='/house' >house </Link>
        </div>
      </div>
    )
  }
}

export  default Home;


