import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export const apiAdonis = axios.create({
  baseURL: 'http://localhost:3333'
})
