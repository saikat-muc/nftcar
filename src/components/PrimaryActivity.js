import { Button, FilledInput, Icon, SvgIcon } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Papa from 'papaparse'
import useWindowSize from '../hooks/screenSize';

function InputWithIcon({ setPre, setPost, pre, post }) {

    const handlePre = (e) => {
        setPre(e.target.value.toString().toUpperCase())
    }

    /* const handlePro = (e) => {
        setPost(e.target.value.toString().toUpperCase())
    } */

    return (
        <button
            style={{
                backgroundColor: "white",
                height: "100px",
                border: "solid",
                padding: "10px",
                borderColor: "#F3F2F2",
                paddingLeft: "30px",
                paddingRight: "30px",
                borderWidth: "1px",
                borderStyle: "1px dashed #B0B0B0",
                boxShadow: "0px 100px 80px rgba(0, 0, 0, 0.03), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0227778), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0182222), 0px 20px 13px rgba(0, 0, 0, 0.015), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0117778), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00722222)",
                borderRadius: "10px"
            }}
        >

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                <div style={{ margin: "0", flex: "10%" }}>
                    <p style={{ margin: "0", float: "left", color: "#A9B8CD", fontWeight: "bold", fontFamily: "Poppins", fontStyle: "normal", fontSize: "14px" }}>Enter VIN number</p>
                </div>
                <div style={{ marginRight: "auto", height: "50px", display: "flex", flexDirection: "coloumn", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                    <p style={{ fontFamily: "Tomorrow", fontStyle: "normal", fontSize: "26px", fontWeight: "500", color: "#A9B8CD" }}>#</p>
                    <input value={pre} onChange={handlePre} maxLength={10} type="text" style={{
                        height: "40px",
                        fontSize: "20px",
                        border: "solid",
                        borderColor: "#A9B8CD",
                        borderWidth: "1px",
                        borderTopWidth: "0px",
                        borderLeftWidth: "0px",
                        borderRightWidth: "0px",
                        width: "140px",
                        padding: 0,
                        textTransform: "uppercase",
                        fontFamily: "Tomorrow", fontStyle: "normal"
                    }}></input>
                    {/* <p style={{ color: "#A9B8CD", fontFamily: "Tomorrow", fontStyle: "normal", fontSize: "26px", fontWeight: "500" }}>-</p>
                    <input value={post} onChange={handlePro} maxLength={5} style={{
                        height: "40px",
                        fontSize: "20px",
                        border: "solid",
                        borderColor: "#A9B8CD",
                        borderWidth: "1px",
                        borderTopWidth: "0px",
                        borderLeftWidth: "0px",
                        borderRightWidth: "0px",
                        "&:focus": {
                            outline: "none",
                        },
                        padding: 0,
                        width: "70px",
                        fontFamily: "Tomorrow", fontStyle: "normal"
                    }}></input> */}
                </div>

            </div>

        </button>

    );
}

function UploadWithIcon({ onClick, el, upLbl }) {

    const handleDownload = async () => {
        const myData = `vin,type,make,model,year,currentCert,currentCertIPF,currentCertNFT,prevCert,prevCertIPF,prevCertNFT,history\r#MUC-210452,SUV,First Class,Toyota Corolla,2022,12 may 2022,link,link,11 may 2022,link,link,link`
        
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
            <button /* onClick={() => {
                el.current.click()
            }}  */type="file" style={{
                    height: "100px",
                    backgroundColor: "white",
                    border: "dashed",
                    borderColor: "#F3F2F2",
                    borderWidth: "2px",
                    borderStyle: "1px dashed #B0B0B0",
                    boxShadow: "0px 100px 80px rgba(0, 0, 0, 0.03), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0227778), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0182222), 0px 20px 13px rgba(0, 0, 0, 0.015), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0117778), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00722222)",
                    borderRadius: "10px"
                }} >

                <div style={{ display: "flex", flexDirection: "row", gap: "40px", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ margin: "10px", marginRight: "auto" }}>
                        <p /* onClick={() => {
                            el.current.click()
                        }} */ style={{ margin: "0", color: "#1C1F3E", fontWeight: "700", fontFamily: "Poppins", fontStyle: "normal", fontSize: "26px", textAlign: "start", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "200px" }}>{upLbl}</p>
                        <p onClick={handleDownload} style={{ cursor: "pointer", margin: "0", color: "#A9B8CD", fontWeight: "bold", fontFamily: "Poppins", fontStyle: "normal", fontSize: "12px", textAlign: "start" }}>Download csv file format</p>
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

const PrimaryActivity = ({ setStage, setPre, setPost, pre, post, setCsv }) => {

    const [upLbl, setUpLbl] = useState("Upload file")
    const [file, setFile] = useState(''); // storing the uploaded file    
    // storing the recived file from backend
    const el = useRef(); // accesing input element
    const domRef = useRef()

    const size = useWindowSize();

    useEffect(() => {
        setStage(0);
        setCsv(null)
    }, [])

    useEffect(() => {
        if (size.width < 1200) {
            domRef.current.style.flexDirection = "column"
        } else {
            domRef.current.style.flexDirection = "row"
        }
    }, [size])

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
            style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px"
            }}>

            <div style={{
                margin: "10px",
            }}>
                <InputWithIcon setPre={setPre} setPost={setPost} pre={pre} post={post} />
            </div>
            <div><b style={{ fontSize: "20px", fontFamily: "Poppins", fontStyle: "normal", fontWeight: "bolder" }}>OR</b></div>

            <div style={{
                margin: "10px",

            }}>
                <UploadWithIcon upLbl={upLbl} onClick={handleChange} el={el} />
            </div>

            <button
                style={{
                    height: "100px",
                    padding: "20px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontSize: "30px",
                    fontWeight: "700",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#623CE7",
                    boxShadow: "0px 100px 80px rgba(98, 60, 231, 0.07), 0px 64.8148px 46.8519px rgba(98, 60, 231, 0.0531481), 0px 38.5185px 25.4815px rgba(98, 60, 231, 0.0425185), 0px 20px 13px rgba(98, 60, 231, 0.035), 0px 8.14815px 6.51852px rgba(98, 60, 231, 0.0274815), 0px 1.85185px 3.14815px rgba(98, 60, 231, 0.0168519)"
                }}
                onClick={() => {
                    //setStage(() => 1)
                    if (file || pre.length) return nav('/second')

                    alert("Please upload a csv or enter VIN number")

                }}>Submit</button>
        </div>
    );
};

export default PrimaryActivity;