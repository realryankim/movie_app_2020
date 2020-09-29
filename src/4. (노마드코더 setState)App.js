import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [], // 미리 state를 선언하는 것도 문제가 되지않는다.
  };
  componentDidMount() {
    // setTimeout(): delay function
    setTimeout(() => {
      this.setState({
        isLoading: false,
        // book: true,  // setState를 사용할 때 state 안에 default 값들을 선언할 필요도 없고, ↑
      });
    }, 6000);
  }

  render() {
    // ES6에서 나옴
    const { isLoading } = this.state;
    // javascript ternary oprator(삼항 연산자)
    // isLoading이 true면 "Loading"을 보여줘, 아니면 "We are ready"를 보여줄거야.
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
