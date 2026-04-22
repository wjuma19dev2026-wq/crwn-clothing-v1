import "./category-item.component.scss";

const CategoryItem = ({ category }) => {
  return (
    <div
      className="category-conainer"
      style={{ background: `url(${category.imageUrl})` }}
    >
      <div className="content">
        <h3 className="text-capitalize">{category.title}</h3>
        <button type="button" className="btn btn-light text-capitalize">
          <i className="bi bi-cart mx-1"></i>
          Shop now
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
