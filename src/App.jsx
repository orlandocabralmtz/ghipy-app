/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([]) // para guardar los gifs
  const APIKEY = import.meta.env.VITE_APIKEY // para acceder a las variables de entorno

  // las llamadass a apis se hacen en el useEffect
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25&rating=g`)
      .then(res => res.json())
      .then(results => {
        const { data } = results // data es un valor desestructurado de results quien es el que trae los datos de la consulta a la api
        setGifs(data)
      }).catch(err => console.log(err))
  }, [])
  // el [] para que se ejecute una sola vez cuando se renderiza el componente. El useEffect se ejecuta cada vez que se renderiza el componente
  return (
    <>
      <div>
        <h1>Giphy app</h1>
      </div>
    </>
  )
}

export default App
