import axios from 'axios';

export default class EmployerService{

    getEmployer(){
        return axios.get("http://localhost:8081/api/employer/getall")
    }
}