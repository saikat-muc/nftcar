import React from "react"
import { SvgBox, SvgNFT } from "../makeData"

const style = { display: "flex", flexDirection: "row", gap: "5px", justifyContent: "center", alignItems: "center" }

// Table row button to view nft and ipfs
export function ButtonNftIpf({ cert }) {
    return (<div>
      <div style={style}><p>{cert.date}</p><button target="_blank" alt="Open nft link" onClick={() => window.open(cert.nft)}
        className="linkBtns"><SvgNFT /></button>
        <button target="_blank" alt="Open ipf link" onClick={() => window.open(cert.ipf)}
          className="linkBtns"
        ><SvgBox /></button></div>
    </div>)
}