import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  subtract = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    //두번 째
    console.log("component rendered");
  }

  componentDidUpdate() {
    // 네번째 setState가 호출됐고, render function이 호출됐기때문에 update가 호출 됨
    console.log("I just updated");
  }

  //   componentWillUnmount() {
  //     // willunmount는 component가 떠날 때 호출된다. 안 보이지만 믿기
  //     console.log("Goodbye, cruel world");
  //   }

  render() {
    console.log("I'm rendering"); // 첫번째 // 세번째setState를 호출했기때문에, render function이 또 호출됨
    return (
      <div>
        <h1>The number is {this.state.count}</h1>

        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}

export default App;
