"use client";
import { Tab, Tabs } from 'react-bootstrap';
import Profile from '../user-dashboard/profile/Profile';
import style from "./dashboard.module.scss"
import SettingTab from '../user-dashboard/settingTab/SettingTab';
import BuyProduct from '../user-dashboard/buyProduct/BuyProduct';
import { useAuth } from '@/app/layout';
import MyStores from '../user-dashboard/myStores/MyStores';
import MyProducts from '../user-dashboard/myProducts/MyProducts';
import { createContext, useContext, useEffect, useState } from 'react';
import { getDataService } from '@/services/getDataService';
import { getClientDataService } from '@/services/getClientDataService';


const clientDashboardContext = createContext()
export const useClientDashboardContext = () => {
    return useContext(clientDashboardContext)
}

const Dashboard = () => {
    const { userRole } = useAuth()
    const [clientMenu, setData] = useState()
    const [myCollection, setCollection] = useState()
    const helper = async () => {
        await getDataService(setData, "client-menu")
    }
    const fetchCollection = async () => {
        await getClientDataService(setCollection, "client-menu-collection")
    }
    useEffect(() => {
        if(userRole == "client"){ 
            helper()
            fetchCollection()
        }
    }, [])

    return (
        <>
            <div className={style.dashboard + " container-fluid my-4 p-md-5"}>
                <Tabs defaultActiveKey="profile" id="dashboard-tabs">
                    <Tab eventKey="profile" title="Profile">
                        <Profile />
                    </Tab>
                    {userRole == "client" &&
                        <Tab eventKey="Buy Products" title="Buy Products">
                            <clientDashboardContext.Provider value={{ clientMenu,helper }}>
                                <BuyProduct />
                            </clientDashboardContext.Provider>
                        </Tab>
                    }
                    {userRole == "client" &&
                        <Tab eventKey="My Stores" title="My Stores">
                            <MyStores />
                        </Tab>
                    }
                    {userRole == "client" &&
                        <Tab eventKey="My Products" title="My Products">
                            <clientDashboardContext.Provider value={{ clientMenu,helper ,myCollection,fetchCollection}}>
                                <MyProducts />
                            </clientDashboardContext.Provider>
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