import React from "react";
import PropTypes from "prop-types";
import "./Movie.scss";

// movie 컴포넌트 state가 필요 없어서,
// class component가 될 필요는 없다.
// 그래서 function component를 사용할 것이다.

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      {/* alt와 title을 넣는 이유는 image 위에 마우스를 올리면 영화 제목이 보이기때문! */}
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {/* map function은 또 다른 argument를 준다. */}
          {/* 하나는 현재의 아이템(genre) 다른 하나는 item number(index, i, number, whatever) */}
          {/* {index}를 li 태그 안에 넣어보면 확인 가능 */}
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        {/* array 또는 string.slice(start length, end length number)를 사용해서 자를 수 있다. */}
        {/* summary가 긴 영화들과 짧은 영화들의 높이를 맞춰줌 */}
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
