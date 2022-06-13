import React from "react"
import pdfIcon from '../../assets/svgtables/download-pdf.svg'

// Table row button to download pdf
export function ButtonDownload({ history }) {
    return (<button target="_blank" onClick={() => window.open(history)} style={{
      border: "none",
      width: "20px",
      height: "20px",
      cursor: "pointer",
      borderRadius: "4px",
      backgroundColor: "white"
    }}><img style={{ width: "20px", height: "20px" }} src={pdfIcon} alt="pdf" /></button>)
}