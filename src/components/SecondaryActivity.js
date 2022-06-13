import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import makeData from '../utili/makeData';
import { useRowSelect, useTable } from 'react-table/dist/react-table.development';
import secondaryActvityStyle from '../styles/secondaryActivity.module.scss'
import { ButtonNftIpf } from '../utili/components/ButtonIpfNft';
import { IndeterminateCheckbox, Styles, Table } from './Table';

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const DUMMY_URL = "https://www.w3.org/Provider/Style/dummy.html"

/* Secondary activity concering table and minting */
const SecondaryActivity = ({ setStage, pre, csv }) => {

    const nav = useNavigate()
    const [isLoading, setLoading] = useState(false)
    const [isDone, setDone] = useState(false)
    const [label, setLabel] = useState("Mint")
    const btnRef = useRef(null)
    const [selected, setSelected] = useState(null)
    const prevButtonRef = useRef(null)

    // Get data for table
    const data = React.useMemo(() => makeData(1, 0, pre, "x", csv), [])

    // set stage on component mount
    useEffect(() => {
        if (!isDone) setStage(1)
        else setStage(3)
    }, [])

    // redirect to primary activty
    const handleDone = () => {
        btnRef.current.style.width = "60px"
        toggleAllRowsSelected(false)
        setLabel("Mint")
        setLoading(false)
        setDone(false)
        nav("/primary")
        setStage(0)
    }

    // update cert with new date and alter button label
    const handleCertUpdate = () => {
        setStage(3)
        prevButtonRef.current.style.backgroundColor = "#707070"
        btnRef.current.style.width = "100px"
        setLabel("Done")
        setLoading(false)
        btnRef.current.style.backgroundColor = "#623CE7"
        setDone(true)

        selected.forEach(e => {

            e.values.prevCert = <ButtonNftIpf cert={{
                date: e.values.currentCert.props.cert.date,
                ipf: e?.values?.currentCert?.props?.cert?.ipf ?? DUMMY_URL,
                nft: e?.values?.currentCert?.props?.cert?.nft ?? DUMMY_URL,
            }} />

            let d = new Date()

            e.values.currentCert = <ButtonNftIpf cert={{
                date: d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear(),
                ipf: e?.values?.currentCert?.props?.cert?.ipf ?? DUMMY_URL,
                nft: e?.values?.currentCert?.props?.cert?.nft ?? DUMMY_URL,
            }} />
        })
    }

    // launch timed events on mint start while adjusting button width
    const handleClickEvent = () => {

        if (label === "Done") return handleDone()

        if (!(selected && selected?.length > 0)) return alert("Select items from table")

        prevButtonRef.current.style.backgroundColor = "#C8C8C8"
        setStage(2)
        setLoading(true)
        btnRef.current.style.width = "260px"
        setLabel("Generating metadata")

        setTimeout(() => {
            btnRef.current.style.width = "185px"
            setLabel("Pin to IPFS ")
        }, 4000)

        setTimeout(() => {
            btnRef.current.style.width = "185px"
            setLabel("Minting NFT")
        }, 6000)

        setTimeout(() => {
            handleCertUpdate()
        }, 8000)
    }

    // headings for table with json accessors
    const columns = React.useMemo(
        () => [
            {

                Header: 'Info',
                columns: [
                    {
                        Header: 'VIN Number',
                        accessor: 'vin',
                    },
                    {
                        Header: 'Type',
                        accessor: 'type',
                    },
                    {
                        Header: 'Make',
                        accessor: 'make',
                    },
                    {
                        Header: 'Model',
                        accessor: 'model',
                    },
                    {
                        Header: 'Year',
                        accessor: 'year',
                    },
                    {
                        Header: 'Current Certificate',
                        accessor: 'currentCert',
                    },
                    {
                        Header: 'Previous Certificate',
                        accessor: 'prevCert',
                    },
                    {
                        Header: 'Car History',
                        accessor: 'history',
                    },
                ],
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        toggleAllRowsSelected,
        rows,
        prepareRow,
        selectedFlatRows,
        state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data,
        },
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                // Let's make a column for selection
                {
                    id: 'selection',
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        }
    )

    return (
        <div className={secondaryActvityStyle.S_activity_container}>
            <div className={secondaryActvityStyle.S_activity_container_table}>

                <Styles>
                    {data && <Table
                        columns={columns}
                        data={data}
                        setSelected={setSelected}
                        getTableProps={getTableProps}
                        getTableBodyProps={getTableBodyProps}
                        headerGroups={headerGroups}
                        toggleAllRowsSelected={toggleAllRowsSelected}
                        rows={rows}
                        prepareRow={prepareRow}
                        selectedFlatRows={selectedFlatRows}
                        state={{ state: { selectedRowIds } }}
                    />}
                </Styles>

            </div>

            <div className={secondaryActvityStyle.S_activity_container_button}>
                <div style={{
                    margin: "0 1%"
                }}>
                    <button
                        className={secondaryActvityStyle.S_activity_container_button_prev}
                        disabled={isLoading}
                        ref={prevButtonRef}
                        onClick={() => {
                            setStage(0)
                            nav("/primary")
                        }}
                    >
                        <p>Previous</p>
                    </button>
                </div>

                <div style={{
                    margin: "0 0%"
                }}>
                    <button
                        className={secondaryActvityStyle.S_activity_container_button_sub}
                        disabled={isLoading}
                        ref={btnRef}
                        onClick={handleClickEvent}>
                        <div className={secondaryActvityStyle.S_activity_loader_btn}>
                            <p style={{ flex: "70%" }}>{label}</p>
                            <div style={{ flex: "30%" }}>

                                {!isLoading && <>
                                    {isDone && <><svg style={{ width: "30px", height: "30px", marginTop: "5px", marginLeft: "5px", marginRight: "5px" }} class="animated-check" viewBox="0 0 24 24">
                                        <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
                                    </svg></>}
                                </>}

                                {isLoading && <><div style={{ marginTop: "10px" }} class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></>}

                            </div>

                        </div>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default SecondaryActivity;