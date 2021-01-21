import axios from "axios";

const url = "http://localhost:5000/";

export const addUser = (data) => axios.post(url, data);
