// import React from "react";
// import styled from "styled-components";
// import { jsPDF } from "jspdf";
// import Swal from "sweetalert2";

// const Button = styled.button`
//   padding: 10px 15px;
//   background: #d4af37;
//   color: black;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   margin-left: 10px;

//   &:hover {
//     background: #b8972f;
//   }
// `;

// const DownloadPlanPDF = ({ plan, businessName }) => {
//   const downloadPDF = () => {
//     if (!plan) return;

//     const doc = new jsPDF();

//     const pageWidth = doc.internal.pageSize.getWidth();
//     const pageHeight = doc.internal.pageSize.getHeight();

//     const margin = 15;
//     const textWidth = pageWidth - margin * 2;
//     let y = 20; // starting height

//     // Title
//     doc.setFontSize(16);
//     doc.text(businessName || "Business Plan", margin, y);
//     y += 10;

//     // Body text
//     doc.setFontSize(11);
//     const lines = doc.splitTextToSize(plan, textWidth);

//     lines.forEach((line) => {
//       if (y + 8 > pageHeight - margin) {
//         doc.addPage();
//         y = 20;
//       }
//       doc.text(line, margin, y);
//       y += 8;
//     });

//     doc.save(`${businessName || "Business_Plan"}.pdf`);

//     Swal.fire({
//       icon: "success",
//       text: "PDF Downloaded, Please check your Downloads folder"
//     });
//   };

//   return <Button onClick={downloadPDF}>Download PDF</Button>;
// };

// export default DownloadPlanPDF;



import React from "react";
import styled from "styled-components";
import { jsPDF } from "jspdf";
import Swal from "sweetalert2";

const Button = styled.button`
  padding: 10px 15px;
  background: #d4af37;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background: #b8972f;
  }
`;

const DownloadPlanPDF = ({ plan, businessName }) => {
  const downloadPDF = () => {
    if (!plan) return;

    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const textWidth = pageWidth - margin * 2;
    let y = 20;

    // ===== COVER TITLE =====
    doc.setFontSize(20);
    doc.setTextColor(10, 60, 255); // Blue
    doc.setFont("helvetica", "bold");
    doc.text(businessName || "Business Plan", margin, y);
    y += 12;

    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    doc.setFont("helvetica", "normal");
    doc.text("Generated Business Plan", margin, y);
    y += 15;

    // Divider line
    doc.setDrawColor(10, 60, 255);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;

    // ===== PROCESS PLAN TEXT =====
    const paragraphs = plan.split("\n");

    paragraphs.forEach((text) => {
      if (!text.trim()) {
        y += 5;
        return;
      }

      // === MAIN HEADINGS (##) ===
      if (text.startsWith("## ")) {
        if (y + 15 > pageHeight - margin) {
          doc.addPage();
          y = 20;
        }

        doc.setFontSize(14);
        doc.setTextColor(10, 60, 255);
        doc.setFont("helvetica", "bold");

        const cleanText = text.replace("## ", "");
        doc.text(cleanText, margin, y);
        doc.line(margin, y + 2, margin + doc.getTextWidth(cleanText), y + 2); // underline

        y += 10;
        return;
      }

      // === SUBHEADINGS (###) ===
      if (text.startsWith("### ")) {
        if (y + 12 > pageHeight - margin) {
          doc.addPage();
          y = 20;
        }

        doc.setFontSize(12);
        doc.setTextColor(10, 60, 255);
        doc.setFont("helvetica", "bold");

        const cleanText = text.replace("### ", "");
        doc.text(cleanText, margin, y);
        y += 8;
        return;
      }

      // === BOLD ITALIC BLUE + GOLD UNDERLINE for **text** ===
      if (text.includes("**")) {
        const parts = text.split(/(\*\*.*?\*\*)/g);

        parts.forEach((part) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            const cleanText = part.replace(/\*\*/g, "");

            if (y + 8 > pageHeight - margin) {
              doc.addPage();
              y = 20;
            }

            // Style: Bold + Italic + Blue
            doc.setFontSize(11);
            doc.setTextColor(10, 60, 255);
            doc.setFont("helvetica", "bolditalic");

            doc.text(cleanText, margin, y);

            // GOLD UNDERLINE
            doc.setDrawColor(212, 175, 55); // Gold
            doc.line(
              margin,
              y + 2,
              margin + doc.getTextWidth(cleanText),
              y + 2
            );

            y += 7;
          } else if (part.trim()) {
            // Normal text after bold part
            const wrapped = doc.splitTextToSize(part, textWidth);

            wrapped.forEach((line) => {
              if (y + 7 > pageHeight - margin) {
                doc.addPage();
                y = 20;
              }

              doc.setFontSize(11);
              doc.setTextColor(0, 0, 0);
              doc.setFont("helvetica", "normal");
              doc.text(line, margin, y);
              y += 7;
            });
          }
        });

        y += 3;
        return;
      }

      // === BULLET POINTS ===
      if (text.trim().startsWith("•") || text.trim().startsWith("-")) {
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "normal");

        const wrapped = doc.splitTextToSize(text, textWidth - 5);

        wrapped.forEach((line) => {
          if (y + 8 > pageHeight - margin) {
            doc.addPage();
            y = 20;
          }
          doc.text("• " + line.replace("•", "").replace("-", ""), margin + 5, y);
          y += 7;
        });

        y += 2;
        return;
      }

      // === NORMAL PARAGRAPH TEXT ===
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");

      const wrappedText = doc.splitTextToSize(text, textWidth);

      wrappedText.forEach((line) => {
        if (y + 7 > pageHeight - margin) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, margin, y);
        y += 7;
      });

      y += 3;
    });

    // Footer
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.text(
      `Generated by SLIATEDGE • ${new Date().toLocaleDateString()}`,
      margin,
      pageHeight - 10
    );

    doc.save(`${businessName || "Business_Plan"}.pdf`);

    Swal.fire({
      icon: "success",
      text: "PDF downloaded!"
    });
  };

  return <Button onClick={downloadPDF}>Download PDF</Button>;
};

export default DownloadPlanPDF;
