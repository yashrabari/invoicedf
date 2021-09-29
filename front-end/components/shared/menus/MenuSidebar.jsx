import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuSidebar = () => {
    const router = useRouter();
    const menuItems = [
        {
            text: 'Dashboard',
            url: '/',
            icon: 'icon-home',
        },
        {
            text: 'Customers',
            url: '/customers',
            icon: 'icon-users2',
        },
        {
            text: 'Products',
            url: '/products',
            icon: 'icon-database',
        },
        {
            text: 'Sales Invoice',
            url: '/sales-invoice',
            icon: 'icon-bag2',
        },
        {
            text: 'Purchase Invoice',
            url: '/purchase-invoice',
            icon: 'icon-bag2',
        }, {
            text: 'Inward Receipts',
            url: '/inward-receipts',
            icon: 'icon-bag2',
        }, {
            text: 'Outward Receipts',
            url: '/outward-receipts',
            icon: 'icon-bag2',
        },
        {
            text: 'Transport',
            url: '/transport',
            icon: 'icon-truck',
        },

        // {
        //     text: 'Categories',
        //     url: '/categories',
        //     icon: 'icon-users2',
        // },
        {
            text: 'Settings',
            url: '/settings',
            icon: 'icon-cog',
        },
    ];

    return (
        <ul className="menu">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={router.pathname === item.url ? 'active' : ''}>
                    <Link href={item.url}>
                        <a>
                            <i className={item.icon}></i>
                            {item.text}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MenuSidebar;
