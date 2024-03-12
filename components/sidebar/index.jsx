
'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

export default function SidebarComponent() {
    return (
        <Sidebar>
            <Sidebar.Logo href="/" img="./icon.png" imgAlt="AJSDO logo">
                AJSDO
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                        <Sidebar.Item href="#">Products</Sidebar.Item>
                        <Sidebar.Item href="#">Sales</Sidebar.Item>
                        <Sidebar.Item href="#">Refunds</Sidebar.Item>
                        <Sidebar.Item href="#">Shipping</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item href="#" icon={HiInbox}>
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiTable}>
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
