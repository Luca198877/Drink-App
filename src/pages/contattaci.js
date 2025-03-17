import React,{useState} from 'react'




function Contattaci() {
  const [showMessage, setShowMessage] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telephone: '',
    messaggio: ''
  });

  const toggleMessage = () => {
    setShowMessage(!showMessage);
    setShowForm(!showForm)
  }

  


  const handleSubmit = (e) => {
    e.preventDefault();
    const {nome,cognome,email,telephone,messaggio}=formData;
    if(!nome || !cognome || !email || !telephone || !messaggio){
      alert('Compilare tutti i campi');
      return
    }
    const data = {
      nome,
      cognome,
      email,
      telephone,
      messaggio
    }
    console.log(data);
    toggleMessage();
    
  }
// gestisce i cambiamenti degli input
  const handleInputChange = (e) => {
    const{name,value,type}=e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value) : value
    });
    
  }

  const resetForm = () => {
    setFormData({
      nome: '',
      cognome: '',
      email: '',
      telephone: '',
      messaggio: ''
    });
    setShowForm(true);
    setShowMessage(false);
  };

  return (
    <>
    {showForm && (
    <section className='col-9 mx-auto my-5'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center'>Vorresti aggiungere un cocktail?</h2>
          <h4 className='text-center text-secondary'>Il nostro team è sempre disponibile per valutare possibili nuove ricette ed ad aggiungerle al nostro database</h4>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-12'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='nome' className='form-label wiki'>NOME</label>
              <input type='text' className='form-control' id='nome' name='nome' value={formData.nome} onChange={handleInputChange} style={{border:'none',borderBottom:'1px solid'}} />
            </div>
            <div className='mb-3'>
              <label htmlFor='cognome' className='form-label wiki'>COGNOME</label>
              <input type='text' className='form-control' id='cognome'name='cognome' value ={formData.cognome} onChange={handleInputChange} style={{border:'none',borderBottom:'1px solid'}} />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label wiki'>EMAIL</label>
              <input type='email' className='form-control' id='email' name='email' value={formData.email} onChange={handleInputChange} style={{border:'none',borderBottom:'1px solid'}} />
            </div>
            <div className='mb-3'>
              <label htmlFor='telephone' className='form-label wiki'>TELEFONO</label>
              <input type='tel' className='form-control' id='telephone' name='telephone' value ={formData.telephone} onChange={handleInputChange}style={{border:'none',borderBottom:'1px solid'}} />
            </div>
            <div className='mb-3'>
              <label htmlFor='messaggio' className='form-label wiki'>MESSAGGIO</label>
              <textarea className='form-control' id='messaggio' name='messaggio' value={formData.messaggio} onChange={handleInputChange} rows='3' style={{border:'none',borderBottom:'1px solid'}}></textarea>
            </div>
            <button type='submit' className='btn bizantino piede d-flex mx-auto'>INVIA RICETTA</button>
          </form>
        </div>
      </div>
    </section>
    )}
    {showMessage && <Messaggio resetForm={resetForm} />}
    
    </>
  )
}

function Messaggio ({resetForm}){
  
  return (
  <div className='col-9 col-lg-5 mx-auto my-5 mt-5 vh-100' >
    <div className='row'>
      <div className='col-12'>
        <h2 className='text-center'>Grazie!</h2>
        <h4 className='text-center text-secondary'>Modulo inviato con successo</h4>
        <button className=' btn d-flex mx-auto bizantino' onClick={resetForm}>Torna all'applicazione</button>
      </div>
      <div className='col-lg-6 col-12 d-flex mx-auto align-items-center mt-5 mb-3
          ' style={{ position: 'relative', zIndex: 2 }}>
            <img className='mx-auto my-animation' src="/martini.png" alt="bicchiere" style={{width:'400px', height:'400px',background:'trasparent'}}></img>
     </div> 
    </div>
  </div>
  )
}

export default Contattaci
export {Messaggio}