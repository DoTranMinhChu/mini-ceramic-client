

import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/common/Loader.component';
import { getOrdersSelector } from '../../redux/selectors/ordersSelector';
import { setOrders } from '../../redux/slices/orderSlice';
import { ordersApi } from '../../services/ordersApi.service';
import { NavLink } from "react-router-dom";
import '../../styles/scss/order.style.scss'

function Order({ header, footer }) {

    const dispatch = useDispatch();
    const listOrders = useSelector(getOrdersSelector).data;
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
                    {
                        !listOrders ?
                            <Loader /> :

                            <table className='order-list-table'>
                                <thead >
                                    <tr>
                                        <th>ID</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Shop</th>
                                        <th>Order Date</th>
                                        <th>Ship Date</th>
                                        <th>Status</th>
                                        <th>Paid</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        listOrders.map(
                                            (item,index) => {
                                                const orderDate = item.orderDate ? moment(item.orderDate).format('DD/MM/YYYY') : "";
                                                const shipDate = item.shipDate ? moment(item.shipDate).format('DD/MM/YYYY') : "";
                                                return (
                                                    <tr key={item.id}>
                                                        <th>{index+1}</th>
                                                        <th>12</th>
                                                        <th>{item.total}</th>
                                                        <th>{item.shop.name}</th>
                                                        <th>{orderDate}</th>
                                                        <th>{shipDate}</th>
                                                        <th>{item.status}</th>
                                                        <th>
                                                            <button className={`order-list-table__button order-list-table__button--${item.paid ? 'unclickable' : 'clickable'}`}>Pay now</button>
                                                        </th>
                                                        <th>
                                                            <NavLink to={`/order/detail/${item.id}`} className='order-list-table__detail'>
                                                                Detail
                                                            </NavLink>

                                                        </th>
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



export default Order;