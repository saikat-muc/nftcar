import React, { useState } from 'react';
import MainActivity from '../components/MainActivity';
import SideBar from '../components/SideBar';
import SideNav from '../components/SideNav';
import TopBar from '../components/TopBar';
import './containerStyle.scss'
import {
    Routes,
    Route,
} from "react-router-dom";
import SecondaryActivity from '../components/SecondaryActivity';
import FinishedActivity from '../components/FinishedActivity';
import PrimaryActivity from '../components/PrimaryActivity';

/* Main landing page, defining entire layout and mechanism of the App */
const Container = () => {

    // primary states of the entire application
    const [stage, setStage] = useState(0) // stage of transaction
    const [pre, setPre] = useState("") // vin number store
    const [csv, setCsv] = useState(null) // csv data store

    return (

        <div className='ContainerWrap'>
            <div className='ContainerWrapSideWrap'>
                <div className='ContainerWrapSideWrapNested1'>
                    <div className='ContainerWrapSideWrapNested1_1'>
                        <SideNav />
                    </div>
                    <div className='ContainerWrapSideWrapNested1_2'>
                        <SideBar stage={stage} setStage={setStage} />
                    </div>
                </div>
            </div>

            <div className='ContainerWrapMainWrap'>
                <TopBar />
                <Routes>
                    <Route path="/" element={<MainActivity stage={stage} setStage={setStage} />} />
                    <Route path="/primary" element={<PrimaryActivity stage={stage} setStage={setStage} pre={pre} setPre={setPre} setCsv={setCsv}/>} />
                    <Route path="/second" element={<SecondaryActivity stage={stage} setStage={setStage} pre={pre} csv={csv}/>} />
                    <Route path="/finish" element={<FinishedActivity setStage={setStage} />} />
                </Routes>
            </div>
        </div>
    );
};

export default Container; <MainActivity />