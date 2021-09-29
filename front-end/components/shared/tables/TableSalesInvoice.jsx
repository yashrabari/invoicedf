import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import DropdownAction from '~/components/elements/basic/DropdownAction';

const TableOrdersItems = () => {
    const orderItems = [
        {
            invoice_no: '#A580',
            id: 1,
            date: 'Aug 15, 2020',
            company: 'Unero Black Military',
            payment: true,
            fullfillment: 'delivered',
            total: '₹56.00',
        },
        {
            invoice_no: '#B260',
            id: 2,
            date: 'Aug 16, 2020',
            company: 'Marsh Speaker',
            payment: false,
            fullfillment: 'delivered',
            total: '₹56.00',
        },
        {
            invoice_no: '#A583',
            id: 3,
            date: 'Aug 17, 2020',
            company: 'Lined Blend T-Shirt',
            payment: true,
            fullfillment: 'In Progress',
            total: '₹516.00',
        },
        {
            invoice_no: '#A523',
            id: 4,
            date: 'Aug 18, 2020',
            company: 'DJI MAcvic Quadcopter',
            payment: false,
            fullfillment: 'delivered',
            total: '₹112.00',
        },
        {
            invoice_no: '#A112',
            id: 5,
            date: 'Aug 19, 2020',
            company: 'Black T-Shirt',
            payment: true,
            fullfillment: 'Cancel',
            total: '₹30.00',
        },
    ];

    const tableItemsView = orderItems.map((item) => {
        let badgeView, fullfillmentView;

        if (item.payment) {
            badgeView = <span className="ps-badge success">Paid</span>;
        } else {
            badgeView = <span className="ps-badge gray">Unpaid</span>;
        }
        switch (item.fullfillment) {
            case 'In Progress':
                fullfillmentView = (
                    <span className="ps-fullfillment warning">In Progress</span>
                );
                break;
            case 'Cancel':
                fullfillmentView = (
                    <span className="ps-fullfillment danger">Cancel</span>
                );
                break;
            default:
                fullfillmentView = (
                    <span className="ps-fullfillment success">delivered</span>
                );
                break;
        }
        return (
            <tr key={item.id}>
                <td>{item.invoice_no}</td>
                <td>
                    <Link href="/orders/order-detail">
                        <a>
                            <strong>{item.company}</strong>
                        </a>
                    </Link>
                </td>
                <td>
                    <strong> Aug 15, 2020</strong>
                </td>
                <td>{badgeView}</td>
                <td>{fullfillmentView}</td>
                <td>
                    <strong>{item.total}</strong>
                </td>
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
                        <th>Invoice No.</th>
                        <th>Company Name</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Payment Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{tableItemsView}</tbody>
            </table>
        </div>
    );
};

export default TableOrdersItems;
