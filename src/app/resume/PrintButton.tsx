"use client";

import { useState } from "react";

export default function PrintButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const page = document.querySelector(".page") as HTMLElement;
      if (!page) return;

      const canvas = await html2canvas(page, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // how many canvas px fit in one A4 page
      const pageHeightPx = (canvas.width * pdfHeight) / pdfWidth;
      const totalPages = Math.ceil(canvas.height / pageHeightPx);

      for (let i = 0; i < totalPages; i++) {
        if (i > 0) pdf.addPage();

        const srcY = i * pageHeightPx;
        const sliceHeight = Math.min(pageHeightPx, canvas.height - srcY);

        // draw only the slice of this page onto a temporary canvas
        const sliceCanvas = document.createElement("canvas");
        sliceCanvas.width = canvas.width;
        sliceCanvas.height = sliceHeight;
        const ctx = sliceCanvas.getContext("2d")!;
        ctx.drawImage(canvas, 0, srcY, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);

        const sliceData = sliceCanvas.toDataURL("image/png");
        const slicePdfHeight = (sliceHeight * pdfWidth) / canvas.width;
        pdf.addImage(sliceData, "PNG", 0, 0, pdfWidth, slicePdfHeight);
      }

      pdf.save("Krish_Aryan_Resume.pdf");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="print-bar">
      <button className="print-btn" onClick={handleDownload} disabled={loading}>
        {loading ? "Generating..." : "⬇ Download PDF"}
      </button>
    </div>
  );
}
