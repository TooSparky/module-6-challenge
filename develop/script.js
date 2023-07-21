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

// API CALLBACK LINK
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


// Adjusts the search links
function apiCall() {

}

// On search, calls apiCall function
searchBtn.on('click', apiCall);

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
