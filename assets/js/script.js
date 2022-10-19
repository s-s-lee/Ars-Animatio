const searchInput = document.getElementById("")
const searchBtn = document.getElementById("")
const history = document.getElementById("")
const clearHistory = document.getElementById("")
let searchHistory = JSON.parse(localStorage.getItem("search")) || []

fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
//Giphy apiKey
  const apiKey1 = '3aOkUhqhHeSCKZu7WjMvBl1hPZu2xPSH'
//wallhaven apiKey
  const apiKey2 = 'kDzUKzeCUb16O7WleQ9GG7GUMXkVOii0'

  // for loop setup for API call 1 
  for (i = 0; i <= 3; i++){
    //creates containers for gif outputs
const gifContainer = document.createElement("")
  }


  //for loop setup for API call 2
  for (i = 0; i <= 3; i++){
  //creates containers for wallpaper outputs
    const WallpaperContainer = document.createElement("")
  }

    //creates and appends search history
    function renderSearchHistory() {
      history.innerHTML = ""
      for (let i = 0; i < searchHistory.length; i++) {
          const historyEl = document.createElement("input");
          historyEl.setAttribute("type", "text");
          historyEl.setAttribute("readonly", true);
          historyEl.setAttribute("value", searchHistory[i]);
          historyEl.setAttribute("class", "bg-secondary rounded text-light mt-3 mb-3")
          historyEl.addEventListener("click", function () {
             placeholder(historyEl.value);
          })
          history.append(historyEl);
      }
  }
  //clears history on click
  clearHist.addEventListener("click", function(){
      searchHistory = [];
      renderSearchHistory()
  })