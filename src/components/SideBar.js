import React from 'react';
import SideBarMenu from './SideBarMenu';
import sideBarStyle from '../styles/sideBarStyle.module.scss'

const CAR_SCAN_PIC_URL = "https://worldwide.kia.com/int/image/kia.jpg"

// Side bar containing profile and menus
const SideBar = ({stage, setStage}) => {
    return (
        <div className={sideBarStyle.SideBar_container}>

            <div className={sideBarStyle.SideBar_container_topInfo}>
                <img
                    className={sideBarStyle.SideBar_container_profile}
                    src={CAR_SCAN_PIC_URL}
                    alt="Profile"
                />
                <div>
                    <div className={sideBarStyle.SideBar_container_topInfo_title}>
                        <h3>Username</h3>
                        <span className="material-symbols-outlined">
                            expand_more
                        </span>
                    </div>

                    <div className={sideBarStyle.SideBar_container_topInfo_date}>
                        <p>joined 3 months ago</p>
                    </div>
                </div>
            </div>

            <SideBarMenu stage={stage} setStage={setStage}/>
        </div>

        
    );
};

export default SideBar;