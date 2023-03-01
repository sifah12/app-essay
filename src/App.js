// mardi le 28/03 how to write name and campany in browser

// import { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super()
//     this.state= {
//       name: "Hello sifa",
//       campany:'',
//     }
//   }
// messageapp=() =>{
// this.setState({name:'allia'})
// this.setState({campany:'kiku'})
// }

//   render() {
//     return (
//       <div classsName="App">
//         <h1>{this.state.name}</h1>
//         <p>{this.state.campany}</p>
//         <button onClick={this.messageapp}>click</button>

//       </div>
//     );
//   }
// }

// export default App;

// import { Component } from "react";
// import "./App.css";

// class App extends Component {
// constructor(){
//   super()
//   this.state ={
//   value:"v",
//   github:""
//   }

// }
// message =(event)=>{

// let github=event.target.value
// this.setState({value: github})
// }
// render(){

//   return(

// <div className="logos">

// {/* {this.state.github} */}
// <input type="text" onChange={this.message} />
// <p>{this.state.value}</p>

//   <button onClick={this.message}>submit</button>
// </div>

//   )
// }

// }

//   export default App;
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return <div>App</div>;
  }
}
