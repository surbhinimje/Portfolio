
import Resumee from "../images/Surbhi_Nimje_Resume.pdf";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file={Resumee}
        onLoadSuccess={onDocumentLoadSuccess} height="auto" width="auto"
      >
        <Page pageNumber={1} />
      </Document>
      <p>
        Page {1} of {1}
      </p>
    </div>
  );
}