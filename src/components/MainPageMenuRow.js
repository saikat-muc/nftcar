import React from 'react';
import mainPageMenuRow from './mainPageMenuRow.module.scss'


const MainPageMenuRow = ({ data }) => {
    return (

        <div className={mainPageMenuRow.MainPageMenuRow_container}>
            {data.map((e, i) => {
                return <div key={`${i}`} className={mainPageMenuRow.MainPageMenuRow_container_item}>
                    <img src={e.url} alt="icon" />
                    <p>{e.name}</p>
                </div>
            })}
        </div>



    );
};

export default MainPageMenuRow;