import React from 'react'
import Footer from './Footer'
import instance from '../API';
import { useQuery } from '@tanstack/react-query';
import Nav from './Nav';
import '../style.css'

export async function getMyInfo() {
    const response = await instance.get('/mini-project/api/auth/me');
    console.log(response.data);
    return response.data;
}


const Profile = () => {

    const { data, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ['userInfo'],
        queryFn: getMyInfo,
    });
    return (
        <div >
            <Nav />
            <div className='profile-div'>
                <img src={data?.image}></img>
                <h3>{data?.username}</h3>
                <p>Balance: {data?.balance}</p>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;
