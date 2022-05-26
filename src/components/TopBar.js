import React from 'react';
import MainPageMenuRow from './MainPageMenuRow';
import topBarStyle from './topBarStyle.module.scss'

import personIcon from "../assets/icons/person.svg"
import bellIcon from "../assets/icons/Union.svg"
import a from "../assets/svgtopmenus/Vector.svg"
import b from "../assets/svgtopmenus/Group 610.svg"
import c from "../assets/svgtopmenus/Group.svg"
import d from "../assets/svgtopmenus/Vector (1).svg"
import e from "../assets/svgtopmenus/Group (2).svg"
import f from "../assets/svgtopmenus/Group (1).svg"
import g from "../assets/svgtopmenus/Group (3).svg"

const dummyMenuData = [
    {
        name: "Flood or water damage check",
        url: a
    },
    {
        name: "ODO meter check",
        url: b
    },
    {
        name: "Safety & emission rating",
        url: c
    },
    {
        name: "Written off / Stolen check",
        url: d
    },
    {
        name: "PPSR certificate",
        url: f
    },
    {
        name: "Price comparison",
        url: e
    },
    {
        name: "Money owning",
        url: g
    },
]

const TopBar = () => {
    return (
        <div>
            <div className={topBarStyle.TopBar_container}>

                <div className={topBarStyle.TopBar_container_heading}>
                    <p>
                        Vehicle health certificate
                    </p>
                </div>
                <div className={topBarStyle.TopBar_container_icons}>

                    <img src={bellIcon} alt="bell" />

                    <button className={topBarStyle.TopBar_container_icons_button}>
                        <span className="material-symbols-outlined">
                            redeem
                        </span><p>2 new updates</p></button>

                    <img src={personIcon} alt="person" />

                    {/* <span className="material-symbols-outlined">
                        person
                    </span> */}

                </div>
            </div>

            <MainPageMenuRow data={dummyMenuData} />

        </div>
    );
};

export default TopBar;