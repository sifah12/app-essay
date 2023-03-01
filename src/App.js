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
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      data:[],
      loading:true,
      searchQerry:''
    }
  }
  
   async componentDidMount(){
    const result=await fetch("https://api.openweathermap.org/data/2.5/forecast?q=kigali&appid=1383c1ef39cccbbc106d269850cfc481")
    const mydata=await result.json()
    this.setState({data:mydata.list,loading:false})
   }

   search=(event)=>{
const searchQerry= event.target.value
console.log(searchQerry)
console.log(this.state)
this.setState({searchQerry});
}
   

  
  render() {
    let filteredList=null
    filteredList= this.state.data.filter((filterData)=>(
      filterData.weather[0].main.toLowerCase().includes(this.state.searchQerry.toLowerCase())
    ))

    let displayContent=null
    if(this.state.loading)
    {
      displayContent=<div>
        <h1>loading..........</h1>
      </div>
    }
    else if(filteredList.length>0)
    {
    displayContent=  
      (
      <div>
        
        {filteredList.map((mydata)=>(
      <h1>{mydata.weather[0].main}</h1>
      
      
        ))}
      </div>
      )
    }
    else{
      displayContent=<div>
        <p style={{color:"white"}}>no result found</p>
      </div>
    }
    return (
    
    
      <div className="logos">
        <input type onChange={this.search} className="myths"></input>
        
     <div className='nav' >{displayContent}</div>
      </div>
    );
     }
  }


export default App;
