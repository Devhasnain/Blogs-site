import React from 'react';
import '../CSS/home.css';
import { NavLink } from 'react-router-dom';
import AboutPara from '../Utils/AboutPara';
import Icons from '../Utils/Icons';
import Cards from '../Utils/Cards';
import Posts from '../Utils/Posts';
import Footer from '../Utils/Footer';
import { motion } from 'framer-motion';
import { Bodydiv } from '../Utils/Animations';
import Bgimage from '../Media/bg-img.jpg';
function Home() {
    return (
        <>
            <div className='container-fluid'>
                <motion.div className='bg-video'
                    variants={Bodydiv}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    <img src={Bgimage} className='bg-video large-screen-video' />
                    <img src={Bgimage} alt='' className='small-screen-bg'/>
                </motion.div>
                <div className='content-div'>
                    <div className='container'>
                        <div className='row my-5'>
                            <div className='col-sm-12 col-md-12 col-lg-12 col-8 m-auto text-light'>
                                <h1 className='display-1'>WELCOME</h1><h4 className='display-4'>TO OUR BLOG</h4>
                                <p className='mx-3 paragraph-tag'>Lorem, ipsum dolor  amet consectetur adipisicing elit.<br />Lorem,consectetur adipisicing elit ipsum dolor  amet.</p>
                            </div>
                        </div>
                        <br />
                        <div className='row large-screen-row'>
                            <div className='col text-center'>
                                <NavLink to='/'>
                                    <motion.button className='btn my-5'
                                        whileHover={{ scale: 1.5}}
                                    ><i className="bi bi-chevron-compact-down fs-1"></i></motion.button>
                                </NavLink>
                            </div>
                        </div>
                    </div><br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='container-fluid'>
                        <AboutPara />
                        <Icons />
                        <hr />
                        <br />
                        <Cards />
                        <br />
                        <hr />
                        <br />
                        <Posts />
                    </div>
                    <hr />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home
