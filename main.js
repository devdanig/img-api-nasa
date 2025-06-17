const URL = 'https://api.nasa.gov/planetary/apod?api_key=nDBYkod6BtZONrkEmYH9sdsDaElt7IMswk6rGJmL&count=1';

async function pod() {
    const respuesta = await fetch(URL);
    const data = await respuesta.json();
    const img = document.querySelector('img');
    const title = document.querySelector('h2');
    const date = document.getElementById('date');
    img.src = data[0].url;
    title.textContent = data[0].title;
    date.textContent = data[0].date;
}
pod()
const btn = document.querySelector('button');
btn.addEventListener('click', pod);