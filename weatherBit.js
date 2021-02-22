// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://api.weatherbit.io/v2.0/current?postal_code=77002&key=cf485dfd00024155bafb165b6979663b&units=I')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.data[0].temp);
//         displayWeather(data.data[0].temp);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// });

const weatherContainer = document.querySelector('.weather-container');

function displayWeather(input) {
    const currentTemp = document.createElement('div');
    currentTemp.setAttribute('class', 'current-temp');
    currentTemp.innerHTML = input;
    weatherContainer.innerHTML = '';
    weatherContainer.append(currentTemp);
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

