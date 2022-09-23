import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menuanimate,MenuContent } from '../Utils/Animations';
import { useDispatch } from 'react-redux';
import {Displaymenu} from '../redux/reducers/State';
function Menu() {
    const dispatch=useDispatch();
    const location=useLocation();
    useEffect(()=>{
   dispatch(Displaymenu())
    },[location.pathname])
    return (
        <AnimatePresence>
            <div className='row menu-div'>
                <motion.div className='overlay-menu'
                  variants={Menuanimate}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  onClick={()=>{dispatch(Displaymenu())}}
                ></motion.div>
                <motion.div className='content-div-menu border'
                variants={MenuContent}
                initial='hidden'
                animate='visible'
                exit='exit'
                >
                    <ul>
                        <motion.li
                            whileTap={{ scale: 0.9 }}
                        ><NavLink to='/'>Home</NavLink></motion.li>
                        <motion.li
                            whileTap={{ scale: 0.9 }}
                        ><NavLink to='/about'>About</NavLink></motion.li>
                        <motion.li
                            whileTap={{ scale: 0.9 }}
                        ><NavLink to='/contact'>Contact</NavLink></motion.li>
                        <motion.li
                            whileTap={{ scale: 0.9 }}
                        ><NavLink to='/posts'>Posts</NavLink></motion.li>
                    </ul>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Menu
