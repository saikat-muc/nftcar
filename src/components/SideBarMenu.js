import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sideBarMenuStyle from '../styles/sideBarMenuStyle.module.scss'
import VerticalLinearStepper from './Stepper';
import battery from '../assets/svgnavmenus/battery.svg'
import setting from '../assets/svgnavmenus/settings.svg'

const IMG_URL = "https://media-exp1.licdn.com/dms/image/C4D0BAQENOqqYZBdYVA/company-logo_200_200/0/1637312766372?e=2147483647&v=beta&t=bgNk402xiHuDsU7GdSr0WZVhr86zEL6B6itQ4jqiv8Q"

// side bar menu with stepper
const SideBarMenu = ({stage, setStage}) => {

    const [isOpen, setIsOpen] = useState(false) // state to open close stepper menu
    
    const nav = useNavigate()
    //const changeStage = () => setStage(()=>stage+1)

   const openMenu = () => setIsOpen(() => !isOpen)

   // set primary stage of mint process on mount
    useEffect(()=> setStage(0), [])

    useEffect(()=> {
        if(isOpen) {
            nav("/primary")
            setStage(0)
        }
        else {
            nav("/")
            setStage(0)
        }
    }, [isOpen])

    return (
        <div>
            <div onClick={openMenu} className={sideBarMenuStyle.SideBarMenu_container}>
                <img style={{backgroundColor: "#ECEAFE"}} className={sideBarMenuStyle.SideBarMenu_container_icon} src={battery} alt="icon" />
                <p>Vehicle Health Certificate</p>
                <div className={sideBarMenuStyle.SideBarMenu_container_dropdown}>
                    {isOpen
                        ? <span className="material-symbols-outlined">
                            expand_more
                        </span>
                        : <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    }
                </div>
            </div>

            {isOpen && <VerticalLinearStepper stage={stage} />}

            <div /* onClick={changeStage} */ className={sideBarMenuStyle.SideBarMenu_container}>
                <img  style={{backgroundColor: "#E5F7FF"}} c className={sideBarMenuStyle.SideBarMenu_container_icon} src={setting} alt="icon" />
                <p>Settings</p>
                <div className={sideBarMenuStyle.SideBarMenu_container_dropdown}>
                    <span className="material-symbols-outlined">
                        chevron_right </span>
                </div>
            </div>
        </div>
    );
};

export default SideBarMenu;