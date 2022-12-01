import Course from "./Course";

import React, { PureComponent } from 'react'
var data = require('../data.json');



export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      curso: undefined
    };
  }

  changeCurso = (curso) => {
    this.setState({curso: curso});
  }

  render() {
    const { curso } = this.state

    console.log('data', data)

    return (
        <div>
            <div>Academia XYZ cursos</div>
            {curso ? <Course key={curso.titulo} curso={curso}/>:
                data.map(curso => {
                  return <p
                  onClick={() => this.changeCurso(curso)}
                  > {curso.titulo} 
                  </p>
              })
                // data.map(curso => {
                //     return <Course key={curso.titulo} curso={curso}/>
                // })
            }
         
        </div>
      
    )
  }
}
