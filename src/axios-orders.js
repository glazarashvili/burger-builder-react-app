import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-2ef41-default-rtdb.firebaseio.com/'    
})

export default instance