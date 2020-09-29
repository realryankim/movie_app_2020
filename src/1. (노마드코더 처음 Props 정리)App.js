import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg",
    rating: "5",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://i1.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?fit=900%2C600&ssl=1",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://media1.s-nbcnews.com/i/newscms/2017_44/1292809/bibimbap-today-110117-tease_d2d79d2744f9f98184a589f0bc920058.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Donkatu",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFZkXBhYs_M6TShchftqSG8YCx_l3M1iVQUQ&usqp=CAU",
    rating: 5.5,
  },
  {
    id: 5,
    name: "kimbap",
    image:
      "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
    rating: 4.7,
  },
];

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;

// map 연습 첫 번째
// function App() {
//   return (
//     <div>
//       {/* dish is just an object */}
//       {foodILike.map(dish => (
//         <Food name={dish.name} image={dish.image} />
//       ))}

//       {/* this is how we pass the information (using name) to the Food component */}
//       {/* props => fav: favourite, "kimchi": value */}

//       {/* I can send as many props as I want */}
//       {/* this is how we pass the information from Parent to Children */}
//       {/* <Food
//         fav="kimchi"
//         something={true}
//         papapapa={["hello", 1, 2, 3, 4, true]}
//       /> */}

//       {/* <Food fav="kimchi" />
//       <Food fav="ramen" />
//       <Food fav="pork belly" />
//       <Food fav="fried chicken" />
//       <Food fav="kimbab" /> */}
//     </div>
//   );
// }

// map 연습 두 번째(함수 사용)

// function renderFood(dish) {
//     return <Food name={dish.name} image={dish.image} />;
//   }

// function App() {
//   return (
//     <div>
//       {console.log(foodILike.map(renderFood))}
//       {foodILike.map(renderFood)}
//     </div>
//   );
// }
