//requires
import './styles.css';
import API_KEY from './api_key'
import renderEtiqueta from './Etiqueta'
//constantes

const ENTRY_POINT = 'http://api.openweathermap.org/data/2.5/'

const ciudad = document.querySelector('.search__input').value

async function search() {
  const container = document.querySelector('.content')
  // obtengo el input de busqueda
  const ciudad = document.querySelector('.search__input').value
  // opcional -> obtengo el ID correspondiente a esa ciudad
  // obtengo la información de la API
  const response = await fetch (`${ENTRY_POINT}weather?q=${ciudad}&appid=${API_KEY}`)
  const data = await response.json()
  console.log(data)

  // con la información de la API renderizo la etiqueta de clima
  const etiqueta = await renderEtiqueta(data)
  // pego la información de la etiqueta en el contenido.
  container.innerHTML = etiqueta
}
