import { useSelector } from 'react-redux'
import { productsSelector } from '../../redux/selectors/productsSelector'

import CartProduct from '../../components/card/CartProduct.component'
import background from '../../assets/images/background.jpg'
function Home() {

    const list = useSelector(productsSelector)
    console.log("Check : ", list)
    return (
        <>
            <div>
                <img src={background} alt='background' />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', padding: '24px', margin: '24px' }}>

                {
                    (list.map((item) => <CartProduct key={item._id} product={item} />))
                }
                
            </div>
        </>
    )
}

export default Home