import React, { useState, useEffect } from 'react';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { getProducts } from "~/networks/api";

const TableTransport = () => {

    const [products, setProducts] = useState([])

    const getProductData = async () => {
        const response = await getProducts()
        if (response.data.error) {
            alert(response.data.message);
        }
        console.log(response.data);
        // await setProducts(response.data)
    }
    useEffect(() => {

        getProductData()
    }, [])



    const tableItems = products?.map((item, index) => {

        return (
            <tr key={item.id}>
                <td>{' ' + item.id}</td>
                <td>
                    <a href="#">
                        <strong>{item.name}</strong>
                    </a>
                </td>
                <td>{item.hsn}</td>
                <td><span className={item.stock > 0 ? "ps-badge success" : "ps-badge gray"}>{item.stock}</span></td>

                <td>
                    <strong>{item.unit_measurement}</strong>
                </td>
                <td>
                    <strong>{item.sell_price}</strong>
                </td>
                <td>{item.updated_at.split('T')[0]}</td>
                <td>
                    <DropdownAction />
                </td>
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>HSN/SAC COde</th>
                        <th>Current Stock</th>
                        <th>UNO</th>
                        <th>Price</th>
                        <th>Last Updated Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </table>
        </div>
    );
};

export default TableTransport;
