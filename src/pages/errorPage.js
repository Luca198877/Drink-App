import React from 'react'
import {useNavigate} from "react-router-dom"

function ErrorPage() {
   const navigate = useNavigate()
  return (
    <div className='container my-5 '>
      <div className='col-12'>
        <button  className='btn text-light rounded-pill p-2 d-flex mx-auto mb-5' style={{ backgroundColor: '#b5179e' }} onClick={() => navigate("/")}>Torna alla Home</button>
      </div>
     <h2 className='text-center mb-5'>errorPage: page not  found 404</h2>
     <div className='col-lg-6 col-12 d-flex mx-auto align-items-center mb-5
          ' style={{ position: 'relative', zIndex: 2 }}>
            <img className='mx-auto my-animation' src={process.env.PUBLIC_URL +"/martini.png"} alt="bicchiere" style={{width:'400px', height:'400px',background:'trasparent'}}></img>
     </div> 
    </div>
  )
}

export default ErrorPage