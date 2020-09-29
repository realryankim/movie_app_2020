import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      // 쿼리 스트링 ?, sort_by=key로 정렬할 수 있다. 여기에서는 평점으로 정렬함.
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // console.log(movies);

    // this.setState({ movies: movies }); // 처음 movies는 setState의 movies이고 두번 째 movies는 axios에서 온 movies이다.
    // 위에 것을 더 짧게 하면 아래와 같다.
    // this.setState({ movies });

    this.setState({ movies, isLoading: false });

    // 위와 같이 바꾸면 짧게 만들 수 있다.
    // const {movies} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
  };

  // componendDidMount만 써도 되고, 위에 함수를 따로 만들어서 콜해도 된다.
  componentDidMount() {
    // axios.get("url")
    // axios is not fast all the time, so

    // javascript에게 getMovie function은 시간이 조금 필요하다고, 그래서 우리는 그걸 기다려야한다.
    // 그걸 위해서 async()와 await를 사용해야한다.
    // 이것은 함수가 비동기라고 한 것과 같다. 즉, "너는 이걸 기다려야해"라는 말이다. (async)
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
