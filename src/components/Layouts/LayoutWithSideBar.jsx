import useDetectDevice from "../../customHooks/useDetectDevice";
import style from "./LayoutWithSideBar.module.css";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import SideBarMobile from './../SideBarMobile/SideBarMobile';

const LayoutWithSideBar = () => {
  const { device } = useDetectDevice();
  return (
    <>
      <header className={style.header}>
        <div className={style.sidebar_container}>
          {device === "mobile" ? <SideBarMobile/> : <SideBar />}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default LayoutWithSideBar;
