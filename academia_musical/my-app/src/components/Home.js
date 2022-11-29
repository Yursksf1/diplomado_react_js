import Course from "./Course";

import React, { PureComponent } from 'react'
var data = require('../data.json');



export default class Home extends PureComponent {
  render() {
    console.log('data', data)
    return (
        <div>
            <div>Academia XYZ cursos</div>
            {
                data.map(curso => {
                    return <Course key={curso.titulo} curso={curso}/>
                })
            }
        </div>
      
    )
  }
}
