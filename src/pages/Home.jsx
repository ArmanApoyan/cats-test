import HomeHeader from "./../components/HomeHeader/HomeHeader";
import { useDispatch } from "react-redux";
import { getCats } from "../store/action";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import Cats from "./../components/Cats/Cats";
import MoreCats from "../components/MoreCats/MoreCats";

const Home = () => {
  const dispatch = useDispatch();
  const { cats, selectedCategoryId, page } = useSelector((state) => state);
  useLayoutEffect(() => {
    dispatch(getCats(selectedCategoryId, page));
    //make a new request when the category and page have changed
  }, [selectedCategoryId, page]);
  return (
    <>
      <HomeHeader />
      <Cats cats={cats} />
      <MoreCats />
    </>
  );
};

export default Home;
