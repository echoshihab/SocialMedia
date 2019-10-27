import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    values: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then(res => {
      console.log(res);
      this.setState({
        values: res.data
      });
    });
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.values.map((value: any) => (
            <li key={value.id}>{value.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
