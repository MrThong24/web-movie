import { Fragment } from "react";

import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
import MovieDetailsPage from "./page/MovieDetailsPage";
import MoviePage from "./page/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movie" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
