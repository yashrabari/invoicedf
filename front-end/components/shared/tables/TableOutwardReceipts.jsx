import React, { useState, useEffect } from 'react';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { getReceipts } from "~/networks/api";

const TableOutWardReceipts = () => {

    const [receipts, setReceipts] = useState([])

    const getReceiptsData = async () => {
        const response = await getReceipts('type=outward_receipts')
        if (response.data.error) {
            alert(response.data.message);
        }
        console.log(response.data);
        await setReceipts(response.data)
    }
    useEffect(() => {

        getReceiptsData()
    }, [])

    const formatToCurrency = amount => {
        var x = "₹" + parseFloat(amount).toFixed(2)
        var lastThree = x.substring(x.length - 6);
        var otherNumbers = x.substring(0, x.length - 6);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res
    };

    const tableItems = receipts?.map((item, index) => {



        return (
            <tr style={{ textAlign: 'center' }} key={index}>
                <td>{' ' + item.id}</td>
                <td>
                    <a href="#">
                        <strong>{item.customer.customer_name}</strong>
                    </a>
                </td>
                <td>{item.payment_date}</td>
                <td>{item.product_type}</td>

                <td >
                    <strong>{item.payment_notes}</strong>
                </td>
                <td style={{
                    textAlign: 'right'
                }} >

                    <strong > {formatToCurrency(item.amount)}</strong>

                </td>
                <td>{item.updated_at.split('T')[0]}</td>
                <td>
                    <DropdownAction onPrint={() => {
                        console.log(item)
                    }} />
                </td>
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Payment Date</th>
                        <th>Payment Type</th>
                        <th>Payment Note</th>
                        <th >Amount</th>
                        <th>Edit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </table>
        </div>
    );
};

export default TableOutWardReceipts;
