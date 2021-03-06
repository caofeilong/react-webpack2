import React, { Component } from 'react'
import  {Link}  from 'react-router';
import  $ from 'jquery'

class Home extends Component {
    componentWillMount() {
        $.get('/api/house/list', (data) => {
            this.setState({'list': data.data})
        })
    }
    render() {
        let {list} = this.state || {};
        return (
            <div style={{width:'80%',margin:'30px auto',}}>
              <button   className="btn btn-default pull-right" style={{marginBottom:10}}>重新构建数据</button>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td style={{width:50}}>序号</td>
                        <td>项目名称</td>
                        <td>开发商</td>
                        <td>地址</td>
                        <td style={{width:150}}>开发商电话</td>
                        <td>面积</td>
                    </tr>
                    </thead>
                    <tbody>
                    {list && list.length > 0 && list.map((item, i) => {
                        return <tr key={i}>
                            <td>
                                {i + 1}
                            </td>
                            <td>
                                {item.projectName}
                            </td>
                            <td>
                                {item.dev}
                            </td>
                            <td>
                                {item.address}
                            </td>
                            <td>
                              {item.phone}
                            </td>
                            <td>
                                {item.area}
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export  default Home;


