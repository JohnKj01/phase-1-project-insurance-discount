let form=document.getElementById('githu-form');
//connecting html form to js
const vehicleModel= search.split('').join('')
//declaring vehicleModel as an object
form.addEventListener("submit",function(e){
    e.preventDefault()
    var search=document.getElementById("search").value
    alert(vehicleModel)
    //making the form responsive
})
li.innerHTML=`<li>${vehicleModel[i].login}</li><p>${vehicleModel[i].HTML_url}</p>/>`;
vehicleList.appendChild(li)
//appending the search results to html
li.addEventListener("click",()=>{
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`)
    //fetching users from github
    .then(response=>response.json)
    //specifying the results to be json
    .then(repos=>
        console.log(repos))
        for (let i=0;i<repos.length;i++){
        const reposList=document.querrySelector("#repos-list")
        //iteration through the json list
        const ripleli=document.create ('li')
        ripleli.innnerHTML=`${riple[i].vehicleModel}`
        reposList.appendChild(ripleLi)
        }    
}
)
