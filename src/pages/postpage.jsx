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
    const addComment = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:3000/comments/create-comment/${thisPost._id}`, {
                comment: commentInput
            },
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('authToken')}`
                    }
                })
            if (res) {
                let postWithNewComment = res.data
                setThisPost(postWithNewComment)
                setCommentInput('')
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className=''>
            <div className='bg-white shadow-lg rounded-lg flex flex-col'>
                <div>
                    {thisPost && <img className='rounded-lg' src={thisPost.image} alt="img" />}
                </div>
                <div className='px-4'>
                    <div className='flex justify-between my-4'>
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
                    {thisPost && <div className='my-4'>
                        <p className='underline'>{thisPost.link}</p>
                    </div>}
                    {thisPost && <div className='mt-2 mb-6'>
                        <p className='text-3xl'>{thisPost.title}</p>
                        <p>{thisPost.description}</p>
                    </div>}
                    <div>
                        <p>comments</p>
                    </div>
                    <div className='my-4'>
                        {thisPost &&
                            thisPost.comments.map(c => {
                                return (
                                    <Comment setThisPost={setThisPost} thisPost={thisPost} comment={c} />
                                )
                            })
                        }
                    </div>
                    <div className='flex'>
                        <div className='flex items-center'>
                            <AccountCircleIcon />
                        </div>
                        <form className='w-full'>
                            <input className='h-12 bg-slate-100 w-full rounded-full pl-4' type="text" placeholder='Add a comment' value={commentInput} onChange={handleCommentInput} />
                            <div className='flex flex-end'>
                                <button className='p-2' onClick={()=>{setCommentInput('')}}>Cancel</button>
                                <button className='p-2' onClick={addComment}>Done</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Postpage;
