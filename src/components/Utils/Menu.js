import React, { useContext} from 'react';
import { NavLink} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menuanimate,MenuContent } from '../Utils/Animations';
import { MainStore } from '../Store/Context';
function Menu() {
    const {menuOpen,setMenuOpen}=useContext(MainStore)
    return (
        <AnimatePresence>
            <div className='row menu-div'>
                <motion.div className='overlay-menu'
                  variants={Menuanimate}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  onClick={()=>{setMenuOpen(!menuOpen)}}
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
                        ><NavLink to='/' onClick={()=>{setMenuOpen(!menuOpen)}} >Home</NavLink></motion.li>
                        <motion.li
                            whileTap={{ scale: 0.9 }}
                        ><NavLink to='/about' onClick={()=>{setMenuOpen(!menuOpen)}} >About</NavLink></motion.li>
                        <motion.li
                            whileTap={{ scale: 0.9 }}
                        ><NavLink to='/contact' onClick={()=>{setMenuOpen(!menuOpen)}} >Contact</NavLink></motion.li>
                        <motion.li
                            whileTap={{ scale: 0.9 }}
                        ><NavLink to='/posts' onClick={()=>{setMenuOpen(!menuOpen)}} >Posts</NavLink></motion.li>
                    </ul>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Menu
