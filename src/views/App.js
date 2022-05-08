import CartProduct from "../components/card/CartProduct.component";
import Navigation from "../components/navigations/Navigation.component";
import '../styles/scss/app.style.scss'

function App() {
  return (
    <div>
      <Navigation/>
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
