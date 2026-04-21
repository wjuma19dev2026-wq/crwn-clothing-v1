import "./category-item.component.scss";

const CategoryItem = ({ category }) => {
  return (
    <div
      className="category-conainer"
      style={{ background: `url(${category.imageUrl})` }}
    >
      <div className="content">
        <h3>{category.title}</h3>
        <button type="button" className="btn">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
