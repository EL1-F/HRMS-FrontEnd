import axios from "axios"

export default class JobPositionService{

    getJobPosition(){
        return axios.get("http://localhost:8081/api/job_positions/getall") 
    }

    getJobPositionDetailsById(id ){

        return axios.get("http://localhost:8081/api/job_positions/getJobPositionDetailsById?id="+ id)
    }

    addJobPosting(values){
        return axios.post("http://localhost:8081/api/job_positions/add",values)
    }
}