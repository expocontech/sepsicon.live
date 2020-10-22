import React from "react";
import { Button } from "reactstrap";

import CertificateImg from "../../../assets/img/pages/certificate/file-2";

function downloadCert() {
  return (
    <div>
      <h1 className="certificate-header">Certificate For Your Name</h1>

      <div className="certificate-image">
        <img src={CertificateImg} alt={"Download certificate"} />
      </div>
      <a
        href={"../../../assets/img/pages/certificate/file-2.jpg"}
        target="_blank"
        download
      >
        <Button type="button" className="certificate-download-button">
          Download your certificate
        </Button>
      </a>
    </div>
  );
}

export default downloadCert;
