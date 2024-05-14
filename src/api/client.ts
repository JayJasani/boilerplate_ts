import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BACKEND;

export { baseURL };

const configuration = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": ["Origin", "Accept", "X-Requested-With", "Content-Type", "Authorization"]
    }
};
const client = axios.create({
    baseURL: baseURL,
    headers: configuration.headers
});

export default client;
