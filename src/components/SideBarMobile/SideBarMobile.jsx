import { getCategories, setCategoryId } from "./../../store/action";
import { useDispatch, useSelector } from "react-redux";
import style from "./SideBarMobile.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useLayoutEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";

const SideBarMobile = () => {
  const dispatch = useDispatch();
  const [showSideBar, setShowSideBar] = useState(false);
  useLayoutEffect(() => {
    dispatch(getCategories());
  }, []);

  const { categories } = useSelector((state) => state);

  const handleIconClick = () => {
    setShowSideBar(!showSideBar);
  };

  const handleClick = (id) => {
    dispatch(setCategoryId(id));
  };
  return (
    <>
      <div className={style.sidebar_icon_container}>
        <AiOutlineMenu
          onClick={handleIconClick}
          className={style.sidebar_icon}
        />
      </div>
      {showSideBar ? (
        <div className={style.sidebar_mobile}>
          <SideBar />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SideBarMobile;
