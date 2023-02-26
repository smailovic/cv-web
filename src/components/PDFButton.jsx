import React from 'react';

const PDFButton = () => {
  const handlePdfClick = () => {
    const content = document.getElementById('personal-info').innerHTML;
    const printWindow = window.open('', '', 'height=500,width=800');
    printWindow.document.write(
      `<html><head><title>CV</title></head><body>${content}</body></html>`
    );
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return <button onClick={handlePdfClick}>Download as PDF</button>;
};

export default PDFButton;
