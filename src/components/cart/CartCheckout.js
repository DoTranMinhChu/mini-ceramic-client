import React from "react";
import { useSelector } from "react-redux";
import { getCheckOutByIdSelector } from "../../redux/selectors/cartSelector";

function CartCheckout({ cartId }) {

    const auth = {}
    const { total, subTotal, itemNumber, shipping } = useSelector(getCheckOutByIdSelector(cartId, 4.99))
    const handleCheckout = () => {
        if (Object.keys(auth.user).length === 0) {
            const btnLogin = document.getElementById("btn-login");
            btnLogin.click();

            // toast.warn("Need to login to checkout")
        } else if (!(auth.infomation.address || auth.infomation.phoneNumber)) {

            // toast.warn("Need to enter phone number and address to checkout")
        } else {
            // props.handleCheckout();
        }


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

