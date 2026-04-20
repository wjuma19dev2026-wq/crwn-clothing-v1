// @ts-check

/**
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} title
 * @property {string} imageUrl
 */

import { Fragment } from "react";
import CategoryItem from "./components/category-item/category-item.component";
import Directory from "./components/directory/directory.component";

const App = () => {
  /** @type {Category[]} */
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://placehold.co/200x200",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://placehold.co/200x200",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://placehold.co/200x200",
    },
    {
      id: 4,
      title: "womes",
      imageUrl: "https://placehold.co/200x200",
    },
    {
      id: 4,
      title: "mens",
      imageUrl: "https://placehold.co/200x200 ",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
