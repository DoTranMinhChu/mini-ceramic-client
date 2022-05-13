import { useSelector } from 'react-redux'
import { productsSelector,cartsSelector } from '../../redux/selectors/productsSelector'

import CardProduct from '../../components/card/CardProduct.component'
import background from '../../assets/images/background.jpg'
function Home() {

    const list = useSelector(productsSelector)
    const carts = useSelector(cartsSelector)
    console.log('cart : ',carts)

    return (
        <>
            <div>
                <img src={background} alt='background' />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', padding: '24px', margin: '24px' }}>

                {
                    (list.map((item) => <CardProduct key={item._id} product={item} />))
                }
                
            </div>
        </>
    )
}

export default Home