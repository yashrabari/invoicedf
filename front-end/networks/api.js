import axios from 'axios';
import qs from 'qs'
import decode from 'jwt-decode'

const instance = axios.create({
    baseURL: "http://178.18.250.242:1338",
});

instance.interceptors.request.use(async (config) => {
    const accessToken = 'Bearer ' + localStorage.getItem('accessToken');
    if (localStorage.getItem('accessToken')) {

        config.headers.Authorization = (accessToken ? accessToken : '');
    }
    return config;
});

export const login = async (email, password) => (
    await axios.post('http://178.18.250.242:1338/auth/local', { identifier: email, password })
);
export const getProducts = async () => {
    return await instance.get('products')
}
export const getCustomers = async () => {
    return await instance.get('customers?company_type=customer&company_type=customer_vendor')
}
export const getVendors = async () => {
    return await instance.get('customers?company_type=vendor&company_type=customer_vendor')
}
export const postCustomers = async (data) => {
    return await instance.post('customers', data)
}
export const postReceipts = async (data) => {
    return await instance.post('receipts', data)
}
export const getReceipts = async (query) => {
    return await instance.get('receipts?' + query)
}
