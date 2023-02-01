
import React, { PureComponent } from 'react'
export default class PureComp extends PureComponent {
    constructor(){
        super();
        this.state={
           data:10
        }
    }
    render() {
      return (
        <div>
        {console.log(this.state)}
         <h1>Pure Component {this.state.data}</h1>
  
        </div>
      )
    }
  }
