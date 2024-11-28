import React from "react";
import instance from ".";


async function getUsers() {
    const response = await instance.get('/mini-project/api/auth/users');
    console.log(response);
    return response;
}


export default { getUsers };