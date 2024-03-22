import axios from "axios";
const URL = process.env.REACT_APP_BASE_API_URL

export async function fetchWeatherData(latitude, longitude){
  try{
    const response = await axios.get(`${URL}/weathers`, {params: {latitude: latitude, longitude: longitude}});
    return  response.data;
  }catch(error){
    console.log(error);
  }
}

export async function fetchCities(input){
  try {
    const response = await axios.get(`${URL}/cities`,{params: {query: input}});
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function fetchLocationData(){
  try{
    const response = await axios.get(`${URL}/locations`);
    return  response.data;
  }catch(error){
    console.log(error);
    return;
  }
}

export async function addLocation(data){
  try{
    const response = await axios.post(`${URL}/locations`, {...data});
    console.log("Add Location", response);
    return  response.data;
  }catch(error){
    console.log(error);
    return;
  }
}

export async function deleteLocation(id){
  try{
    const response = await axios.delete(`${URL}/locations/${id}`);
    return  response.data;
  }catch(error){
    console.log(error);
    return;
  }
}