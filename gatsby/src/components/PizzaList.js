import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

function SinglePizza({ pizza }) {
  return (
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2 className="mark">{pizza.name}</h2>
      <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </Link>
  );
}

const PizzaList = ({ pizzas }) => (
  <>
    <div>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  </>
);

export default PizzaList;
