import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DashbordDiv } from '../Utils/Animations';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ClipLoader} from 'react-spinners';

function Dashbord() {
    const Navigate = useNavigate();
    const [text,setText]=useState('');
    const [des,setDescription]=useState('');
    const [file,setFile]=useState(null);
    const [loader,setLoader]=useState(false);

    useEffect(() => {
        const a = localStorage.getItem('UT');
        const b = JSON.parse(a);
        axios.post('https://blogs-website-react.herokuapp.com/dashbord', { token: b })
            .then(result => {
                if (!result.data.access) {
                    Navigate('/admin')
                }
            })
            .catch(error => {
                Navigate('/admin')
            })
    }, []);
    const HandleForm=async(e)=>{
        let a=localStorage.getItem("UT");
        let b=JSON.parse(a);
        e.preventDefault();
        setLoader(true);
        const formData=new FormData()
        formData.append('img',file);
        formData.append('token',b);
        formData.append('title',text);
        formData.append('description',des);
        await axios.post('https://blogs-website-react.herokuapp.com/post',formData)
        .then(result=>{
            if (result.data.access) {
                alert('Post successful');
                setTimeout(() => {
                    setText('')
                    setDescription('')
                    setFile()
                }, 200);
            }
        })
        .catch(error=>{
            console.log(error.response.data.msg)
        });
        setLoader(false);
    }
    return (
        <div className='container-fluid'>
            <div className='contaienr'>
                <div className='row my-5'>
                    <motion.div className='col-lg-8 col-md-9 col-sm-10 col-12 m-auto border shadow rounded p-4'
                        variants={DashbordDiv}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <h3>Create Post</h3>
                        <hr />
                        <form onSubmit={HandleForm}>
                            <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='Title *' className='form-control' required minLength={60} /><br />
                            <textarea rows={8} value={des} onChange={(e)=>{setDescription(e.target.value)}} placeholder='Description *' className='form-control' required minLength={100} autoCorrect='true' autoComplete='true' /><br />
                            <input type='file' className='' required filename='img' onChange={(e)=>{setFile(e.target.files[0])}}/><br />
                            {loader?<p className='my-3'><ClipLoader size={20}/></p>:<button type='submit' className='my-4 btn btn-outline-secondary'>Post</button>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Dashbord
