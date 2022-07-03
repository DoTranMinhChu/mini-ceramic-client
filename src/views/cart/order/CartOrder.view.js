
import { useParams } from 'react-router-dom';
import '../../../styles/scss/cart.style.scss'

function CartOrder({ header, footer }) {
    const { id } = useParams();

    return (
        <>
            {header}
            <div className='container margin-top'>
                {id}
            </div>
            {footer}
        </>
    )
}



export default CartOrder;