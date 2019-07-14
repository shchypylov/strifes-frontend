import axios, { AxiosInstance } from 'axios';

class Axios {
    prefix: string;
    axios: AxiosInstance
    constructor() {
        this.prefix = 'http://localhost:3000'
        this.axios = axios.create({
            baseURL: this.prefix
        })
    }

    get(url, config = {}) {
        return this.axios.get(url, config)
    }
}

export default new Axios()