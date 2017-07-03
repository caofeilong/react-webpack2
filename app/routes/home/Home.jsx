import React, {Component} from 'react'
import  {Link}  from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div >
        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <h2><Link to='/house'>大厂房产查询 </Link></h2>

          <h2><a href='https://caofeilong.github.io/cflblog/'>个人博客 </a></h2>
        </div>
      </div>
    )
  }
}

export  default Home;


