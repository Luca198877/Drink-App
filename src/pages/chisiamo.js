import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook,faChalkboardUser,faDatabase} from '@fortawesome/free-solid-svg-icons';

function Chisiamo() {
  return (
    <>
    <div className='container-fluid-banner2 d-flex justify-content-center align-items-center '>
      <div className='row d-flex justify-content-center align-items-center animate__animated animate__fadeInLeft'>
        <div className='col-12' style={{ position: 'relative', zIndex: 5 }}> 
          <hr className='bizantino'></hr>
          <h1 className='text-center text-light'>"Grande è la fortuna di <br></br>colui che possiede una<br></br>buona bottiglia, un buon <br></br>libro, un buon amico."</h1>
          <hr className='bizantino' style={{height:'30px',padding:'30px'}}></hr>
        </div>
      </div>
    </div>


    <div className='container-fluid d-flex flex-row flex-column justify-content-center align-items-center mb-5 mt-5'>
      <div className='row text-center'>
        <h3 className='wiki'> IL NOSTRO PROGETTO</h3>
      </div>
      
        <div className='row d-flex align-items-center justify-content-between flex-wrap gap-2' >
          <div className='col-lg-3 col-sm-9 mx-auto text-center bg-body-secondary info'>
            <h4>Educare</h4>
            <FontAwesomeIcon icon={faBook} className='bizantino' style={{height:'40px',width:'40px'}} />
            <p className='mt-3'>Il nostro obiettivo è quello di educare le persone al mondo dei cocktail, fornendo informazioni dettagliate su ogni cocktail e la sua preparazione.</p>
          </div>
          <div className='col-lg-3 col-sm-9 mx-auto text-center bg-body-secondary info'>
            <h4>Insegnare</h4>
            <FontAwesomeIcon icon={faChalkboardUser} className='bizantino'style={{height:'40px',width:'40px'}} />
            <p className='mt-3'>Insegnare a bere con qualità e consapevolezza i nostri utenti è la mission che ci siamo dati all'inizio di questo progetto</p>
          </div>
          <div className='col-lg-3 col-sm-9 mx-auto text-center bg-body-secondary info'>
            <h4>Centralizzare</h4>
            <FontAwesomeIcon icon={faDatabase} className='bizantino' style={{height:'40px',width:'40px'}} />
            <p className='mt-3'>Con la nostra app potrai vedere quanti drink è possibile realizzare con un determinato ingrediente e le ricette complete</p>
          </div>
        </div>
      </div>
      <section className='containert-fluid mb-2' style = {{background: 'url(https://static.gamberorosso.it/2023/10/team-di-sips-a-barcellona.jpg) center center / cover no-repeat', height:'90vh'}} >
      </section>

      <section className='container-fluid mb-3'>
        <div className='row'>
          <h3 className='text-center wiki'>IL NOSTRO TEAM</h3>
        </div>
        <div className='row d-flex justify-content-center align-items-center flex-wrap gap-2'>
          <div className='col-lg-3 col-sm-9 mx-auto text-center'>
            <h4 className='text-center'>Giuseppe Rossi</h4> 
            <h5 className='text-center text-secondary'>Ceo e Founder</h5>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQdm3pdEtrUKy_wKtqYau_XPj42m4h05jwg&s' alt ='barman' className='img-fluid rounded-circle'></img>
          </div>
          <div className='col-lg-3 col-sm-9 mx-auto text-center'>
            <h4 className='text-center'>Giorgio Pulli</h4> 
            <h5 className='text-center text-secondary'>Capo Barman</h5>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWv0ocNVpxjmCqf1XhKaFxh00Dol4Lk_67tw&s' alt ='barman' className='img-fluid rounded-circle'></img>
          </div>
          <div className='col-lg-3 col-sm-9 mx-auto text-center '>
            <h4 className='text-center'>Giorgio Pulli</h4> 
            <h5 className='text-center text-secondary'>Responsabile commerciale</h5>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0vS0dx-lt5Dm342JDCtK8E3dyUxcLJzkZg&s' alt ='barman' className='img-fluid rounded-circle'></img>
          </div>
        </div>

      </section>

    </>
   
  )
}

export default Chisiamo