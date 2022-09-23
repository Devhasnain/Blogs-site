import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../Utils/Animations';
import {DataProvider} from '../RoutesPage';
function Posts() {
    const {data}=useContext(DataProvider);
    return (
        <div className='container'>
            <div className='row'>
                <h3 className=''>RECENT POSTS</h3>
                <p className='my-1'>
                    Lorem, ipsum dolor  amet consectetur adipisicing elit Lorem, ipsum dolor  amet consectetur adipisicing elit Lorem,consectetur adipisicing elit ipsum dolor  amet  Lorem,consectetur adipisicing elit ipsum dolor  amet",
                </p>
            </div><hr />
            <div className='row'>
                {data.slice(0, 3).map((item) => {
                    return (
                        <div className='col-12 m-auto my-1' key={item._id}>
                            <motion.div className='card my-1 rounded shadow'
                                variants={posts}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: false, amount: 0.3 }}
                                whileHover={{ scale: 1.1}}
                            >
                                <div className='card-body'>
                                    <div className='d-flex justify-content-between'>
                                        <p>{item.auther}</p>
                                        <p className='card-text'>{item.date}</p>
                                    </div>
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-description card-text'>{item.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
            <div className='row my-4'>
                <div className='col text-end'>
                    <NavLink to='/posts'>
                        <motion.button className='btn btn-outline-secondary'
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        >View all posts</motion.button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Posts;