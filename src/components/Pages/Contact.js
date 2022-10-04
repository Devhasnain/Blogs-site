import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { contactDiv, posts } from '../Utils/Animations';
import Footer from '../Utils/Footer';
import { NavLink } from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
import axios from 'axios';
import { MainStore } from '../Store/Context';
function Contact() {
    const {data}=useContext(MainStore);
    const [loader,setLoader]=useState(false);
    const [Name,setName]=useState('');
    const [Email,setEmail]=useState('');
    const [Message,setMessage]=useState('');
    const handle=async(e)=>{
        setLoader(true);
        e.preventDefault();
        let obj={
            name:Name,
            email:Email,
            message:Message
        }
        await axios.post('https://blogs-website-react.herokuapp.com/message',{obj})
        .then(result=>{
            if (result.data.access) {
                alert(result.data.msg)
            }
        })
        .catch(error=>{
            alert(error.response.data.msg);
        });
        setLoader(false);
        setName('')
        setEmail('')
        setMessage('');
    };
    let date=new Date();
    return (
        <motion.div className='container-fluid'
            variants={contactDiv}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-lg-8 m-auto'>
                        <h2 className=''><strong>PLEASE LET US KNOW IF YOU HAVE ANY QUESTIONS</strong></h2>
                        <hr />
                        <br/>
                        <p className='text-secondary'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt optio consequuntur ducimus odit. Deleniti optio saepe unde omnis. Sapiente aliquam repellendus error id veniam totam dolores recusandae non dolorum?</p>
                            <form onSubmit={handle}>
                                <input placeholder='Name *' value={Name} onChange={(e)=>{setName(e.target.value)}} autoComplete='true' className='form-control' type='text' required minLength={3}/><br/>
                                <input placeholder='Email *' value={Email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete='true' className='form-control' type='email' required/><br/>
                                <textarea rows={8} placeholder='Message *' value={Message} onChange={(e)=>{setMessage(e.target.value)}} className='form-control' type='text' required minLength={50}/><br/>
                            <div className='row'>
                                <div className='col text-end'>
                                   {loader?<button className='btn'><ClipLoader size={25} /></button>: <motion.button className='btn btn-outline-secondary'
                                    whileHover={{scale:1.1}}
                                    whileTap={{scale:0.9}}
                                    type='submit'
                                    >Submit</motion.button>}
                                </div>
                            </div>
                                    </form>
                    </div>
                    <div className='col-lg-4 posts-div'>
                        <h3>Recent Posts</h3>
                        <hr/>
                        {data.slice(0, 3).map(item => {
                            return (
                                <div className='row my-1' key={item._id}>
                                    <div className='card'>
                                        <div className='d-flex justify-content-between'>
                                            <p>auther: Hasnain</p>
                                            <p>{date.toDateString()}</p>
                                        </div>
                                        <h5><strong>{item.title.slice(0, 25)}...</strong></h5>
                                        <p>{item.description.slice(0, 60)}...</p>
                                    </div>
                                </div>
                            )
                        })}
                        <hr/>
                        <div className='row'>
                            <div className='col text-end'>
                                <NavLink to='/posts'>
                                    <motion.button className='btn btn-outline-secondary'
                                    whileHover={{scale:1.1}}
                                    whileTap={{scale:0.9}}
                                    >View all posts</motion.button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <Footer/>
        </motion.div>
    )
}

export default Contact;