import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import './Cv.css';

const CV = () => {

  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: 'nmpereira_cv.pdf',

    canvasRef,
  });

  return (
    <div className='pdf-view'>
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CV;