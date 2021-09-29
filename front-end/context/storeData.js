import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getProducts } from "~/networks/api";

export const StoreDataContext = React.createContext();

export const StoreDataProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [products, setProducts] = useState([]);
    const [sellsInvoice, setSellsInvoice] = useState([]);

    const router = useRouter()

    const getProductData = async () => {
        const response = await getProducts()
        if (response.data.error) {
            alert(response.data.message);
        }
        console.log(response.data);
        await setProducts(response.data)
    }




    const logOut = async () => {
        console.log('pressed');
        await localStorage.removeItem('accessToken')
        router.reload("/");
    }

    const BASE_URL = "http://178.18.250.242:1337"

    useEffect(() => {
        console.log('got response');
        getProductData()
    }, []);

    return (
        <StoreDataContext.Provider value={{ products, userData, logOut, BASE_URL }}>{children}</StoreDataContext.Provider>
    );
};