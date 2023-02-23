import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import LinkIcon from '@mui/icons-material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UploadIcon from '@mui/icons-material/Upload';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Comment from '../components/comment';


const Postpage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [commentInput, setCommentInput] = useState('')
    const [thisPost, setThisPost] = useState(null)
    console.log(thisPost, 'tp')
    const handleCommentInput = (e) => {
        setCommentInput(e.target.value)
    }
    useEffect(() => {
        const getThisPost = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/posts/${id}`)
                if (res) {
                    let foundThisPost = res.data
                    setThisPost(foundThisPost)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getThisPost()
    }, [])
    return (
        <div className=''>
            <div className='bg-white shadow-lg rounded-lg flex flex-col'>
                <div>
                    {thisPost && <img className='rounded-lg' src={thisPost.image} alt="img" />}
                </div>
                <div className='px-4'>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <MoreHorizIcon />
                            <UploadIcon />
                            <LinkIcon />
                        </div>
                        <div>
                            <button className='p-3'>Profile</button>
                            <button className='p-3 rounded-full bg-red-600 text-white'>Save</button>
                        </div>
                    </div>
                    {thisPost && <div>
                        <p className='underline'>{thisPost.link}</p>
                    </div>}
                    {thisPost && <div>
                        <p className='text-3xl'>{thisPost.title}</p>
                        <p>{thisPost.description}</p>
                    </div>}
                    <div>
                        <p>comments</p>
                    </div>
                    <div>
                        {thisPost &&
                            thisPost.comments.map(c => {
                                return (
                                    <Comment setThisPost={setThisPost} thisPost={thisPost} comment={c} />
                                )
                            })
                        }
                    </div>
                    <div className='flex'>
                        <AccountCircleIcon />
                        <input type="text" placeholder='comment' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Postpage;
