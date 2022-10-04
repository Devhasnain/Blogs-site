import React from 'react';
import {motion} from 'framer-motion';
import {iconsDiv} from '../Utils/Animations';
function Icons() {
  return (
    <>
    <motion.div className='container container-sm container-md container-lg'
    variants={iconsDiv}
    initial='hidden'
    whileInView='visible'
    viewport={{once:false,amount:0}}
    >
        <div className='row p-5 text-center'>
                <h1>Want to know more about us </h1>
            <div className='col-12 col-sm-10 col-md-8 col-lg-6 m-auto text-center p-5'>
                <ul className='nav justify-content-between'>
                    <li className='nav-item'><motion.a className='nav-link' href=''
                    whileHover={{scale:1.2,}}
                    whileTap={{scale:1}}
                    ><i className="bi bi-facebook text-secondary display-4"></i></motion.a></li>
                    <li className='nav-item'><motion.a className='nav-link' href=''
                    whileHover={{scale:1.2,}}
                    whileTap={{scale:1}}
                    ><i className="bi bi-instagram text-secondary display-4"></i></motion.a></li>
                    <li className='nav-item'><motion.a className='nav-link' href=''
                    whileHover={{scale:1.2,}}
                    whileTap={{scale:1}}
                    ><i className="bi bi-linkedin text-secondary display-4"></i></motion.a></li>
                </ul>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default Icons
