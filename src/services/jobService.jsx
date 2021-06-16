import axios from 'axios';

export default class JobService{

    getJob(){

        return axios.get("http://localhost:8081/api/jobs/getall");
    }
}