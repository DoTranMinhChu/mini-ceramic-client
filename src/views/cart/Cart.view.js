
import CartCard from '../../components/cart/CartCard'
import CartCheckout from '../../components/cart/CartCheckout'
import '../../styles/scss/cart.style.scss'

function Cart({ cartsList, header, footer }) {

    let total = 0
    let subTotal = 0
    let shipping = 4.99
    let itemNumber = 0

    return (
        <>
            {header}


            <div className='cart-list container margin-top'>
                <div className="cart" >
                    <div className="cart__cart-list">
                        {cartsList.map((product) => {
                            subTotal += product.price * product.quantity;
                            itemNumber += product.quantity;
                            total = subTotal + shipping;
                            return (
                                <CartCard key={product.id} productInfomation={product} />
                            )
                        })}


                    </div>
                    <div className="cart__checkout">
                        <CartCheckout
                            total={total}
                            subTotal={subTotal}
                            shipping={shipping}
                            itemNumber={itemNumber} />
                    </div>
                </div >




            </div>
            {footer}
        </>
    )
}



export default Cart;