import React from 'react';
//import sideBarWrap from "./sidewrap.module.scss"
const SideWrap = ({children}) => {
    return (
        <div /* className={sideBarWrap.SideWrap} */>
            {children}
        </div>
    );
};

export default SideWrap;