const CategoryItem = ({ category }) => {
  return (
    <div
      className="category-conainer"
      style={{ background: `url(${category.imageUrl})` }}
    >
      <h3>{category.title}</h3>
      <button type="button" className="btn">
        Shop now
      </button>
    </div>
  );
};

export default CategoryItem;
