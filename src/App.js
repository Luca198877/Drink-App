import { Link,useRoutes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


function App({routes}) {
  let element = useRoutes(routes);
  return (
    <div className='d-flex flex-column min-vh-100'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid p-4 ">
        <Link className="navbar-brand text wiki" to="/"><h3>WIKI DRINK</h3></Link>
        <button
          className="navbar-toggler wiki"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon wiki"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNav">
          <ul className="navbar-nav  mx-auto ">
            <li className="nav-item me-3 ms-5">
              <Link className="nav-link " aria-current="page" to="/">
                <FontAwesomeIcon icon={faHome} className="me-2 wiki" />HOME
              </Link>
            </li>
            <li className="nav-item me-3 ms-5">
              <Link className="nav-link" to="/chisiamo">
                <FontAwesomeIcon icon={faInfoCircle} className="me-2 wiki" />CHI SIAMO
               </Link>
            </li>
            <li className="nav-item me-3 ms-5">
              <Link className="nav-link" to="/contattaci">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 wiki" />CONTATTACI
              </Link>
            </li>
          </ul>
          
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} style={{width:'30px',height:'30px'}} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} style={{width:'30px',height:'30px'}}  />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} style={{width:'30px',height:'30px'}}  />
                  </a>
                </li>
              </ul>
            
        </div>
        
      </div>
    </nav>
    {element}
    <footer className="container-fluid piede text-center p-4 mt-4">
      <div className="row">
          <h4 className="text-light">ALL @ RESERVED TO   <span className="text bizantino">DRINK TEAM</span> </h4>
      </div>

    </footer>
    </div>
  );
}

export default App;
