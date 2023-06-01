import axios from "axios"

export const login = async (username, password) => {
    try{
        const { data } = await axios.post("http://localhost:8000/login", {
                    id: username
                    });
        console.log(data);
    }catch(error){
        console.log(error);
    }
}