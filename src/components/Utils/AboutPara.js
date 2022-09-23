import React from 'react';
import '../CSS/body.css';
import { motion } from 'framer-motion';
import { aboutpara1, aboutpara2 } from '../Utils/Animations'
import { NavLink } from 'react-router-dom';
function AboutPara() {
    return (
        <>
            <div className='row justify-content-center bg-dark align-items-center'>
                <motion.div className='col-sm col-md p-4'
                    variants={aboutpara1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <p className='display-6 text-light'>Lorem, ipsum dolor  amet consectetur consectetur adipisicing elit ipsum adipisicing elit ipsum  dolor  amet.</p>
                </motion.div>
                <motion.div className='bg-light col-sm col-md p-4'
                    variants={aboutpara2}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h1 className='text-bold'>ABOUT Us</h1>
                    <br />
                    <p className='text-bold'><strong>Lorem, ipsum dolor amet consectetur consectetur adipisicing elit ipsum adipisicing elit ipsum dolor amet.
                        Lorem, ipsum dolor amet consectetur consectetur adipisicing elit.</strong>
                    </p>
                    <br />
                    <p className='text-bold'>Lorem, ipsum dolor amet consectetur consectetur adipisicing elit ipsum adipisicing elit ipsum dolor amet.
                        Lorem, ipsum dolor amet consectetur consectetur adipisicing elit ipsum adipisicing .
                        elit ipsum adipisicing elit ipsum dolor amet.
                    </p>
                    <p className='text-bold'>Lorem, ipsum dolor amet consectetur consectetur adipisicing elit ipsum adipisicing elit ipsum dolor amet.
                        Lorem, ipsum dolor amet consectetur consectetur adipisicing elit ipsum adipisicing .
                        elit ipsum adipisicing elit ipsum dolor amet.
                    </p>
                    <br />
                    <NavLink to='/contact' className=''>
                        <motion.button className='btn btn-outline-secondary text-bold'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <strong>LET'S WORK TOGETHER</strong>
                        </motion.button>
                    </NavLink>
                </motion.div>
            </div>
        </>
    )
}

export default AboutPara
