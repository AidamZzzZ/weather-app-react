import axios from "axios";

const getcity = (url, city) => {
    const response = axios.get(`${url}${city}`).then(response => response.data)
    return response
}

export default { getcity }