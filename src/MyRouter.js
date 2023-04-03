import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWithSideBar from "./components/Layouts/LayoutWithSideBar";
import Home from './pages/Home';

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LayoutWithSideBar/>}>
          <Route path="/" element={<Home/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
