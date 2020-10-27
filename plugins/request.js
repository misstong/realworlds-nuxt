import axios from 'axios'



export const request = axios.create({
    baseURL: 'https://conduit.productionready.io/api'
})

export default (context) => {
    // Add a request interceptor
    request.interceptors.request.use(function (config) {
        // Do something before request is sent

        const {store} = context
        const { user} = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        // console.log(context)
        // console.log('config', config)
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
   
  }



// export default request