import React from "react";
import { Button } from "reactstrap";

import CertificateImg from "../../../assets/img/pages/certificate/file.jpg";

import { jsPDF } from "jspdf"
import html2canvas  from "html2canvas"


function printDocument() {
  const input = document.getElementById('certificate');
   html2canvas(input, {scrollY: -window.scrollY, scrollX: -window.scrollX})
     .then((canvas) => {
      //document.body.appendChild(canvas);
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF("landscape", "mm", [canvas.width, canvas.height]);
      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width,canvas.height);
      //pdf.output('dataurlnewwindow'); 
      pdf.save("sepsicon.pdf");
    })
  ;
}


function downloadCert() {
  return (
    <>
    <div id="certificate">
      <h1 className="certificate-header" style={{position:"absolute",left:"36%",top:"66%",margin:"0",fontWeight:"bolder",color:"#201fa1",fontSize:"35px"}}><b style={{fontFamily:"sans-serif",fontStyle:"italic"}}>{sessionStorage.getItem('name')}</b></h1>
      <div className="certificate-image" >
      <img src={CertificateImg} alt={"Download certificate"} style={{width:"100%"}}/>
      </div>

      {/*<a
        href={"../../../assets/img/pages/certificate/file-2.jpg"}
        target="_blank"
        download
      >
        <Button type="button" className="certificate-download-button">
          Download your certificate
        </Button>
      </a>*/}
    </div>


<Button type="button" className="certificate-download-button" onClick={()=>{printDocument();}}>
  Download
</Button>
   </>
  );
}

export default downloadCert;
