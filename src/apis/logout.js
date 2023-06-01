import axios from "axios"

export const logout = async (username, password) => {
    try{
        const { data } = await axios.post("http://localhost:8000/logout", {
                    id: username
                    });
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
