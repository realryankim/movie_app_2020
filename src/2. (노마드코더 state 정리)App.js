import React from "react";
import PropTypes from "prop-types";

// function component는 쉬웠는데, 왜 class component에 대해 이해를 해야하는거야? Why the hell?
// => class component는 state라는 녀석을 가지고 있기때문이지!
// => state는 object이고, component의 data를 넣을 공간이 있고, 데이터는 변한다!
// => data가 변한다는 게, state를 사용해야하는 이유다.

// => state를 사용할 때는 'state'라고만 쓰지 않고, class이기때문에!
// => 'this.state.something'이렇게 써야한다.

// React는 자동적으로 class component의 render method를 실행한다! 자동으로!
class App extends React.Component {
  state = {
    count: 0,
  };

  // state는 object고, setState는 새로운 state를 받아야한다.
  add = () => {
    // const { count } = this.state;
    // console.log("add");

    // function 방법으로 state를 가져오는 방법이 다음과 같다. current => ()
    // parameter을 사용하는 방법도 있다.
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  // 매 순간 setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출한다.

  subtract = () => {
    // console.log("subtract");
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        {/* onClick={this.add()} => 함수에 ()를 사용하는 것은 'immediately, 즉시'라는 것을 의미한다. */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}

export default App;
