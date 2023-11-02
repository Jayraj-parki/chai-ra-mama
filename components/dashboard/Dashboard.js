"use client";
import { Tab, Tabs } from 'react-bootstrap';
import Profile from '../user-dashboard/profile/Profile';
import Cart from '../user-dashboard/cart/Cart';
import style from "./dashboard.module.scss"
import PurchaseHistory from '../user-dashboard/purchaseHistory/PurchaseHistory';
import MyOrders from '../user-dashboard/myOrders/MyOrders';
const Dashboard = () => {
    return (
        <>
            <div className={style.dashboard+" container-fluid my-4 p-md-5"}>
                <Tabs  defaultActiveKey="profile" id="dashboard-tabs">
                    <Tab eventKey="profile" title="Profile">
                       <Profile/>
                    </Tab>
                    <Tab eventKey="cart" title="My Cart">
                        <Cart/>    
                    </Tab>
                    <Tab eventKey="purchaseHistory" title="Purchase History">
                       <PurchaseHistory/>
                        </Tab>
                    <Tab eventKey="myOrders" title="My Orders">
                        <MyOrders/>    
                    </Tab>
                    <Tab eventKey="settings" title="Settings">
                        {/* Settings component */}
                        {/* Include form fields to change personal details or password */}
                    </Tab>
                </Tabs>
            </div>

        </>
    );
};
export default Dashboard;