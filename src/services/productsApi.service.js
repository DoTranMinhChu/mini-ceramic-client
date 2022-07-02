import axios from './axiosConfig.service'
export const productsApi = {
    getProduct: (params) => {
        const url = 'api/products';
        return axios.get(url, { params });
    }
}