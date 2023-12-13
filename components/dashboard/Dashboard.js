"use client";
import { Tab, Tabs } from 'react-bootstrap';
import Profile from '../user-dashboard/profile/Profile';
import style from "./dashboard.module.scss"
import SettingTab from '../user-dashboard/settingTab/SettingTab';
import BuyProduct from '../user-dashboard/buyProduct/BuyProduct';
import { useAuth } from '@/app/layout';
import MyStores from '../user-dashboard/myStores/MyStores';

const Dashboard = () => {
    const { userRole } = useAuth()

    return (
        <>
            <div className={style.dashboard + " container-fluid my-4 p-md-5"}>
                <Tabs defaultActiveKey="profile" id="dashboard-tabs">
                    <Tab eventKey="profile" title="Profile">
                        <Profile />
                    </Tab>
                    {userRole == "client" &&
                        <Tab eventKey="Buy Products" title="Buy Products">
                            <BuyProduct />
                        </Tab>
                    }
                    {userRole == "client" &&
                        <Tab eventKey="My Stores" title="My Stores">
                            <MyStores />
                        </Tab>
                    }

                    <Tab eventKey="settings" title="Settings">
                        <SettingTab />
                    </Tab>
                </Tabs>
            </div>

        </>
    );
};
export default Dashboard;