import React from 'react';
import { useNavigate } from 'react-router-dom';
import sideNavStyle from './sideNavStyle.module.scss'
import a from '../assets/svgmenus/Group 1.svg'
import b from '../assets/svgmenus/Group 2.svg'
import c from '../assets/svgmenus/Group 3.svg'
import d from '../assets/svgmenus/Group 4.svg'
import e from '../assets/svgmenus/Group 6.svg'
import f from '../assets/svgmenus/Group 8.svg'


const CAR_SCAN_PIC_URL = "https://media-exp1.licdn.com/dms/image/C4D0BAQENOqqYZBdYVA/company-logo_200_200/0/1637312766372?e=2147483647&v=beta&t=bgNk402xiHuDsU7GdSr0WZVhr86zEL6B6itQ4jqiv8Q"

const SideNav = () => {

    const navigate = useNavigate();

    return (
        <div className={sideNavStyle.SideNav_container}>

            <img
                className={sideNavStyle.SideNav_container_profile}
                src={CAR_SCAN_PIC_URL}
                alt="Profile"
            />

            <div className={sideNavStyle.SideNav_container_profile_menuItems}>

                <div className={sideNavStyle.SideNav_container_profile_menuItems_item}>
                    <img src={a}/>
                </div>
                <div className={sideNavStyle.SideNav_container_profile_menuItems_item}>
                    <img src={b}/>
                </div>
                <div className={sideNavStyle.SideNav_container_profile_menuItems_item}>
                    <img src={c}/>
                </div>
                <div className={sideNavStyle.SideNav_container_profile_menuItems_item}>
                    <img src={d}/>
                </div>
                <div className={sideNavStyle.SideNav_container_profile_menuItems_item}>
                    <img src={e}/>
                </div>
                <div className={sideNavStyle.SideNav_container_profile_menuItems_item}>
                    <img src={f}/>
                </div>

                

                {/* <div className={sideNavStyle.SideNav_container_profile_menuItems_item}>
                    <span 
                    onClick={()=> {
                        navigate('/second')
                    }}
                    className="material-symbols-outlined">
                        grade
                    </span>
                </div> */}


            </div>

        </div>
    );
};

export default SideNav;