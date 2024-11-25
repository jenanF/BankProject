import instance from ".";
import { useState } from "react";



const Register = async (formData) => {
    // const [token, setToken] = useState(null);
    // const data = await instance.post("/mini-project/api/auth/register", formData);
    // setToken("token", data.token);
    // console.log("register data", data)
    // return data;

    const response = await instance.post("/mini-project/api/auth/register", formData);
    localStorage.setItem("token", response.data.token);  // Save token to local storage
    console.log("register data", response.data);
    return response.data;
};


const login = async (formData) => {
    const data = await instance.post("/mini-project/api/auth/login", formData);
    localStorage.setItem("token", data.data.token);
    console.log("login data", data)
    return data;
};

export { Register, login };