const api_key = `79caba000403a8d1bb274a2e65b2a799`;

const loadTemperatures = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayTemperatures(data)
}

const displayTemperatures = data => {
    // console.log(temp)
    // const temperature = document.getElementById('temperature')
    // temperature.innerText = data.main.temp
    // const condition = document.getElementById('condition');
    // condition.innerText = data.weather[0].main;

    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const getTemperature = document.getElementById(id)
    getTemperature.innerText = text
}

const displayShort = () => {
    const input = document.getElementById('input-field');
    const text = input.value;
    input.value = '';
    loadTemperatures(text)
    const city = document.getElementById('city-name')
    city.innerText = text;
    city.style.textTransform = 'capitalize';
}

document.getElementById('input-field').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        displayShort()
    }
})

document.getElementById('btn-src').addEventListener('click', function () {
    displayShort()
})




// loadTemperatures('rajshahi')











// const networkTab = city => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

