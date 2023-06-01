import axios from "axios"

export const share = async (username, schedule_check, category, filename) => {
    try{
        const filePath = `${schedule_check}+${category}+${filename}.txt`;
        const url = `http://localhost:8000/task/share`;

        const requestData = {
            username: username,
            taskpath: filePath,
        };
      
        const response = await axios.post(url, requestData);
        console.log(response.data);
    }catch(error){
        console.log(error);
    }
}
