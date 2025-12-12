import Axios from "axios";
import { appConfig } from "../configs/app.config";

const axios = Axios.create({
  baseURL: appConfig.APP_URL + "/api",
  withCredentials: true,
});

export default axios;
