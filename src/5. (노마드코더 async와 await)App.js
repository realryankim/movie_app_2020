import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  // componendDidMount만 써도 되고, 위에 함수를 따로 만들어서 콜해도 된다.
  componentDidMount() {
    // axios.get("url")
    // axios is not fast all the time, so

    // javascript에게 getMovie function은 시간이 조금 필요하다고, 그래서 우리는 그걸 기다려야한다.
    // 그걸 위해서 async()와 await를 사용해야한다.
    // 이것은 함수가 비동기라고 한 것과 같다. 즉, "너는 이걸 기다려야해"라는 말이다. (async)
    // 비동기는 새로고침하지않고, 페이지 부분이 변하는 것
    // 뭘 기다려? (await) axios? yes.
    // async를 사용하지 않으면 await 키워드를 사용할 수 없다.
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
