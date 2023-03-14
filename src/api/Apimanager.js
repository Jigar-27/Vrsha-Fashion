import axios from "axios";

const Apimanager = axios.create({
    baseURL:"http://localhost/jigar/select.php",
    responseType:'json',
    withCredentials:true,
});

export default Apimanager();