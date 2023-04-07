const vehicleAPI =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";
const submitButton = document.getElementById("submitbutton");
const clientCarEl = document.getElementById("search-vehicle");

//submit event
function handleFormSubmit(event) {
  event.preventDefault();
  const inputValue = clientCarEl.value;
  handleFilter(inputValue);
}
//activating submit button
submitButton.addEventListener("click", handleFormSubmit);

function handleFilter(inputValue) {
  //fetching vehicle api from the web link
  fetch(vehicleAPI)
  //specifying that the result should be json
    .then((res) => res.json())
    .then((data) => {
      //extract results data to a variable
      const result = data.Results;

        //searching the user input along the fetch result
      for (var i = 0; i < result.length; i++) {
        if (result[i].MakeName == inputValue) {
          renderFilteredItem(result[i]);
        }
      }
    });
}

function renderFilteredItem(item) {
  console.log(item);
}
