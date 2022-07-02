import axios from './axiosConfig.service'
export const usersApi = {
    login: (body) => {
        const url = 'api/login';
        return axios.post(url, {
            "username": body.username,
            "password": body.password,
        });
    },

    information: (token) => {
        const url = 'api/users/info';
        return axios.get(url,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }
}