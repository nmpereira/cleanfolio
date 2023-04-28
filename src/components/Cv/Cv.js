import React, {  useRef } from 'react'
import { usePdf } from '@mikecousins/react-pdf'
import './Cv.css'

const CV = () => {
  const canvasRef = useRef(null)

  const { pdfDocument } = usePdf({
    file: 'nmpereira_cv.pdf',

    canvasRef,
  })

  return (
    <>
    <div className='Links'>

      <a href='/' className='home-link'>
        <span type='button' className='btn btn--outline'>
          Back
        </span>
      </a>
      <a href='nmpereira_cv.pdf' className='download-link' download>
        <span type='button' className='btn btn--outline'>
          Download
        </span>
      </a>
    </div>

      <div className='pdf-view'>
        {!pdfDocument && <span>Loading...</span>}
        <canvas ref={canvasRef} />
      </div>
    </>
  )
}

export default CV
