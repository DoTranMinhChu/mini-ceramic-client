import { getCookie } from '../utils/cookies.util';
import axios from './axiosConfig.service'
export const ordersApi = {
    newOrders: (orders) => {
        const token = getCookie('accessToken');
        const url = 'api/orders';
        return axios.post(url, orders, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },
    getOrders: () => {
        const token = getCookie('accessToken');
        const url = 'api/orders';
        return axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }
}