import "./we.css";
import {safeWeather} from "./we.js";
import {submit , city,cityName,cityTemp, container} from "./elements.js";


// listener for the button or on click
submit.addEventListener("click", async(e)=>{
  e.preventDefault();
  let loc = city.value.trim();
  let data= await fetchData(loc);
  render(data);
});

async function fetchData(loc){
  let data = await safeWeather(loc);
  return data
};


//render the result 
function render(data) {
  try{
    cityName.innerText = data.resolvedAddress;
    cityTemp.innerText =data.currentConditions.temp;
  } catch{
    console.error(err);
  }
};
