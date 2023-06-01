import axios from "axios"

const create = async (type, date, title, content, username) => {
    try{
        const { data } = await axios.post("http://localhost:8000/task", {
                    type: type,
                    date: date,
                    title: title,
                    content: content,
                    username: username,
                    });
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
export default create;