// @ts-check

/**
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} title
 * @property {string} imageUrl
 */

import Directory from "./components/directory/directory.component";

const App = () => {
  /** @type {Category[]} */
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://placehold.co/200x200/67C090/67C090",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://placehold.co/200x200/462C7D/462C7D",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://placehold.co/200x200/E87F24/E87F24",
    },
    {
      id: 4,
      title: "womes",
      imageUrl: "https://placehold.co/400x400/AE2448/AE2448",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://placehold.co/400x400/FE9EC7/FE9EC7",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
