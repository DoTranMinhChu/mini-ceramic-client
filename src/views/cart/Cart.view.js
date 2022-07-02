
import CartShop from '../../components/cart/CartShop'
import '../../styles/scss/cart.style.scss'

function Cart({ cartsList, header, footer }) {

    console.log(cartsList)
    return (
        <>
            {header}

            <div className='cart-list container margin-top'>
                <div className="cart" >
                    {cartsList.map(cart => <CartShop key={cart.shop.id} cart={cart} />)}
                </div >
            </div>
            {footer}
        </>
    )
}



export default Cart;