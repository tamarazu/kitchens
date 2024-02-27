import axios from "axios";


console.log('masuk ke axios');
const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "X-RapidAPI-Key": "133299f2d3mshdfbb29e2920a1fcp12efedjsn4fafa7b878a0",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
});

console.log(Axios);

export default Axios;
