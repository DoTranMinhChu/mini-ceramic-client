
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/common/Loader.component';
import '../../styles/scss/order.style.scss'
import { getOrderByIDSelector, getOrdersSelector } from '../../redux/selectors/ordersSelector';
import { setOrders } from '../../redux/slices/orderSlice';
import { ordersApi } from '../../services/ordersApi.service';
import { useEffect } from 'react';


function OrderDetail({ header, footer }) {

    const { id } = useParams();

    const listOrders = useSelector(getOrdersSelector).data;
    const OrderDetailList = useSelector(getOrderByIDSelector(id))?.details;
    const dispatch = useDispatch();
    useEffect(() => {
        if (!listOrders) {
            ordersApi.getOrders()
                .then(
                    res => {
                        dispatch(setOrders(res.data))
                    }
                )
                .catch(
                    err => {
                        console.log(err)
                    }
                )
        }
    })


    return (
        <>
            {header}

            <div className='container margin-top'>
                <div className='order-list'>
                    {!OrderDetailList ?
                        <Loader /> :
                        <table className='order-list-table'>
                            <thead >
                                <tr>
                                    <th>ID</th>
                                    <th>Product name</th>
                                    <th>Product price</th>
                                    <th>quantity</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    OrderDetailList.map(
                                        (item,index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <th>{index+1}</th>
                                                    <th>{item.product.name}</th>
                                                    <th>{item.product.price}</th>
                                                    <th>{item.quantity}</th>
                                                </tr>
                                            )
                                        }
                                    )
                                }

                            </tbody>

                        </table>
                    }
                </div>
            </div>
            {footer}
        </>
    )
}



export default OrderDetail;