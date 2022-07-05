import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLoggedSelector } from "../../redux/selectors/userSelector";
import CartCard from "./CartCard";

function CartShop({ cart }) {
    const { id, shop, products } = cart;
    const logged = useSelector(getLoggedSelector);
    const handleCartOrder = (e) =>{
        if(!logged){
            document.getElementById("login").click();
            e.preventDefault()
        }
    }
    return (
        <div className="cart-shop-outer">
            <div className="cart-shop">
                <div className="cart-shop__header">
                    <h1 className="cart-shop__header-name">{shop.name}</h1>
                    <NavLink to={`/cart/order/${id}`} onClick={handleCartOrder}>
                        <button className="cart-shop__header-order-btn">Order</button>
                    </NavLink>

                </div>

                <div >
                    {products.map((product) => {
                        return (
                            <CartCard key={product.id} productInfomation={product} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CartShop;