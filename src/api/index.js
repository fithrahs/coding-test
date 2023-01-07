import axios from "axios";

const baseURL = "https://talent-workspace.kitani.co:8443";

const api = axios.create({
  baseURL,
  headers: {
    "X-API-Key": localStorage.getItem("token"),
  },
});

const tokenApi = axios.create({
  baseURL,
});

export { api, tokenApi };

