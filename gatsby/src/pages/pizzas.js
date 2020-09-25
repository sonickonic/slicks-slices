import React from 'react';

const PizzasPage = () => (
  <>
    <p>pizzas page</p>
  </>
);

export default PizzasPage;

export const query = graphql`
  query PizzaQueary {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
