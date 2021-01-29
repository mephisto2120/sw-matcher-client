import axios from "axios";

export class SuperApi {
    static getApi = async () => {
        try {
            // /person/get?customerId=987
            //http://localhost:8080/person?
            const result = await axios.get('http://localhost:8080/person/get?customerId=987');
            return result.data;
        } catch (e) {
            throw e;
        }
    }
}