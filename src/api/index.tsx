import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    mode: 'no-cors'
  },
});
