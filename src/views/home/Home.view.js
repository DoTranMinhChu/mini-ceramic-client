
import CartProduct from '../../components/card/CartProduct.component'
import background from '../../assets/images/background.jpg'
function Home() {
    return (
        <>
            <div>
                <img src={background} alt='background' />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', padding: '24px', margin: '24px' }}>
               
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>

            </div>
        </>
    )
}

export default Home