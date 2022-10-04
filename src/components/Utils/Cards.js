import React from 'react';
import Img1 from '../Media/card-img-1.jpeg';
import Img2 from '../Media/card-img-2.jpeg';
import Img3 from '../Media/card-img-3.jpeg';
import {motion} from 'framer-motion';
import {cards} from '../Utils/Animations';
function Cards() {
    return (
        <>
            <div className='row'>
                <motion.div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 m-auto my-1'
                variants={cards}
                initial='hidden'
                whileInView='visible'
                viewport={{once:false,amount:0.3}}
                >
                    <div className="card bg-dark text-white">
                        <img src={Img1} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.  This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 m-auto my-1'
                variants={cards}
                initial='hidden'
                whileInView='visible'
                viewport={{once:false,amount:0.3}}
                >
                    <div className="card text-white">
                        <img src={Img2} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </motion.div>
                 <motion.div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 m-auto my-1'
                 variants={cards}
                 initial='hidden'
                 whileInView='visible'
                 viewport={{once:false,amount:0.3}}
                 >
                    <div className="card bg-dark text-white">
                        <img src={Img3} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Cards
