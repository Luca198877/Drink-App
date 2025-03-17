import React,{useState,useEffect,useRef} from 'react'
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";



const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


function Home() {
  const navigate = useNavigate()
  return (
    <>
    <div className='container-fluid-banner'>
      <div className='container-fluid'>
        <div className='row d-flex flex-wrap justify-content-around align-items-center min-vh-100 z-1'>
          <div className='col-lg-6 col-12 d-flex flex-column align-items-center align-items-center' style={{ backgroundColor:'trasparent',position: 'relative', zIndex: 1 }}>
            <h1 className='text-center bizantino animate__animated animate__bounceInDown'>Wiki Drink</h1>
            <h3 className='text-light'>TUTTI I COCKTAIL DEL MONDO A PORTATA DI CLICK</h3>
            <p className='text-light'>Wiki Drink è un sito web che ti permette di scoprire tutti i cocktail del mondo, con la possibilità di cercare la ricetta del tuo cocktail preferito e di aggiungere nuovi cocktail alla nostra lista.</p>
            <button className='btn text-light rounded-pill p-2 ' style={{backgroundColor:'#b5179e'}} onClick={()=>navigate("/chisiamo")}>Scopri di piu</button>
          </div>
          <div className='col-lg-6 col-12 d-flex align-items-center
          ' style={{ position: 'relative', zIndex: 2 }}>
            <img className='mx-auto my-animation' src={process.env.PUBLIC_URL +"/martini.png"} alt="bicchiere" style={{width:'300px', height:'300px',background:'trasparent'}}></img>
          </div>
        </div>
      </div>
    </div>
    <Ricerca />
    </>
  )
}
 

function Ricerca(){
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  const titleRef = useRef(null);
  const navigate = useNavigate();

  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
     try {
      const response = await axios.get(`${url}${searchTerm}`);
      console.log(response.data); // Aggiungi questo log per vedere l'oggetto che contiene i drink
      setResults(response.data.drinks || []);
      setResultsCount(response.data.drinks ? response.data.drinks.length : 0);
    } catch (error) {
      console.error('Errore durante il recupero dei dati:', error);
      setResults([]);
      setResultsCount(0);
    }
  }; 
  

  // effetto sul titolo della ricerca
  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          titleRef.current.classList.add('animate__animated', 'animate__backInLeft');
        } else {
          titleRef.current.classList.remove('animate__animated', 'animate__backInLeft');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  
return (
  
  <>
  <div className='container my-4 z-2'>
      <form onSubmit={handleSubmit}>
        <div className='row align-items-center'>
          <div className='col-12 col-md-4'>
            <h2 ref={titleRef} id='title-effect'  className='text-center text-md-start'>Cerca il tuo Drink</h2>
          </div>
          <div className='col-12 col-md-6 d-flex align-items-center'>
            <input
              type='text'
              className='form-control me-2'
              placeholder='Cerca...'
              value={searchTerm}
              onChange={handleSearch}
            />
            <button type='submit' className='btn btn-outline-secondary'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className='col-12 col-md-2 text-center text-md-end mt-2 mt-md-0'>
            <p>Risultati: {resultsCount}</p>
          </div>
        </div>
      </form>
      <div className='row mt-4'>
        {results.map((drink) => (
          <div key={drink.idDrink} className='col-12 col-md-6 col-lg-4 mb-3'>
            <div className='card'>
              <div className='card-body mx-auto' style ={{height:'400px'}}>
              
                <img src={drink.strDrinkThumb} alt={drink.strDrink} className='img-fluid ' style ={{height:'300px'}}  />
              </div>
              <div className='card-footer d-flex justify-content-between   align-items-center'>
                <h5 className='text-center mb-0'>{drink.strDrink}</h5>
                <button className='btn bizantino mt-2' onClick={() => navigate(`/ricetta/${drink.idDrink}`)}>Ricetta</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
  
        
  
}
export default Home
export { Ricerca };