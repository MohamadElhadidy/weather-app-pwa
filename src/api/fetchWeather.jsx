import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '825de29ad352899c55cac9b0f2b390fe';

export const fetchWeather = async (query) =>{
     const {data} =await axios.get(URL,{
          params:{
               q:query,
               units:'metric',
               APPID: API_KEY
          }
     })
     return data
}
