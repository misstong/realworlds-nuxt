import axios from 'axios'



const request = axios.create({
    baseURL: 'https://conduit.productionready.io/api'
})


// Add a request interceptor
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


export default request