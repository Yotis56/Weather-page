//requires
import './styles.css';
import renderEtiqueta from './Etiqueta'
const API_KEY = require('./api_key.js').API_KEY || process.env.API_KEY
//constantes

const ENTRY_POINT = 'https://api.openweathermap.org/data/2.5/'

const container = document.querySelector('.content')


async function search(event) {
  event.preventDefault()
  // obtengo el input de busqueda
  const ciudad = document.querySelector('.search__input').value
  console.log(API_KEY)
  // opcional -> obtengo el ID correspondiente a esa ciudad
  // obtengo la información de la API
  try {
    const URL = `${ENTRY_POINT}weather?q=${ciudad}&units=metric&lang=es&appid=${API_KEY}`
    console.log(URL)
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    const etiqueta = renderEtiqueta(data)
    container.innerHTML = etiqueta
  } catch (error){
    console.error('Fetch Error', error)
  }

  // con la información de la API renderizo la etiqueta de clima
  // pego la información de la etiqueta en el contenido.
}

document.querySelector('.search__button').addEventListener('click', search)