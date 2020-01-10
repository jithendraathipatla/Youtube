import axios from 'axios';

const KEY = 'AIzaSyCEzIBjVr1Wilok_NJbAC9UPOaPbHiASMY';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

})

