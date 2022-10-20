const searchInput = document.getElementById("")
const searchBtn = document.getElementById(".button")
const history = document.getElementById("")
const clearHistory = document.getElementById("")
const search_result = document.getElementById("");
let searchHistory = JSON.parse(localStorage.getItem("search")) || []

//Giphy apiKey
const apiKey1 = '3aOkUhqhHeSCKZu7WjMvBl1hPZu2xPSH'
//wallhaven apiKey
const apiKey2 = 'kDzUKzeCUb16O7WleQ9GG7GUMXkVOii0'

searchBtn.addEventListener('click', search);

function search() {
	fetch("http://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=3aOkUhqhHeSCKZu7WjMvBl1hPZu2xPSH&limit=3")
		.then(response => response.JSON())
		.then(data => {
			search_result.innerHTML = `<img src=${data.file} alt="wallpaper 1" />`
		}
    
    );
}



//search button functionality (API calls within eventListener to prevent calls from happening on search page)
searchBtn.addEventListener("click", function () {
  //brings user to results HTML page from index
  window.location.replace("results.html")


  // for loop setup for API call 1 
  for (i = 0; i < 3; i++) {
    //creates containers for gif outputs
    const gifContainer = document.createElement("")
  }


  //for loop setup for API call 2
  for (i = 0; i < 3; i++) {
    //creates containers for wallpaper outputs
    const WallpaperContainer = document.createElement("")
  }

})

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
clearHistory.addEventListener("click", function () {
  searchHistory = [];
  renderSearchHistory()
})