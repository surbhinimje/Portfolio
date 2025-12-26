import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Resumee from "../images/Surbhi Nimje CV.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f9f9f9"
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Resume</h1>

      <Document file={Resumee} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          width={isMobile ? 320 : 700}
        />
      </Document>

      {/* Pagination */}
      {numPages && (
        <div style={{ marginTop: "15px" }}>
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
            style={buttonStyle}
          >
            Previous
          </button>

          <span style={{ margin: "0 12px" }}>
            Page {pageNumber} of {numPages}
          </span>

          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
            style={buttonStyle}
          >
            Next
          </button>
        </div>
      )}

      {/* Download Button */}
      <a
        href={Resumee}
        download
        style={{
          marginTop: "20px",
          textDecoration: "none",
          background: "#000",
          color: "#fff",
          padding: "10px 18px",
          borderRadius: "6px",
          fontWeight: "500"
        }}
      >
        Download Resume
      </a>
    </div>
  );
}

const buttonStyle = {
  padding: "6px 12px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer"
};
