import '../styles/scss/app.style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "../components/navigations/Navigation.component";
import Home from "./home/Home.view";
import Footer from '../components/footers/Footer.component';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from '../redux/selectors/userSelector';
import { useEffect } from 'react';
import { usersApi } from '../services/usersApi.service';
import { setInformation, setLogged } from '../redux/slices/usersSlice';
import cookiesUtil from '../utils/cookies.util'
import { getCartsSelector } from '../redux/selectors/cartSelector';
import Cart from './cart/Cart.view';

function App() {
  const information = useSelector(getUserSelector)?.information;
  const logged = useSelector(getUserSelector)?.logged;
  const cart = useSelector(getCartsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = cookiesUtil.getCookie('accessToken');
    if (logged || token) {
      usersApi.information(token)
        .then(res => {
          dispatch(setLogged(true));
          dispatch(setInformation(res.data))
        })
        .catch(err => {
          dispatch(setInformation(null))
        })

    }
  }
  )
  return (
    <BrowserRouter>


      <Routes>
        <Route
          path="/"
          element={
            <Home
              header={
                <Navigation
                  cart={cart}
                  information={information}
                  displayAll={true}
                />
              }
              footer={
                <Footer />
              }
            />}
        />
        <Route
          path="/cart"

          element={
            <Cart
              cartsList={cart}
              header={
                <Navigation
                  cart={cart}
                  information={information}
                  displayAll={true}
                  navigationAlwayActive={true}
                />
              }
              footer={
                <Footer />
              }
            />}
        />

      </Routes>


    </BrowserRouter>

  );
}

export default App;
