import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faRemove } from '@fortawesome/free-solid-svg-icons'
import '../../styles/scss/cart.style.scss'
import { changeQuantityProductInCart, removeToCart } from "../../redux/slices/cartsSlice";
import { useDispatch } from "react-redux";

function CartCard({ productInfomation }) {
    const { product, quantity } = productInfomation;
    const dispatch = useDispatch();
    const handleRemoveProductToCart = () => {
        dispatch(removeToCart(product));
    }
    const handleChangeQuantity = (change) => {

        dispatch(changeQuantityProductInCart({ product, change }));
    }
    return (
        <>
            <div className="cart-card">
                <FontAwesomeIcon className="cart-card__btn-remove" icon={faRemove} onClick={() => handleRemoveProductToCart()} />
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
                            <FontAwesomeIcon onClick={() => handleChangeQuantity(-1)} className="cart-card__quantity-box--minus" icon={faMinusCircle} />
                            <h1 className="cart-card__quantity">{quantity}</h1>
                            <FontAwesomeIcon onClick={() => handleChangeQuantity(+1)} className="cart-card__quantity-box--plus" icon={faPlusCircle} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default CartCard;
