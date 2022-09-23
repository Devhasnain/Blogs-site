import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bodydiv } from '../Utils/Animations';
import Footer from '../Utils/Footer';
import { DataProvider } from '../RoutesPage';

function Posts() {
    const { data } = useContext(DataProvider);
    let date = new Date();
    return (
        <>
            <motion.div className='container-fluid'
                variants={Bodydiv}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <div className='container'>
                    <div className='row my-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h1><strong>Posts</strong></h1>
                        </div>
                        <hr />
                    </div>
                    <div className='row'>
                        <div className='col m-auto'>
                            {data.map((item, index) => {
                                return (
                                    <div className='row g-0 align-items-center my-1' key={item._id}>
                                        <div className="col-md-5 col-sm-5 col-lg-4 text-center">
                                            <img src={`data:image/jpeg;base64,${item.image}`} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-7 col-sm-7 col-lg-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">{item.description}</p>
                                                <p className="card-text"><small className="text-muted">{date.toDateString()}</small></p>
                                                <motion.button className='btn btn-outline-secondary btn-sm'
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                ><NavLink to={`/posts/${index}`} className='text-decoration-none text-dark'>Read More</NavLink></motion.button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <hr />
                <Footer />
            </motion.div>
        </>
    )
}

export default Posts;