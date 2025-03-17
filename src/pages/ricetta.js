import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function Ricetta() {
  const { id } = useParams();// id è il parametro che passiamo nell'url
  const [drink, setDrink] = useState(null);
  const navigate = useNavigate()
  

  useEffect(() => {
    const fetchDrink = async () => {
      try {
        const response = await axios.get(`${url}${id}`);
        setDrink(response.data.drinks[0]);
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchDrink();
  }, [id]);

  if (!drink) {
    return <div>Caricamento...</div>;
  }

  

  return (
    <div className='container my-5 '>
    <div className='row d-flex justify-content-center align-items-center mb-5 gap-3 mb-2'>
      <div className='col-12'>
        <button  className='btn text-light rounded-pill p-2' style={{ backgroundColor: '#b5179e' }} onClick={() => navigate("/")}>Indietro</button>
      </div>
    </div>
    <div className='row mt-4 d-flex justify-content-center align-items-center gap-3'>
      <div className='col-lg-5 col-12'>
        <h2 className='text-center'>{drink.strDrink}</h2>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} className='img-fluid mx-auto d-block' style={{ maxHeight: '500px' }} />
      </div>
      <div className='col-lg-3 col-12 bg-body-secondary text-center'>
        <h4 className='mt-4'>Ingredienti</h4>
        <ul>
          {Object.keys(drink)
            .filter(key => key.startsWith('strIngredient') && drink[key])
            .map(key => (
              <li key={key}>{drink[key]}</li>
            ))}
        </ul>
      </div>
      <div className='col-lg-3 col-12 bg-body-secondary text-center'>
        <h4 className='mt-4'>Istruzioni</h4>
        <p>{drink.strInstructions}</p>
      </div>
    </div>
  </div>
  );
}

export default Ricetta;