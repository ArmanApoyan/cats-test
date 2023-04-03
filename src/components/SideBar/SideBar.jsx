import { getCategories, setCategoryId } from "./../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect, useState } from "react";
import style from "./SideBar.module.css";

const SideBar = () => {
  const dispatch = useDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  useLayoutEffect(() => {
    dispatch(getCategories());
  }, []);

  const { categories } = useSelector((state) => state);

  const handleClick = (id) => {
    dispatch(setCategoryId(id));
    setSelectedCategoryId(id);
  };
  return (
    <div className={style.sidebar}>
      <h2>Categories</h2>
      <ul className={style.list}>
        {categories.map((el) => {
          if(el.id===selectedCategoryId) return <li className={`${style.category} ${style.selectedCategory}`} key={el.id} onClick={() => handleClick(el.id)}>
          {el.name}
        </li>
          return (
            <li className={style.category} key={el.id} onClick={() => handleClick(el.id)}>
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
