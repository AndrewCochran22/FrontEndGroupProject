// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://api.weatherbit.io/v2.0/current?postal_code=77002&key=cf485dfd00024155bafb165b6979663b&units=I')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//         displayWeather(data.data[0].temp, data.data[0].weather.icon, data.data[0].weather.description);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// });

const weatherContainer = document.querySelector('.weather-container');

function displayWeather(temp, icon, description) {
    const currentTemp = document.createElement('div');
    const tempIcon = document.createElement('img');
    const weatherDescription = document.createElement('div');
    tempIcon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${icon}.png`)
    tempIcon.setAttribute("width", 50)
    currentTemp.setAttribute('class', 'current-temp');
    currentTemp.innerHTML = temp + "°F";
    weatherDescription.innerHTML = description;
    weatherContainer.innerHTML = '';
    weatherContainer.append(tempIcon);
    weatherContainer.append(currentTemp);
    weatherContainer.append(weatherDescription);
}


// DOG CEO EXAMPLE:

    // function replaceImage(imageUrl) {
    //     const dogImg = document.createElement("img");
    //     dogImg.setAttribute("src", imageUrl);
    //     dogImg.setAttribute("width", 300);
    //     const dogContainer = document.querySelector("#dogContainer")
    //     dogContainer.innerHTML = "";
    //     dogContainer.append(dogImg);
    // }
    
    // const dogButton = document.getElementById('dogButton')
    
    // dogButton.addEventListener('click', () => {
    //     const oldText = dogButton.innerText
    //     dogButton.innerText = "Generating Doggo..."
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         replaceImage(data.message)
    //         dogButton.innerText = oldText
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // })
    
    // const select = document.getElementById('dogSelect')
    
    
    // fetch("https://dog.ceo/api/breeds/list")
    // .then((res) => res.json())
    // .then((data) => {
        
    //     for (let i = 0; i < data.message.length; i++) {
    //         const name = data.message[i];
    //         const option = document.createElement('option')
    //         option.innerText = name;
    //         select.append(option);
    //     }
    // })
    
    // select.addEventListener('change', () => {
    //     console.log(select.value)
    //     const oldText = dogButton.innerText
    //     fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         replaceImage(data.message)
    //     })
    // })

