import '../styles/scss/app.style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "../components/navigations/Navigation.component";
import Home from "./home/Home.view";
import Footer from '../components/footers/Footer.component';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedSelector } from '../redux/selectors/userSelector';
import { useEffect } from 'react';
import { usersApi } from '../services/usersApi.service';
import { setInformation, setLogged } from '../redux/slices/usersSlice';
import { getCookie } from '../utils/cookies.util'
import { getCartsSelector } from '../redux/selectors/cartSelector';
import Cart from './cart/Cart.view';
import CartOrder from './cart/order/CartOrder.view';



function App() {

  const logged = useSelector(getLoggedSelector);
  const cart = useSelector(getCartsSelector);

  const dispatch = useDispatch();

  useEffect(() => {


    const token = getCookie('accessToken');
    if (!logged && token) {
      usersApi.information(token)
        .then(res => {
          dispatch(setLogged(true));
          dispatch(setInformation(res.data.data))
        })
        .catch(err => {
          dispatch(setInformation(null))
        })
    }
  })
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
                  displayAll={true}
                  navigationAlwayActive={true}
                />
              }
              footer={
                <Footer />
              }
            />}
        />
        <Route
          path="/cart/order/:id"

          element={
            <CartOrder
             
              header={
                <Navigation
                  cart={cart}
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
