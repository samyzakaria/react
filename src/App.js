import logo from './logo.svg';
import './App.css';
import Hamza from './module';
import Child from './child';
import React, { Component } from "react";
import Item from './comonent/item';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Nav from './comonent/Nav';
import Home from './comonent/Home';
import About from  './comonent/About';
import Blog from  './comonent/Blog';

class App extends Component {

constructor(){
    super();
    console.log('constructor')
}

componentDidMount(){
    console.log("componentdidmount");
}
componentDidUpdate(prevProps,prevState){
    console.log("cpmponentdidupdate",prevProps,prevState)
}
  state = {
    items: [
      { name: "ahmed", id: "1", age: "22", count: 1 },
      { name: "zak", id: "2", age: "22", count: 2 },
      { name: "samy", id: "3", age: "22", count: 3 },
      { name: "khaled", id: "4", age: "22",count:4 },
 
    ],
  };
  // click=()=>{

  //     this.setState({
  //         name:'ahmed'
  //     })
  // }

  //   state = {
  //     name: "",
  //   };
  //   handlechange = (e) => {
  //     this.setState({
  //       name: e.target.value,
  //     });
  //   };

//   onsubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.name);
//   };
handleClick=(e)=>{
    let item  = this.state.items;
    item.push({ name: "newstate", id: "5", age: "22", count: 1 });
this.setState({
    items:item
})
}
handleDelete=(e)=>{
this.setState({
  items: [{ name: "newstate", id: "5", age: "22", count: 1 }],
});
}

  render() {
      console.log("Render");
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Item items={this.state.items} />
          <button onClick={this.handleClick}>add</button>
          <button onClick={this.handleDelete}>delete</button>

          {/* <button onClick={this.click}>Change</button> */}
          {/* <p>{this.state.name}</p> */}
          {/* <p>{this.state.age}</p> */}
          {/* <Child test={this.state.salary} /> */}

          {/* <form onSubmit={this.onsubmit}>
          <input type="text" onChange={this.handlechange} />
          <button>click me</button>
        </form>
        {this.state.name} */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;