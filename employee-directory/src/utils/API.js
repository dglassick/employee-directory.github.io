import axios from "axios";

export default {
    randomEmployees : function (query) {
        return axios.get(
            "https://randomuser.me/api/?results=20&nat=us"
        )
    }
}