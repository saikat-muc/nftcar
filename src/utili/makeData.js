import React from "react"
import pdfIcon from '../assets/svgtables/download-pdf.svg'
import nftIcon from '../assets/svgtables/nft.svg'
import threeDCube from '../assets/svgtables/3d-cube.svg'
import { ReactComponent as NFT}  from '../assets/svgtables/nft.svg'
const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}
export function SvgNFT () {
  return (<svg class="icon icon-nft-token-13033-1"><use xlinkHref="#icon-nft-token-13033-1"></use><symbol id="icon-nft-token-13033-1" viewBox="0 0 32 32">
  <path d="M16 31.755c-0.749 0-1.497-0.193-2.165-0.579l-9.895-5.713c-1.336-0.771-2.166-2.208-2.166-3.751v-11.425c0-1.542 0.83-2.979 2.166-3.751l9.895-5.713c1.336-0.771 2.996-0.771 4.331 0l9.895 5.713c1.336 0.771 2.165 2.208 2.165 3.751v11.425c0 1.543-0.83 2.98-2.165 3.751l-9.895 5.713c-0.668 0.385-1.416 0.578-2.165 0.578zM16 0.946c-0.628 0-1.255 0.162-1.815 0.485l-9.895 5.713c-1.12 0.646-1.816 1.851-1.816 3.144v11.425c0 1.293 0.696 2.498 1.816 3.144l9.895 5.713c1.12 0.647 2.511 0.647 3.631 0l9.895-5.713c1.12-0.646 1.815-1.851 1.815-3.144v-11.425c0-1.293-0.696-2.498-1.815-3.144l-9.895-5.713c-0.56-0.323-1.188-0.485-1.815-0.485z"></path>
  <path d="M11.222 20.752c-0.119 0-0.232-0.061-0.298-0.166l-4.816-7.76v7.575c0 0.194-0.157 0.35-0.35 0.35s-0.35-0.157-0.35-0.35v-8.804c0-0.156 0.104-0.294 0.254-0.337s0.311 0.019 0.394 0.152l4.817 7.76v-7.575c0-0.193 0.157-0.35 0.35-0.35s0.35 0.157 0.35 0.35v8.804c0 0.156-0.104 0.294-0.254 0.337-0.032 0.009-0.064 0.013-0.096 0.013z"></path>
  <path d="M14.636 20.752c-0.193 0-0.35-0.157-0.35-0.35v-8.804c0-0.193 0.157-0.35 0.35-0.35h3.903c0.194 0 0.35 0.157 0.35 0.35s-0.157 0.35-0.35 0.35h-3.553v8.453c0 0.193-0.157 0.35-0.35 0.35z"></path>
  <path d="M17.739 16.35h-3.103c-0.193 0-0.35-0.157-0.35-0.35s0.157-0.35 0.35-0.35h3.103c0.194 0 0.35 0.157 0.35 0.35s-0.157 0.35-0.35 0.35z"></path>
  <path d="M26.242 11.948h-5.003c-0.194 0-0.35-0.157-0.35-0.35s0.157-0.35 0.35-0.35h5.003c0.194 0 0.35 0.157 0.35 0.35s-0.157 0.35-0.35 0.35z"></path>
  <path d="M23.74 20.752c-0.194 0-0.35-0.157-0.35-0.35v-8.804c0-0.193 0.157-0.35 0.35-0.35s0.35 0.157 0.35 0.35v8.804c0 0.193-0.157 0.35-0.35 0.35z"></path>
  </symbol></svg>)
} 

export function SvgBox () {
  return (<svg class="icon icon-box"><use xlinkHref="#icon-box"></use><symbol id="icon-box" viewBox="0 0 32 32">
    <path d="M16.372 2.226c-0.11-0.045-0.238-0.072-0.372-0.072s-0.262 0.026-0.379 0.074l0.007-0.002-11.936 4.774 12.308 4.922 12.308-4.922-11.936-4.774zM30 8.478l-13 5.2v15.844l13-5.2v-15.842zM15 29.524v-15.848l-13-5.198v15.846l13 5.2zM14.886 0.368c0.33-0.136 0.713-0.214 1.114-0.214s0.784 0.079 1.134 0.222l-0.020-0.007 14.258 5.704c0.371 0.152 0.628 0.51 0.628 0.928v0 17.324c-0.001 0.837-0.515 1.553-1.245 1.851l-0.013 0.005-14.37 5.748c-0.11 0.045-0.238 0.072-0.372 0.072s-0.262-0.026-0.379-0.074l0.007 0.002-14.368-5.748c-0.744-0.302-1.259-1.019-1.26-1.856v-17.324c0-0.418 0.257-0.776 0.621-0.926l0.007-0.002 14.258-5.704z"></path>
    </symbol></svg>)
}
const style2 = { margin: 0, color: "#B2AEAE", fontSize: "11px" }
const style = { display: "flex", flexDirection: "row", gap: "5px", justifyContent: "center", alignItems: "center" }

const linkArray = [
  {
    nft: "https://nft-devnet.xrpl.org/transactions/F15D439AB98AFE20084D92B0476B8C5FAAA186EEAF7EA08B51059A07B3FA4865/simple",
    ipf: "https://aqrl.mypinata.cloud/ipfs/QmSJNJAj6rtbZR11MrnUYzM28mrW7L7vfANDM2kr2jMpXf",
    pdf: "https://aqrl.mypinata.cloud/ipfs/Qma2jC9KH145rNecP4ngHUgo4iHcZBFNFSHWf7fRdMf7y5"
  },
  {
    nft: "https://nft-devnet.xrpl.org/transactions/DEDE25F8C9AD0721D33109668C2F9556E1C7684ED72E10C86E5D04CFF2C26388/simple",
    ipf: "https://aqrl.mypinata.cloud/ipfs/QmYXi5pmrAGbQtyicELCGJeejUpdd8dqFwyuUzKPfJsm6k",
    pdf: "https://aqrl.mypinata.cloud/ipfs/QmPkX4hUU1oz9t5xJA5pN6GjL5PhvbqwYn9MuyPp9R2itx"
  },
  {
    nft: "https://nft-devnet.xrpl.org/transactions/7AEAC0C2DD0A8BDFE6A5BEF2E2B2F6690DBE2BCD6EBE09954F38654E452B1EA0/simple",
    ipf: "https://aqrl.mypinata.cloud/ipfs/QmbRGzswEYxwpR77Gg8C3YzLm9DNuG2PLm1Mm7hjwWqUdm",
    pdf: "https://aqrl.mypinata.cloud/ipfs/QmQXggmMoqjcksuJ8RFNi7S8wejGtaAED3wEuJHjDkDkzp"
  },
  {
    nft: "https://nft-devnet.xrpl.org/transactions/E2B8A5B2DB8C97439EB4F9919E2D4902ABB7DF9DBD744AACBD034F01B94EA13C/simple",
    ipf: "https://aqrl.mypinata.cloud/ipfs/QmU5AwhuG1xUJJWt5qMNkECu2CBUK6Hk5qy6mMtesyFttQ",
    pdf: "https://aqrl.mypinata.cloud/ipfs/QmdCUFqACqmLMiKJAyiCHXQ8VHSsNm9tCEmLjYzncAhCCr"
  },
  {
    nft: "https://nft-devnet.xrpl.org/transactions/AD4389D6C146D6B7C27AA24AF7036AF445AC562817F40D266A5955858C85F5E7/simple",
    ipf: "https://aqrl.mypinata.cloud/ipfs/QmRF8KcTY631qBYEWBjyPcyXfCKdnh8mFxy3ngN7ej2qVh",
    pdf: "https://aqrl.mypinata.cloud/ipfs/QmNVQu7ou9uWyzuCZQm4EriMuYGdebGJzc7Yfusx9ViW7Z"
  },
  {
    nft: "https://nft-devnet.xrpl.org/transactions/284B3ED800BA980B9C66E11AC231AF3509E4689EE1EAD59C04EC596F5D74442A/simple",
    ipf: "https://aqrl.mypinata.cloud/ipfs/QmRiRbyRthdfcHPZgTe6XFg6KqyXz9ZRyh3oYq3SDatUDb",
    pdf: "https://aqrl.mypinata.cloud/ipfs/QmbgNJ1LvoyVQPt7BSie3M7b5s18GYTBFTDcWQS5LfVQxT"
  },
  {
    nft: "https://nft-devnet.xrpl.org/transactions/F15D439AB98AFE20084D92B0476B8C5FAAA186EEAF7EA08B51059A07B3FA4865/simple",
    ipf: "https://aqrl.mypinata.cloud/ipfs/QmSJNJAj6rtbZR11MrnUYzM28mrW7L7vfANDM2kr2jMpXf",
    pdf: "https://aqrl.mypinata.cloud/ipfs/Qma2jC9KH145rNecP4ngHUgo4iHcZBFNFSHWf7fRdMf7y5"
  },
  {
    nft: "https://nft-devnet.xrpl.org/transactions/DEDE25F8C9AD0721D33109668C2F9556E1C7684ED72E10C86E5D04CFF2C26388/simple",
    ipf: "https://aqrl.mypinata.cloud/ipfs/QmYXi5pmrAGbQtyicELCGJeejUpdd8dqFwyuUzKPfJsm6k",
    pdf: "https://aqrl.mypinata.cloud/ipfs/QmPkX4hUU1oz9t5xJA5pN6GjL5PhvbqwYn9MuyPp9R2itx"
  },
  {
    nft: "https://nft-devnet.xrpl.org/transactions/7AEAC0C2DD0A8BDFE6A5BEF2E2B2F6690DBE2BCD6EBE09954F38654E452B1EA0/simple",
    ipf: "https://aqrl.mypinata.cloud/ipfs/QmbRGzswEYxwpR77Gg8C3YzLm9DNuG2PLm1Mm7hjwWqUdm",
    pdf: "https://aqrl.mypinata.cloud/ipfs/QmQXggmMoqjcksuJ8RFNi7S8wejGtaAED3wEuJHjDkDkzp"
  },
  {
    nft: "https://nft-devnet.xrpl.org/transactions/E2B8A5B2DB8C97439EB4F9919E2D4902ABB7DF9DBD744AACBD034F01B94EA13C/simple",
    ipf: "https://aqrl.mypinata.cloud/ipfs/QmU5AwhuG1xUJJWt5qMNkECu2CBUK6Hk5qy6mMtesyFttQ",
    pdf: "https://aqrl.mypinata.cloud/ipfs/QmdCUFqACqmLMiKJAyiCHXQ8VHSsNm9tCEmLjYzncAhCCr"
  }
]

const handleDownload = async (e) => {

  

  /* const a = []

  const vals = e.target.parentElement.parentElement.parentElement.innerText.split("\t")

  vals.forEach((e, i) => {
    if (i === 0) return
    if (i === vals.length - 1) return
    a.push(e.replace(/\n/g, ' ').trim())
  })

  const obj = {
    vin: a[0],
    type: a[1],
    make: a[2],
    model: a[3],
    year: a[4],
    currentCert: a[5],
    prevCert: a[6],
  }


  const myData = obj
  const fileName = "file";
  const json = JSON.stringify(myData);
  const blob = new Blob([json], { type: 'application/json' });
  const href = await URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); */

}

const ButtonB = ({ cert }) => (<div>
  <div style={style}><p>{cert.date}</p><button target="_blank" alt="Open nft link" onClick={() => window.open(cert.nft)} 
  className="linkBtns"><SvgNFT/></button>
    <button target="_blank" alt="Open ipf link" onClick={() => window.open(cert.ipf)} 
    className="linkBtns"
    ><SvgBox/></button></div>
</div>)

const ButtonC = ({pdfLink}) => {

  return (<button target="_blank" onClick={() => window.open(pdfLink)} /* onClick={()=> window.open("https://www.w3.org/Provider/Style/dummy.html") } */ style={{
    border: "none",
    width: "20px",
    height: "20px",
    cursor: "pointer",
    borderRadius: "4px",
    backgroundColor: "white"
  }}><img style={{ width: "20px", height: "20px"}} src={pdfIcon} alt="pdf" /></button>)
}


const newPerson = (pre, post, csv) => {

  let carVin = "#MUC-202323"

  if (pre?.length > 0) carVin = pre

  const ipfLink = "https://aqrl.mypinata.cloud/ipfs/QmRiRbyRthdfcHPZgTe6XFg6KqyXz9ZRyh3oYq3SDatUDb"
  const NFTLink = "https://nft-devnet.xrpl.org/transactions/284B3ED800BA980B9C66E11AC231AF3509E4689EE1EAD59C04EC596F5D74442A/simple"
  const pdfLink = "https://aqrl.mypinata.cloud/ipfs/QmbgNJ1LvoyVQPt7BSie3M7b5s18GYTBFTDcWQS5LfVQxT"
  
  return {
    vin: <b>{carVin}</b>,
    type: <b>SUV</b>,
    make: <div><b style={{ margin: 0 }}>First</b><p style={style2}>Class</p></div>,
    model: <div><b style={{ margin: 0 }}>Toyota</b><p style={style2}>corolla</p></div>,
    year: 2022,
    currentCert: <ButtonB cert={{ 
      date: "12 May 2022",
      ipf: ipfLink,
      nft: NFTLink,
    }} />,
    prevCert: <ButtonB cert={{ 
      date: "11 May 2022",
      ipf: ipfLink,
      nft: NFTLink,
  }} />,
    history: <ButtonC pdfLink={pdfLink} />
  }
}

export default function makeData(...lens) {

  if (lens[4] && lens[4]?.length > 0) {

    const arr = []

    const ButtonBCSV = ({ cert }) => (<div>
      <div style={style}><p>{cert.date}</p><button target="_blank" /* title={`${cert.nft}`} */ alt="Open nft link" onClick={() => window.open(cert.nft)} 
      className="linkBtns"
      ><SvgNFT/> {/* <img src={nftIcon} alt="nft" /> */}</button>
        <button target="_blank" /* title={`${cert.ipf}`} */ alt="Open ipf link" onClick={() => window.open(cert.ipf)} 
        className="linkBtns"
        ><SvgBox/>{/* <img src={threeDCube} alt="ipf" /> */}</button></div>
    </div>)

    const ButtonCCSV = ({ history }) => {

      return (<button /* title={`${history}`} */ onClick={() => window.open(history)} style={{
        border: "none",
        cursor: "pointer",
        width: "20px",
        height: "20px",
        borderRadius: "4px",
        backgroundColor: "white"
      }}><img style={{ width: "20px", height: "20px"}} src={pdfIcon} alt="pdf" /></button>)
    }

    lens[4].map((d, i) => {

      /* if (lens[4].length - 1 === i) return */

      const topValMake = d?.make?.split(" ")[0] ?? "First"
      const botValMake = d?.make?.split(" ")[1] ?? "Class"

      const topValmodel = d?.model?.split(" ")[0] ?? "Toyota"
      const botValmodel = d?.model?.split(" ")[1] ?? "corolla"

      const dumWeb = "https://www.w3.org/Provider/Style/dummy.html"

      const currCert = {
        date: d?.currentCert ?? "11 May 2022",
        ipf: /* d?.currentCertIPF ?? */ linkArray[i]?.ipf ?? dumWeb,
        nft: /* d?.currentCertNFT ?? */ linkArray[i]?.nft ?? dumWeb
      }

      const prevCert = {
        date: d?.prevCert ?? "12 May 2022",
        ipf: /* d?.prevCertIPF ?? */ linkArray[i]?.ipf ?? dumWeb,
        nft: /* d?.prevCertNFT ?? */ linkArray[i]?.nft ?? dumWeb
      }

      const history = /* d?.history ?? */ linkArray[i]?.pdf ?? dumWeb

      const a = {
        vin: <b>{d?.vin ?? "#MUC-202323"}</b>,
        type: <b>{d?.type ?? "SUV"}</b>,
        make: <div><b style={{ margin: 0 }}>{topValMake}</b><p style={style2}>{botValMake}</p></div>,
        model: <div><b style={{ margin: 0 }}>{topValmodel}</b><p style={style2}>{botValmodel}</p></div>,
        year: 2022,
        currentCert: <ButtonBCSV cert={currCert} />,
        prevCert: <ButtonBCSV cert={prevCert} />,
        history: <ButtonCCSV history={history} />,
        subRows: []
      }

      arr.push(a)
    })

    return arr

  }
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map((d, i) => {
      return {
        ...newPerson(lens[2], lens[3]),
        subRows: [],
      }
    })
  }

  return makeDataLevel()
}
