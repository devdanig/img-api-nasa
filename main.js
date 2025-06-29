const API_KEY = 'nDBYkod6BtZONrkEmYH9sdsDaElt7IMswk6rGJmL'
const API_URL_POD = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=3`;
const API_DATE = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=`;

function obtenerFechaActual(){
    const today = new Date()
    today.setDate(today.getDate()) // Restar 1 día
    return today.toISOString().split('T')[0] // Formato YYYY-MM-DD
}


async function pod() {
    const response = await fetch(API_URL_POD)
    const data = await response.json()
    console.log(data)

    const date1 = document.getElementById('date1')
    const date2 = document.getElementById('date2')
    const date3 = document.getElementById('date3')

    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')
    const img3 = document.getElementById('img3')

    const title1 = document.getElementById('title1')
    const title2 = document.getElementById('title2')
    const title3 = document.getElementById('title3')

    title1.innerHTML = data[0].title
    title2.innerHTML = data[1].title
    title3.innerHTML = data[2].title

    date1.innerHTML = data[0].date
    date2.innerHTML = data[1].date
    date3.innerHTML = data[2].date

    img1.src = data[0].url
    img2.src = data[1].url
    img3.src = data[2].url
}


async function datePod(){
    const inputDate = document.getElementById('fecha').value;
    const response = await fetch(API_DATE + inputDate)
    const data = await response.json()
    if(response.status !== 200) {
        alert('Error: ' + data.msg);
        console.error('response.status', response);
        return;
    }
    imgDate.src = data.url
    titleDate.innerHTML = data.title
    dateDate.innerHTML = data.date
}

function init() {
    document.getElementById('fecha').value = obtenerFechaActual();
    pod();
    datePod();
}

init()