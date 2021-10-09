import axios from "axios";

const NUMBER_API_BASE_URL = "http://localhost:8080/api/numbers"

class NumberService {
    getNumbers(){
        return axios.get(NUMBER_API_BASE_URL)
    }
}

export default new NumberService();