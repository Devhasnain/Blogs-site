import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Media/logo.png';
import '../CSS/navbar.css';
import { motion } from 'framer-motion';
import { navbar } from './Animations';
import { MainStore } from '../Store/Context';
function Navbar() {
    const { menuOpen, setMenuOpen } = useContext(MainStore);
    return (
        <>
            <motion.div className='container-fluid li-items'
                variants={navbar}
                initial='hidden'
                animate='visible'
            >
                <div className='container p-2 text-light '>
                    <div className='row p-1 align-items-center'>
                        <div className='col-sm-3 col-md col-lg-3 col-2'>
                            <motion.div className=''
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            >
                                <img src={Logo} alt='' className='icon-sm' />
                            </motion.div>
                        </div>
                        <div className='col-sm col-md col-lg col lg-navbar'>
                            <ul className="nav justify-content-end">
                                <motion.li className="nav-item"
                                    whileHover={{ scale: 1.2, }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <NavLink to='/' className="nav-link text-light" aria-current="page">Home</NavLink>
                                </motion.li>
                                <motion.li className="nav-item"
                                    whileHover={{ scale: 1.2, }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <NavLink to='/about' className="nav-link text-light ">About</NavLink>
                                </motion.li>
                                <motion.li className="nav-item"
                                    whileHover={{ scale: 1.2, }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <NavLink to='/contact' className="nav-link text-light ">Contact</NavLink>
                                </motion.li>
                                <motion.li className="nav-item"
                                    whileHover={{ scale: 1.2, }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <NavLink to='/posts' className="nav-link text-light ">Posts</NavLink>
                                </motion.li>
                                <motion.li className="nav-item"
                                    whileHover={{ scale: 1.2, }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <NavLink to='/admin' className="nav-link text-light ">This company</NavLink>
                                </motion.li>
                            </ul>
                        </div>
                        <div className='col-sm col-md col-lg col text-end sm-navbar'>
                            <button onClick={()=>{setMenuOpen(!menuOpen)}} className='btn btn-xl' style={{boxShadow:"none"}}>
                                <i className="bi bi-list text-light display-4 fw-bold"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Navbar;