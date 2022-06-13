import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

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

// checkbox component for mint selection
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

// Table with checkbox
function Table({ 
    columns, 
    data, 
    setSelected, 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    toggleAllRowsSelected,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { 
        selectedRowIds 
    } }) {

    useEffect(() => {
        setSelected(selectedFlatRows)
    }, [selectedFlatRows])

    // Render the UI for table
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
        </div>
    )
}

export { IndeterminateCheckbox, Table, Styles};