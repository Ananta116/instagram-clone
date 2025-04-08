import axios from "axios";

const Base_URL = "http://localhost:8000/api";

export default axios.create({
  baseURL: Base_URL,
});
