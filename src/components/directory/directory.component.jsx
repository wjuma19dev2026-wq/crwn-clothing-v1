import "./directory.component.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="row">
      <div className="col-12 mt-5">
        <div className="categories-container">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directory;
