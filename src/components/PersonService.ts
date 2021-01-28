import Person from "../model/Person";
import HttpClient from "./HttpClientInterceptor";


class PersonService extends HttpClient {
    public constructor() {
        super('http://localhost:8080/person');
    }

    public getPerson = (customerId: bigint) => this.instance.get<Person>(`/get?customerId=${customerId}`);
}
export default PersonService
// /person/get?customerId=987