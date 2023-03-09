import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import TempCv from './TempCv';

const GeneratePdf = (props) => {
  const { personal, education, experience, image, style, selectedOption } =
    props;

  const generatePdf = () => {
    const input = document.getElementById('pdf-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('my-cv.pdf');
    });
  };

  return (
    <div className="container ">
      <button className="btn btn-info text-center " onClick={generatePdf}>
        Download PDF
      </button>
      <div id="pdf-content" className="bg-light">
        <TempCv
          personal={personal}
          education={education}
          experience={experience}
          image={image}
          style={selectedOption.style}
        />
      </div>
    </div>
  );
};

export default GeneratePdf;
