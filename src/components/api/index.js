import axios from "axios";

const url = "http://localhost:5003/users/addUsers";

export const addUser = (data) => axios.post(url, data);
