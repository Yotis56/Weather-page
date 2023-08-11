//requires
import './styles.css';
import {API_KEY} from './api_key'
import renderEtiqueta from './Etiqueta'
//constantes

const ENTRY_POINT = 'https://api.openweathermap.org/data/2.5/'

const container = document.querySelector('.content')


async function search(event) {
  event.preventDefault()
  // obtengo el input de busqueda
  const ciudad = document.querySelector('.search__input').value
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