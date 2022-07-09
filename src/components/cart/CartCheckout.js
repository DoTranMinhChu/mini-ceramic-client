import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartByIdSelector, getCheckOutByIdSelector } from "../../redux/selectors/cartSelector";
import { removeCartById } from "../../redux/slices/cartsSlice";
import { ordersApi } from "../../services/ordersApi.service";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../redux/slices/commonSlice";
function CartCheckout({ cartId }) {

    const cart = useSelector(getCartByIdSelector(cartId))
    const { total, subTotal, itemNumber, shipping } = useSelector(getCheckOutByIdSelector(cartId, 4.99));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!cart){
            navigate('/cart');
        }
    })
    const handleCheckout = async () => {
        dispatch(setLoading(true));
        const orders = cart.products.map(item => {
            return {
                productId: item.product.id,
                quantity: item.quantity
            }
        })

        await ordersApi.newOrders(orders).then(
            res => {
                dispatch(removeCartById({ id: cartId }))
                navigate('/');
            }
        ).catch(err => {
            console.log('err : ', err)
        })

        dispatch(setLoading(false));
    }
    console.log(total)

    return (
        <>
            <div className="checkout-box">
                <div className="checkout-box__container">
                    <div className="checkout-box__list-details-box">
                        <div className="checkout-box__detail-box">
                            <h1 className="checkout-box__detail-title">Subtotal</h1>
                            <h1 className="checkout-box__price">${subTotal}<p className="checkout-box__price--unit">USD</p></h1>
                        </div>
                        <div className="checkout-box__detail-box">
                            <h1 className="checkout-box__detail-title">Shipping</h1>
                            <h1 className="checkout-box__price">${shipping} <p className="checkout-box__price--unit">USD</p></h1>
                        </div>
                        <div className="checkout-box__detail-box">
                            <h1 className="checkout-box__detail-title">Bag Total</h1>
                            <h1 className="checkout-box__price"><p className="checkout-box__price--quantily">({itemNumber} items)</p> ${total} <p className="checkout-box__price--unit">USD</p></h1>
                        </div>
                    </div>
                    <button onClick={handleCheckout} className="checkout-box__btn">Proceed To Checkout</button>
                </div>
            </div>
        </>

    )

}


export default CartCheckout;

