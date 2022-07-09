import { useDispatch, useSelector } from 'react-redux'
import { getProductsSelector } from '../../redux/selectors/productsSelector'

import CardProduct from '../../components/card/CardProduct.component'
import background from '../../assets/images/background.jpg'
import { productsApi } from '../../services/productsApi.service'
import { useEffect } from 'react';
import { setProducts } from '../../redux/slices/productsSlice'
import Loader from '../../components/common/Loader.component'
function Home({ header, footer }) {

    const listProduct = useSelector(getProductsSelector).data;
    const dispatch = useDispatch();
    useEffect(() => {
        if (!listProduct) {
            productsApi.getProduct()
                .then(res => {
                    dispatch(setProducts(res.data))
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    );

    return (
        <>
            {header}
            <div>
                <img src={background} alt='background' />
            </div>

            <div className='cart-list container'>

                {
                    listProduct ? (listProduct.map((item) => <CardProduct key={item.id} product={item} />)) : <Loader />
                }

            </div>
            {footer}
        </>
    )
}

export default Home