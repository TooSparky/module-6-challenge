// Global Variables
var headerDiv = $('.header-container');
var header = $('#header');
var temperature = $('.temp');
var wind = $('.wind');
var humidity = $('.humidity');
var date = $('.date');
var citySearched = $('#searched-city');
var searchBar = $('#search-bar');
var searchBtn = $('#search-btn');
var cityQue = $('#recently-searched-city');
var form = $('#form');
var searchInputVal = $('#search-bar');
var currentDay = $('#current-day');

// API CALLBACK LINK
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


function handleFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = $('#search-bar').val().trim();

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    apiSearch(searchInputVal);
}

// Adjusts the search links
function apiSearch(searchInputVal) {

    var latAndLonLink = `http://api.openweathermap.org/geo/1.0/direct?q=&limit=1&appid=60211b1fb1aaf71717286d520f6cfd4c`;
    
    if (searchInputVal) {
        latAndLonLink = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInputVal}&limit=1&appid=60211b1fb1aaf71717286d520f6cfd4c`;
    }
    
    fetch(latAndLonLink)
        .then(function (response) {
            if(!response.ok) {
                return Promise.reject(Error('Response is bad!'));
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var latValue = data[0].lat;
            var lonValue = data[0].lon;

            weatherLink = `api.openweathermap.org/data/2.5/forecast?lat=${latValue}&lon=${lonValue}&appid=60211b1fb1aaf71717286d520f6cfd4c`;
            console.log(weatherLink);

            // weatherLink WORKS ABOVE, BUT NOT BELOW THIS LINE

            
        })
        .catch(function (error) {
            console.log(error);
        });

        weatherSearchApi();
}

// function weatherSearchApi() {

//     var weatherLink = `api.openweathermap.org/data/2.5/forecast?lat=&lon=&appid=60211b1fb1aaf71717286d520f6cfd4c`;

//     var latValue = '33.7489924';
//     var lonValue = '-84.3902644';

//     if(weatherLink) {
//         weatherLink = `api.openweathermap.org/data/2.5/forecast?lat=${latValue}&lon=${lonValue}&appid=60211b1fb1aaf71717286d520f6cfd4c`;
//     }

//     fetch(weatherLink)
//         .then(function (response) {
//             if(!response.ok) {
//                 return Promise.reject(Error('Response is bad!'));
//             }
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });


// }

// API KEY
// 60211b1fb1aaf71717286d520f6cfd4c

// On search, calls apiCall function
searchBtn.on('click', handleFormSubmit);

function searchHistory() {
    
}



// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
