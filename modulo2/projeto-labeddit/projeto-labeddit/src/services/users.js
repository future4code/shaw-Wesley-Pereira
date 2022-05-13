import { BASE_URL } from '../constants/url';
import axios from 'axios';
import { goToPost } from '../routes/coordinator';


export  const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear()
      goToPost(navigate)
    })
     .catch((error) => {
       alert(error.response.data.message)
     })
  }


  export  const signup = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear()
      goToPost(navigate)
    })
     .catch((error) => {
       alert(error.response.data.message)
     })
  }