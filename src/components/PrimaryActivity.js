import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse'
import useWindowSize from '../hooks/screenSize';
import PaStyle from "../styles/primaryActivity.module.scss"


/* Primary page VIN input button  */
function InputWithIcon({ setPre, pre }) {

    const handlePre = (e) => {
        setPre(e.target.value.toString().toUpperCase())
    }

    return (
        <button
            className={PaStyle.pa_btn1}>
            <div className={PaStyle.pa_btn1_container}>
                <div style={{ 
                    margin: "0",
                     flex: "10%" 
                     }}>
                    <p  className={PaStyle.pa_btn1_container_heading}>Enter VIN number</p>
                </div>
                <div className={PaStyle.pa_btn1_container_input_container}>
                    <p  className={PaStyle.pa_btn1_container_input_container_input_head }>#</p>
                    <input
                        className={PaStyle.pa_input1}
                        value={pre}
                        onChange={handlePre}
                        maxLength={10}
                        type="text" ></input>
                </div>
            </div>
        </button>

    );
}

/* Upload Button with sub components to download sample csv */
function UploadWithIcon({ onClick, el, upLbl }) {

    // Method downloads sample csv
    const handleDownload = async () => {
        let myData = `vin,type,make,model,year,currentCert,currentCertIPF,currentCertNFT,prevCert,prevCertIPF,prevCertNFT,history\r#MUC-210452,SUV,First Class,Toyota Corolla,2022,12 may 2022,link,link,11 may 2022,link,link,link`

        for (let i = 0; i < 9; i++) {
            myData += "\r#MUC-210452,SUV,First Class,Toyota Corolla,2022,12 may 2022,link,link,11 may 2022,link,link,link"
        }

        const fileName = "file";
        const json = myData
        const blob = new Blob([json], { type: 'text/csv;charset=utf-8;' });
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div>
            <input className='BtnUploadCsvData' type="file" ref={el} onChange={onClick} hidden ></input>
            <button type="file" className={PaStyle.pa_input2}>

                <div className={PaStyle.pa_btn2_container}>
                    <div style={{ 
                        margin: "10px", 
                        marginRight: "auto" 
                        }}>
                        <p className={PaStyle.pa_btn2_container_heading}>{upLbl}</p>
                        <p onClick={handleDownload} className={PaStyle.pa_btn2_container_heading_sub}>Download csv file format</p>
                    </div>
                    <div>
                        <span onClick={() => {
                            el.current.click()
                        }} style={{
                            cursor: "pointer",
                            backgroundColor: "#623CE7",
                            padding: "10px",
                            color: "white",
                            borderRadius: "7.63879px",
                            marginRight: "20px",
                            boxShadow: "0px 100px 80px rgba(96, 60, 231, 0.07), 0px 64.8148px 46.8519px rgba(96, 60, 231, 0.0531481), 0px 38.5185px 25.4815px rgba(96, 60, 231, 0.0425185), 0px 20px 13px rgba(96, 60, 231, 0.035), 0px 8.14815px 6.51852px rgba(96, 60, 231, 0.0274815), 0px 1.85185px 3.14815px rgba(96, 60, 231, 0.0168519)"
                        }} class="material-symbols-outlined">
                            add
                        </span>
                    </div>
                </div>
            </button>
        </div>
    );
}

/* Primary Activity with vin input, upload csv and submit btn */
const PrimaryActivity = ({ setStage, setPre, pre, setCsv }) => {

    const [upLbl, setUpLbl] = useState("Upload file")
    const [file, setFile] = useState('');
    const el = useRef(); 
    const domRef = useRef()
    const size = useWindowSize();

    // set stage on comp mount
    useEffect(() => {
        setStage(0);
        setCsv(null)
    }, [])

    // handle width change manually
    useEffect(() => {
        if (size.width < 1200) {
            domRef.current.style.flexDirection = "column"
        } else {
            domRef.current.style.flexDirection = "row"
        }
    }, [size])

    // Set csv state after convreting to json
    const handleChange = (e) => {
        const file = e.target.files[0]; // accesing file
        setFile(file);
        if (file.type !== "text/csv") return
        if (file) {
            setUpLbl(file.name)
            Papa.parse(file, {
                header: true,
                complete: function (results) {
                    setCsv(results.data)
                }
            })
        }
    }

    const nav = useNavigate()

    return (
        <div ref={domRef}
            className={PaStyle.pa_container}>
            <div style={{
                margin: "10px",
            }}>
                <InputWithIcon setPre={setPre} pre={pre} />
            </div>
            <div><b style={{ fontSize: "20px", fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bolder" }}>OR</b></div>

            <div style={{
                margin: "10px",

            }}>
                <UploadWithIcon upLbl={upLbl} onClick={handleChange} el={el} />
            </div>

            <button
                className={PaStyle.pa_submitBtn}
                onClick={() => {
                    if (file || pre.length) return nav('/second')
                    alert("Please upload a csv or enter VIN number")
                }}>Submit</button>
        </div>
    );
};

export default PrimaryActivity;