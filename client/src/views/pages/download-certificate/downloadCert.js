import React from "react";
import { Button } from "reactstrap";

import CertificateImg from "../../../assets/img/pages/certificate/file-2";

import { jsPDF } from "jspdf"
import html2canvas  from "html2canvas"


function printDocument() {
  const input = document.getElementById('certificate');
   html2canvas(input, {scrollY: -window.scrollY})
     .then((canvas) => {
      //document.body.appendChild(canvas);
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF("l", "mm", "a4");
      pdf.addImage(imgData, 'JPEG', 0, 0);
      //pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    })
  ;
}


function downloadCert() {
  return (
    <div id="certificate">
      <h1 className="certificate-header"><b>{sessionStorage.getItem('name')}</b></h1>

      <div className="certificate-image" >
          <img src={CertificateImg} alt={"Download certificate"} />
      </div>

      <Button type="button" className="certificate-download-button" onClick={()=>{printDocument();}}>
        Download your certificate
      </Button>

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
  );
}

export default downloadCert;
