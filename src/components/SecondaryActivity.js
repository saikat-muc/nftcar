import { Button } from '@mui/material';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import makeData, { SvgBox, SvgNFT } from '../utili/makeData';
import styled from 'styled-components'
import { useRowSelect, useTable } from 'react-table/dist/react-table.development';
import { LoadingButton } from '@mui/lab';
import { SvgIcon } from '@mui/material';
import LoadIcon from "../assets/icons/loader.svg";
import doneIcon from '../assets/svgtables/done.svg'
import nftIcon from '../assets/svgtables/nft.svg'
import threeDCube from '../assets/svgtables/3d-cube.svg'
import secondaryActvityStyle from './secondaryActivity.module.scss'

const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid black;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    border: none;

    thead {
        position: sticky;
        background-color: white;
        top: 0;
        z-index: 2;
    }

    tr {
       border: none;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
        color: rgba(102, 102, 102, 0.58);;
    },
    td {
      margin: 0;
      padding: 0.5rem;
      border: none;
      padding: 12px;
      align-items: center;
      :last-child {
        border-right: 0;
      }
    }
  }
`

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <div className='checkboxContainer'>
                <input type="checkbox" ref={resolvedRef} {...rest} />
            </div>
        )
    }
)

function Table({ columns, data, setSelected,  getTableProps,
    getTableBodyProps,
    headerGroups,
    toggleAllRowsSelected,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds } }) {
    // Use the state and functions returned from useTable to build your UI


    /* const {
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
    ) */

    useEffect(() => {
        setSelected(selectedFlatRows)
    }, [selectedFlatRows])


    // Render the UI for your table
    return (
        <div style={{
            width: "100%",
            height: "100%",
        }}>
            <table style={{ margin: "0 auto" }} {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup, i) => {
                        if (i == 0) return
                        return (

                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, i) => {
                                    return (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {

                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
        <pre>
          <code>
            {JSON.stringify(
              {
                selectedRowIds: selectedRowIds,
                'selectedFlatRows[].original': selectedFlatRows.map(
                  d => d.original
                ),
              },
              null,
              2
            )}
          </code>
        </pre> */}
        </div>
    )
}

const SecondaryActivity = ({ setStage, pre, post, csv }) => {

    const [isLoading, setLoading] = useState(false)
    const [isDone, setDone] = useState(false)
    const [label, setLabel] = useState("Mint")
    const btnRef = useRef(null)
    const [selected, setSelected] = useState(null)
    const prevButtonRef = useRef(null)
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

    const data = React.useMemo(() => makeData(1, 0, pre, post, csv), [])
    
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

    useEffect(() => {
        if (!isDone) setStage(1)
        else setStage(3)
    }, [])

    

    //useEffect(() => { if (data?.length) console.log(data) }, [data])
    //useEffect(()=>{if(csv?.length) console.log("CSV", csv)}, [csv])

    const nav = useNavigate()

    return (
        <div className={secondaryActvityStyle.S_activity_container}  /* style={{ marginTop: "30px" }} */>
            <div className={secondaryActvityStyle.S_activity_container_table} /* style={{ overflowY: "scroll", height: "420px", overflowX: "hidden" }} */>
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
                      state={{state: { selectedRowIds }}}
                      />}
                </Styles>
            </div>


            <div className={secondaryActvityStyle.S_activity_container_button} /* style={{
                marginLeft: "100px",
                marginRight: "100px"
            }} */>
                <div style={{
                    /* float: "left", */
                   /*  left: "0", */
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
                    /* float: "right", */
                    /* right: "0", */
                    margin: "0 0%"
                }}>
                    <button
                        className={secondaryActvityStyle.S_activity_container_button_sub}
                        disabled={isLoading}
                        ref={btnRef}
                        onClick={() => {

                            if(label==="Done") {
                                btnRef.current.style.width = "60px"
                                toggleAllRowsSelected(false)
                                setLabel("Mint")
                                setLoading(false)
                                setDone(false)
                                setStage(1)
                                return
                            }

                            if (!(selected && selected?.length > 0)) return alert("Select items from table")
                            prevButtonRef.current.style.backgroundColor = "#C8C8C8"
                            setStage(2)
                            setLoading(true)
                            btnRef.current.style.width = "260px"
                            setLabel("Generating metadata")
                            setTimeout(() => {
                                setStage(3)
                                prevButtonRef.current.style.backgroundColor = "#707070"
                                btnRef.current.style.width = "100px"
                                setLabel("Done")
                                setLoading(false)
                                btnRef.current.style.backgroundColor = "#623CE7"
                                setDone(true)
                                const style = { display: "flex", flexDirection: "row", gap: "5px", justifyContent: "center", alignItems: "center" }
                                const ButtonB = ({ cert }) => (<div>
                                    <div style={style}><p>{cert.date}</p><button target="_blank" alt="Open nft link" onClick={() => window.open(cert.nft)} 
                                    className="linkBtns"
                                   
                                    ><SvgNFT/>{/* <img src={nftIcon} alt="nft" /> */}</button>

                                        <button  target="_blank"  alt="Open ipf link" onClick={()=> window.open(cert.ipf) } 
                                        className="linkBtns"
                                        ><SvgBox/>{/* <img src={threeDCube} alt="ipf" /> */}</button></div>
                                </div>)

                                selected.forEach(e => {
                                    e.values.prevCert = <ButtonB cert={{
                                        date: e.values.currentCert.props.cert.date,
                                        ipf: e?.values?.currentCert?.props?.cert?.ipf ?? "https://www.w3.org/Provider/Style/dummy.html",
                                        nft: e?.values?.currentCert?.props?.cert?.nft ?? "https://www.w3.org/Provider/Style/dummy.html",
                                    }} />
                                    let d = new Date()
                                    const monthNames = ["January", "February", "March", "April", "May", "June",
                                        "July", "August", "September", "October", "November", "December"
                                    ];
                                    e.values.currentCert = <ButtonB cert={{
                                        date: d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear(),
                                        ipf: e?.values?.currentCert?.props?.cert?.ipf ?? "https://www.w3.org/Provider/Style/dummy.html",
                                        nft: e?.values?.currentCert?.props?.cert?.nft ?? "https://www.w3.org/Provider/Style/dummy.html",
                                    }} />
                                })

                            }, 8000)

                            setTimeout(() => {
                                btnRef.current.style.width = "185px"
                                setLabel("Pin to IPFS ")
                            }, 4000)

                            setTimeout(() => {
                                btnRef.current.style.width = "185px"
                                setLabel("Minting NFT")
                            }, 6000)
                        }}
                    >
                        <div style={{
                            border: "none",
                            width: "auto",
                            marginLeft: "auto",
                            marginRight: "0",
                            height: "50px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"
                        }}>
                            <p style={{flex: "70%" }}>{label}</p>

                            <div style={{flex: "30%" }}>
                            {!isLoading && <>
                                {isDone
                                    ? <><svg style={{ width: "30px", height: "30px", marginTop: "5px", marginLeft: "5px", marginRight: "5px" }} class="animated-check" viewBox="0 0 24 24">
                                        <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
                                    </svg></>
                                    : <>{/* <span style={{marginRight: "10px", height: "13px", width: "13px", backgroundColor: "#88e401", borderRadius: "50%"}} class="dot"></span>
                                    <span style={{marginRight: "10px", height: "13px", width: "13px", backgroundColor: "#00bcff", borderRadius: "50%"}} class="dot"></span>
                                    <span style={{marginRight: "10px", height: "13px", width: "13px", backgroundColor: "#ffbb00", borderRadius: "50%"}} class="dot"></span> */}</>
                                }
                            </>}

                            {isLoading && <><div style={{marginTop: "10px"}} class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></>}
                            </div>
                            

                            { /* ? <><svg style={{ width: "30px", height: "30px" }} class="animated-check" viewBox="0 0 24 24">
                                <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
                            </svg></>
                            :  <><img alt="icon" style={{ marginLeft: "10px", marginRight: "10px" }} src={LoadIcon} /></>}

                            {isLoading} */}
                        </div>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default SecondaryActivity;