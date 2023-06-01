import axios from "axios";

const getTasks = async (name) => {
  try {
    console.log(name);
    const url = `http://localhost:8000/tasks/${name}`;
    const response = await axios.get(url);
    // 응답 데이터를 처리하는 로직을 추가하세요
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default getTasks;
