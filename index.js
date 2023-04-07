const vehicleAPI =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";
const submitButton = document.getElementById("submitbutton");
const clientCarEl = document.getElementById("search-vehicle");
var div = document.getElementById("client-car");

//submit event
function handleFormSubmit(event) {
  event.preventDefault();
  const inputValue = clientCarEl.value.toUpperCase();
  handleFilter(inputValue);
}

//activating submit button
submitButton.addEventListener("click", handleFormSubmit);

function handleFilter(inputValue) {
  //fetching vehicle api from the web link
  fetch(vehicleAPI)
    //specifying that the type of data required, json
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      //extract results data to a variable
      const result = data.Results;
      //searching for the user vehicle model along the array
      for (var i = 0; i < result.length; i++) {
        //picking the input vehicle model metadata from the array
        if (result[i].MakeName == inputValue) {
          renderFilteredItem(result[i]);
        }
      }
    });
}

function renderFilteredItem(item) {;
  div.innerHTML = `<p>Congratulations! Discounted insurance cover is vailable for your car<br>
  Discount=25%
  Make Id:${item.MakeId}<br>Make Name:${item.MakeName}<br>
  Vehicle Type Id:${item.VehicleTypeId}<br>
  Vehicle Type Name:${item.VehicleTypeName}</p>`;
}
