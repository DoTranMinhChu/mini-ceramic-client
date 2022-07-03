import React from "react";
import { useSelector } from "react-redux";

function CartCheckout(props) {

    const auth = useSelector(state => state.auth)

    const handleCheckout = () => {
        if (Object.keys(auth.user).length === 0) {
            const btnLogin = document.getElementById("btn-login");
            btnLogin.click();

            // toast.warn("Need to login to checkout")
        } else if (!(auth.infomation.address || auth.infomation.phoneNumber)) {

            // toast.warn("Need to enter phone number and address to checkout")
        } else {
            props.handleCheckout();
        }


    }


    let { subTotal, itemNumber, shipping } = props;
    let total = subTotal + shipping;
    subTotal = subTotal.toFixed(2);
    shipping = shipping.toFixed(2);
    total = total.toFixed(2);
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

