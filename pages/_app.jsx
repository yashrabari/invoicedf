import React, { useEffect } from 'react';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import { wrapper } from '~/store/store';
import '~/styles/style.scss';
import 'antd/dist/antd.min.css';
import { StoreDataProvider } from '~/context/storeData';

function App({ Component, pageProps }) {
    const getLayout =
        Component.getLayout || ((page) => <DefaultLayout children={page} />);
    useEffect(() => {
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);
    }, []);
    return getLayout(<StoreDataProvider><Component {...pageProps} /></StoreDataProvider>);
}

export default wrapper.withRedux(App);
