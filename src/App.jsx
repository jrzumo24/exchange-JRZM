import { useState, useEffect } from 'react'
import axios from 'axios'

const App =()=> {
  const [value, setValue] = useState('')
  const [rates, setRates] = useState({})
  const [moneda, setCountry] = useState(null)
  const [ciudad, setCity] = useState(null)

  const handleChange = (event) =>{
    setValue(event.target.value)
    console.log('change', value);
    
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setCountry('submit',country);
    setCity('submit',city);
  }

  useEffect(()=> {
  console.log('Efecto activado, el pais es',country);
  if (country){
    axios
    .get(`https://countriesnow.space/api/v0.1/${countries}`)
    .then(response => {
      setRates(response.data.conversion_rates)
    })
  }
  }, [country])

  useEffect(()=> {
  console.log('Efecto activado, el ciudad es',city);
  if (country){
    axios
    .get(`https://countriesnow.space/api/v0.1/${city}`)
    .then(response => {
      setRates(response.data.conversion_rates)
    })
  }
  }, [city])

  useEffect(()=> {
  console.log('Efecto activado, el poblacion es',country);
  if (country){
    axios
    .get(`https://countriesnow.space/api/v0.1/${poblacion}`)
    .then(response => {
      setRates(response.data.conversion_rates)
    })
  }
  }, [poblacion])

  

  return(
    <div>
      <h1>JRZM</h1>
      <h2>Paises</h2>
      <form onSubmit={onSubmit}>
        country: <input value={value} onChange={handleChange} />
        <button type='submit'>Buscar pais</button>
      </form>
      <form onSubmit={onSubmit}>
        city: <input value={value} onChange={handleChange} />
        <button type='submit'>Buscar cuidad</button>
      </form>
      <pre>
      {JSON.stringify(rates, null, 2)}
      </pre>
    </div>
  )

}



export default App
