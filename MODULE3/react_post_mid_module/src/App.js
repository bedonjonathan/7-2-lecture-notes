import Clock from "./Components/Clock";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = { showClock: true };

  toggleClock = () => {
    this.setState((prevState) => {
      return { showClock: !prevState.showClock };
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleClock}>Toggle Clock</button>
        {this.state.showClock && <Clock />}
      </div>
    );
  }
}

export default App;