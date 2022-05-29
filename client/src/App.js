import { Link, Route, Routes } from 'react-router-dom';
import FavoritePage from './components/views/FavoritePage/FavoritePage';
import Header from './components/views/LandingPage/Header';
import LandingPage from './components/views/LandingPage/LandingPage';
import Layout from './components/views/Layout';
import LoginPage from './components/views/LoginPage/LoginPage';
import MovieDetail from './components/views/MovieDetail/MovieDetail';
import PersistLogin from './components/views/PersistLogin';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import RequireAuth from './components/views/RequireAuth';

function App() {
  // const HocLandingPage = Auth(LandingPage, null);
  // const HocSignInPage = Auth(LoginPage, false);
  // const HocSignUpPage = Auth(RegisterPage, false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public */}
          <Route path="signin" element={<LoginPage />} />
          <Route path="signup" element={<RegisterPage />} />

          {/* private */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="favorite" element={<FavoritePage />} />
              <Route path="movie/:movieId" element={<MovieDetail />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

//null => 아무나 출입이 가능한 페이지
//true => 로그인한 유저만 출입이 가능한 페이지
//false => 로그인한 유저는 출입 불가능한 페이지
