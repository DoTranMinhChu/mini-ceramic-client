
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CartCard from '../../../components/cart/CartCard';
import CartCheckout from '../../../components/cart/CartCheckout';
import { getCartByIdSelector } from '../../../redux/selectors/cartSelector';
import '../../../styles/scss/cart.style.scss'

function CartOrder({ header, footer }) {

    const { id } = useParams();
    const cartsList = useSelector(getCartByIdSelector(id)).products
    console.log(cartsList)


    return (
        <>
            {header}
            {
                !cartsList?.length ?
                    <>
                        <div className="notification">Cart is empty</div>
                    </>
                    :
                    <>

                        <div className="cart-order container margin-top" >
                            <div className="cart-order__cart-list ">
                                {cartsList.map((product) => {

                                    return (
                                        <CartCard
                                            key={product.id}
                                            productInfomation={product}
                                        // handleRemoveProductToCart={handleRemoveProductToCart}
                                        // handleChangeQuantity={handleChangeQuantity} 
                                        />
                                    )
                                })}


                            </div>
                            <div className="cart-order__checkout">
                                <CartCheckout
                                    cartId={id}
                                // handleCheckout={handleOpenCheckout}

                                />
                            </div>
                        </div >

                        {/* {
                    isPayment &&
                    <Payment
                        // onCheckout={handleCheckout}
                        // onBackPayment={handleBackPayment}
                        // timeCountdown={600000}
                        // total={total}
                        // infomation={`Order value: ${total} $
                        // | Address: ${info.address}
                        // | Phone Number: ${info.phoneNumber}
                        // | Consignee: ${info.fullName}`}
                        // orderID={Math.floor(Math.random() * 1000000)}
                    />
                } */}
                    </>
            }
            {footer}
        </>
    )
}



export default CartOrder;