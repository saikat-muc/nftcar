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

const Container = () => {

    const [stage, setStage] = useState(0)
    const [pre, setPre] = useState("")
    const [post, setPost] = useState("")
    const [csv, setCsv] = useState(null)

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
                    <Route path="/primary" element={<PrimaryActivity stage={stage} setStage={setStage} pre={pre} post={post} setPre={setPre} setPost={setPost} setCsv={setCsv}/>} />
                    <Route path="/second" element={<SecondaryActivity stage={stage} setStage={setStage} pre={pre} post={post} csv={csv}/>} />
                    <Route path="/finish" element={<FinishedActivity setStage={setStage} />} />
                </Routes>
            </div>
        </div>


    );
};

export default Container; <MainActivity />