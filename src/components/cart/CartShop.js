import { NavLink } from "react-router-dom";
import CartCard from "./CartCard";

function CartShop({ cart }) {
    const { id, shop, products } = cart;

    return (
        <div className="cart-shop-outer">
            <div className="cart-shop">
                <div className="cart-shop__header">
                    <h1 className="cart-shop__header-name">{shop.name}</h1>
                    <NavLink to={`/cart/order/${id}`} >
                        <button className="cart-shop__header-order-btn">Order</button>
                    </NavLink>

                </div>

                <div className="cart__cart-list">
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