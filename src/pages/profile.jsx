import React from 'react';
import axios from 'axios';
import Preview from '../components/preview';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../context/auth.context';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Profile = ({ allPosts, setAllPosts, setFilteredPosts }) => {
    const navigate = useNavigate()
    const { storeToken, user, setUser, authenticateUser, logOut } = useContext(AuthContext)
    const [usersPosts, setUsersPosts] = useState([])
    useEffect(() => {
        const getUsersPosts = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/posts/all`)
                if (res) {
                    const allPosts = res.data
                    const thisUsersPosts = allPosts.filter(p => p.owner === user._id)
                    setUsersPosts(thisUsersPosts)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getUsersPosts()
    }, [user])

    return (
        <div className='flex flex-col items-center p-5'>
            <div>
                {user && <img className='rounded-full h-36 w-36' src={user.profileImage} />}
            </div>
            <div>
                <p className='text-2xl'>Name</p>
                <p className='text-lg'>@</p>
            </div>
            <div className='flex'>
                <button className='p-2 rounded-full bg-slate-50'>Share</button>
                <button className='p-2 rounded-full bg-slate-50'>Edit Profile</button>
            </div>
            <div className='flex'>
                <button className='m-2'>Created</button>
                <button className='m-2'>Saved</button>
            </div>
            <div>
                {
                    usersPosts.map(post => {
                        return (
                            <Preview key={post._id} post={post} allPosts={allPosts} setAllPosts={setAllPosts} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Profile;
