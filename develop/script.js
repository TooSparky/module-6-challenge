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
var cityQueContainer = $('#recently-searched-container');
var form = $('#form');
var searchInputVal = $('#search-bar');
var currentDay = $('#current-day');
var icon = $('.icon');
var currentTime = dayjs().format('M/D/YYYY');

//dayOne
var temperatureOne = $('.temp-1');
var windOne = $('.wind-1');
var humidityOne = $('.humidity-1');
var dateOne = $('.date-1');
var iconOne = $('.icon-1');

//dayTwo
var temperatureTwo = $('.temp-2');
var windTwo = $('.wind-2');
var humidityTwo = $('.humidity-2');
var dateTwo = $('.date-2');
var iconTwo = $('.icon-2');

//dayThree
var temperatureThree = $('.temp-3');
var windThree = $('.wind-3');
var humidityThree = $('.humidity-3');
var dateThree = $('.date-3');
var iconThree = $('.icon-3');

//dayFour
var temperatureFour = $('.temp-4');
var windFour = $('.wind-4');
var humidityFour = $('.humidity-4');
var dateFour = $('.date-4');
var iconFour = $('.icon-4');

//dayFive
var temperatureFive = $('.temp-5');
var windFive = $('.wind-5');
var humidityFive = $('.humidity-5');
var dateFive = $('.date-5');
var iconFive = $('.icon-5');

// On search, calls apiCall function
searchBtn.on('click', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    $('#wicon').removeClass('hide');
    $('#wicon-1').removeClass('hide');
    $('#wicon-2').removeClass('hide');
    $('#wicon-3').removeClass('hide');
    $('#wicon-4').removeClass('hide');
    $('#wicon-5').removeClass('hide');

    // Searchbar Value
    var searchInputVal = $('#search-bar').val().trim();

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    setSearchHistory(searchInputVal);
    apiSearch(searchInputVal);
    setUpDates(searchInputVal)
}

// Adjusts the search links
function apiSearch(searchInputVal) {

    var latAndLonLink = `https://api.openweathermap.org/geo/1.0/direct?q=&limit=1&appid=60211b1fb1aaf71717286d520f6cfd4c`;

    if (searchInputVal) {
        latAndLonLink = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInputVal}&limit=1&appid=60211b1fb1aaf71717286d520f6cfd4c`;
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

            // Gets latitude and longitude
            var latValue = data[0].lat;
            var lonValue = data[0].lon;

            function weatherSearchApi(latValue, lonValue) {
                
                if(latValue && lonValue) {
                    var weatherLink = `https://api.openweathermap.org/data/2.5/forecast?lat=${latValue}&lon=${lonValue}&appid=60211b1fb1aaf71717286d520f6cfd4c`;
                }

                fetch(weatherLink)
                .then(function (response) {
                    if(!response.ok) {
                        return Promise.reject(Error('Response is bad!'));
                    }
                    return response.json();
                })
                .then(function (data) {
                    // Gets weather data
                    console.log(data);

                    // current day
                    // Wind Data
                    var windData = data.list[0].wind.gust;
                    wind.text('Wind: ' + windData + ' MPH');

                    // Humidity Data
                    var humidityData = data.list[0].main.humidity;
                    humidity.text('Humidity: ' + humidityData + '%');

                    // Temperature Data and converstion
                    var tempData = data.list[0].main.temp;
                    tempData = (tempData - 273.15) * 1.8 + 32;
                    tempData = tempData.toFixed(0);
                    temperature.text('Temp: ' + tempData + ' F');

                    // Icon Data
                    var iconData = data.list[0].weather[0].icon;
                    icon.text(iconData);
                    var iconUrl = 'http://openweathermap.org/img/w/' + iconData + '.png';
                    $('#wicon').attr('src', iconUrl);

                    //dayOne
                    var windData = data.list[2].wind.gust;
                    windOne.text('Wind: ' + windData + ' MPH');

                    var humidityData = data.list[2].main.humidity;
                    humidityOne.text('Humidity: ' + humidityData + '%');

                    var tempData = data.list[2].main.temp;
                    tempData = (tempData - 273.15) * 1.8 + 32;
                    tempData = tempData.toFixed(0);
                    temperatureOne.text('Temp: ' + tempData + ' F');

                    var iconData = data.list[2].weather[0].icon;
                    iconOne.text(iconData);
                    var iconUrl = 'http://openweathermap.org/img/w/' + iconData + '.png';
                    $('#wicon-1').attr('src', iconUrl);

                    var dates = data.list[2].dt_txt;
                    dateOne.text(dates);

                    //dayTwo
                    var windData = data.list[10].wind.gust;
                    windTwo.text('Wind: ' + windData + ' MPH');

                    var humidityData = data.list[10].main.humidity;
                    humidityTwo.text('Humidity: ' + humidityData + '%');

                    var tempData = data.list[10].main.temp;
                    tempData = (tempData - 273.15) * 1.8 + 32;
                    tempData = tempData.toFixed(0);
                    temperatureTwo.text('Temp: ' + tempData + ' F');

                    var iconData = data.list[10].weather[0].icon;
                    iconTwo.text(iconData);
                    var iconUrl = 'http://openweathermap.org/img/w/' + iconData + '.png';
                    $('#wicon-2').attr('src', iconUrl);

                    var dates = data.list[10].dt_txt;
                    dateTwo.text(dates);

                    //dayThree
                    var windData = data.list[18].wind.gust;
                    windThree.text('Wind: ' + windData + ' MPH');

                    var humidityData = data.list[18].main.humidity;
                    humidityThree.text('Humidity: ' + humidityData + '%');

                    var tempData = data.list[18].main.temp;
                    tempData = (tempData - 273.15) * 1.8 + 32;
                    tempData = tempData.toFixed(0);
                    temperatureThree.text('Temp: ' + tempData + ' F');

                    var iconData = data.list[18].weather[0].icon;
                    iconThree.text(iconData);
                    var iconUrl = 'http://openweathermap.org/img/w/' + iconData + '.png';
                    $('#wicon-3').attr('src', iconUrl);

                    var dates = data.list[18].dt_txt;
                    dateThree.text(dates);

                    //dayFour
                    var windData = data.list[26].wind.gust;
                    windFour.text('Wind: ' + windData + ' MPH');

                    var humidityData = data.list[26].main.humidity;
                    humidityFour.text('Humidity: ' + humidityData + '%');

                    var tempData = data.list[26].main.temp;
                    tempData = (tempData - 273.15) * 1.8 + 32;
                    tempData = tempData.toFixed(0);
                    temperatureFour.text('Temp: ' + tempData + ' F');

                    var iconData = data.list[26].weather[0].icon;
                    iconFour.text(iconData);
                    var iconUrl = 'http://openweathermap.org/img/w/' + iconData + '.png';
                    $('#wicon-4').attr('src', iconUrl);

                    var dates = data.list[26].dt_txt;
                    dateFour.text(dates);

                    //dayFive
                    var windData = data.list[34].wind.gust;
                    windFive.text('Wind: ' + windData + ' MPH');

                    var humidityData = data.list[34].main.humidity;
                    humidityFive.text('Humidity: ' + humidityData + '%');

                    var tempData = data.list[34].main.temp;
                    tempData = (tempData - 273.15) * 1.8 + 32;
                    tempData = tempData.toFixed(0);
                    temperatureFive.text('Temp: ' + tempData + ' F');

                    var iconData = data.list[34].weather[0].icon;
                    iconFive.text(iconData);
                    var iconUrl = 'http://openweathermap.org/img/w/' + iconData + '.png';
                    $('#wicon-5').attr('src', iconUrl);

                    var dates = data.list[34].dt_txt;
                    dateFive.text(dates);
                    
                })
                .catch(function (error) {
                    console.log(error);
                })
    
            }
            weatherSearchApi(latValue, lonValue);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Sets up current date
function setUpDates(searchInputVal) {
    var dateAndSearch = searchInputVal + ' ' + currentTime;

    citySearched.text(dateAndSearch);
}

// Sets search input into local storage
function setSearchHistory(searchInputVal) {
    cityQue.removeClass('hide');

    localStorage.setItem("searchInputVal", JSON.stringify(searchInputVal));

    getSearchHistory();
}

// Gets search input from local storage
function getSearchHistory() {
    var lastCity = JSON.parse(localStorage.getItem('searchInputVal'));

    cityQue.text(lastCity);

    if (!lastCity) {
        return;
    }
}
