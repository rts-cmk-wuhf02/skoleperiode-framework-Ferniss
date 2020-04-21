  import React from 'react';
  import {
    render
  } from 'react-dom'
  import {
    Pet
  } from './Pet';
  const App = () => {
    return React.createElement(
      "div", {
        id: "div for et ide og det samme var sket hvis jeg skrev class"
      },
      [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
          name: "Luna",
          animal: "Dog",
          breed: "Havanese",
        }),

        React.createElement(Pet, {
          name: "Pepper",
          animal: "Bird",
          breed: "Cockatiel",
        }),

        React.createElement(Pet, {
          name: "Doink",
          animal: "Cat",
          breed: "Mixed",
        }),
      ]
    );
  };
  render(React.createElement(App), document.querySelector("#root"));