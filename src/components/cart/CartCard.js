import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faRemove } from '@fortawesome/free-solid-svg-icons'
import '../../styles/scss/cart.style.scss'

function CartCard({ productInfomation }) {
    const {product,quantity} = productInfomation

    return (
        <>
            <div className="cart-card">
                <FontAwesomeIcon className="cart-card__btn-remove" icon={faRemove} />
                <div className="cart-card__image-box">
                    <img className="img-responsive" src={product.image} alt="" />
                </div>
                <div className="cart-card__infomation-box">
                    <div className="cart-card__infomation">
                        <h2 className="cart-card__product-name">{product.name}</h2>
                        <h5 className="cart-card__product-size">Category: {product.category.name}</h5>
                    </div>

                    <div className="cart-card__cart-box">
                        <h1 className="cart-card__product-price">${product.price}</h1>
                        <div className="cart-card__quantity-box">
                            <FontAwesomeIcon onClick={() => this.handleChangeQuantity(-1)} className="cart-card__quantity-box--minus" icon={faMinusCircle} />
                            <h1 className="cart-card__quantity">{quantity}</h1>
                            <FontAwesomeIcon onClick={() => this.handleChangeQuantity(+1)} className="cart-card__quantity-box--plus" icon={faPlusCircle} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default CartCard;
