import React from 'react';
import { Link } from 'gatsby';

function SinglePizza({ pizza }) {
  return (
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2 className="mark">{pizza.name}</h2>
      <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
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
