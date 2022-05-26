import React from 'react';
//import mainWrapStyle from "./mainwrap.module.scss"

const MainWrap = ({children}) => {
    return (
        <div /* className={mainWrapStyle.MainWrap} */>
            {children}
        </div>
    );
};

export default MainWrap;