import axios from "axios";

const blogfech = axios.create({
    baseURL: "https://vituflix.onrender.com/",
    headers:{
        "Content-Type": "application/json",
    },
});

export default blogfech;