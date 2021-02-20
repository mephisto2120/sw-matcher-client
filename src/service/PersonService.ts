import axios from "axios";

export class PersonService {
    static get = async () => {
        try {
            const result = await axios.get('http://localhost:8080/person/get?customerId=987');
            return result.data;
        } catch (e) {
            throw e;
        }
    }
}
