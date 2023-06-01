import axios from "axios"

export const complete = async (schedule_check, category, filename) => {
    try{
        const filePath = `${schedule_check}+${category}+${filename}.txt`;
        const url = `http://localhost:8000/task/${filePath}/complete`;
        const { data } = await axios.post(url);
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
