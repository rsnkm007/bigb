import axios from "axios";

const productApi = axios.create({

    baseURL: "http://localhost:5000/api"

});

export default productApi;