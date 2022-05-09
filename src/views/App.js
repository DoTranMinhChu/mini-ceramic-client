import CartProduct from "../components/card/CartProduct.component";
import Navigation from "../components/navigations/Navigation.component";
import '../styles/scss/app.style.scss'
import background from '../assets/images/background.jpg'
import LoginRegisterPage from "./login/LoginSignupPage.view";
function App() {
  return (
    <div>
      <Navigation/>
      <div>
        <img src={background} alt='background'/>
      </div>
      <LoginRegisterPage/>
      <div style={{display:'flex',flexWrap:'wrap',padding:'24px',margin:'24px'}}>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
      </div>
    </div>
  );
}

export default App;
