"use client";
import { Tab, Tabs } from 'react-bootstrap';
import Profile from '../user-dashboard/profile/Profile';
import style from "./dashboard.module.scss"
import SettingTab from '../user-dashboard/settingTab/SettingTab';
const Dashboard = () => {
    
    return (
        <>
            <div className={style.dashboard + " container-fluid my-4 p-md-5"}>
                <Tabs defaultActiveKey="profile" id="dashboard-tabs">
                    <Tab eventKey="profile" title="Profile">
                        <Profile />
                     </Tab>
                    <Tab eventKey="settings" title="Settings">
                        <SettingTab />
                    </Tab>
                </Tabs>
            </div>

        </>
    );
};
export default Dashboard;