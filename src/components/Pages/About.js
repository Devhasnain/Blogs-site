import React, { useContext } from 'react';
import Img from '../Media/aboutimg.jpg';
import Footer from '../Utils/Footer';
import {motion} from 'framer-motion';
import {aboutDiv} from '../Utils/Animations';
import { NavLink } from 'react-router-dom';
import { MainStore } from '../Store/Context';
function About() {
    const {data}=useContext(MainStore);
    return (
        <motion.div className='container-fluid'
        variants={aboutDiv}
        initial='hidden'
        animate='visible'
        exit='exit'
        >
            <div className='container'>
                <div className='row p-1 my-3'>
                    <div className='col-lg-9 col-md-9 m-auto'>
                        <h1 className='fs-2' >HI THERE, LET'S INTRODUCE YOU TO THE TEAM...</h1>
                        <hr />
                        <p><strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt optio consequuntur ducimus odit. Deleniti optio saepe unde omnis. Sapiente aliquam repellendus error id veniam totam dolores recusandae non dolorum?</strong></p>
                        <br />
                        <div className='card'>
                            <img src={Img} className='card-img' alt='' />
                        </div>
                        <br />
                        <h1 className='fs-3'
                        >LOREM IPSUM DOLOR SIT AMET.</h1>
                        <p className='text-secondary'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nemo enim culpa odit at in quia facere, hic est assumenda vel praesentium ipsam harum cupiditate necessitatibus iure quis provident sequi. Nemo nobis officiis magnam tenetur. Modi incidunt libero quod iste veritatis dolor id provident numquam ex, eum voluptas, quidem voluptates. Tempora in quae voluptas voluptatibus vero ad qui quisquam dolore obcaecati enim tenetur corporis temporibus facilis voluptate, incidunt iure eius. Laborum optio officiis consectetur sequi enim laboriosam quae quisquam facere, amet expedita.
                        </p>
                        <br />
                        <div className='row bg-dark text-light p-4 gy-2'>
                            <motion.div className='col my-1  text-center'
                            whileHover={{scale:1.1}}
                            whileTap={{scale:1}}
                            >
                                <h1 className='display-3'>300</h1>
                                <h2>SATISFIED CLIENTS</h2>
                            </motion.div>
                            <motion.div className='col my-1 text-center'
                            whileHover={{scale:1.1}}
                            whileTap={{scale:1}}
                            >
                                <h1 className='display-3'>150</h1>
                                <h2>AWOARDS</h2>
                            </motion.div>
                            <motion.div className='col my-1  text-center'
                            whileHover={{scale:1.1}}
                            whileTap={{scale:1}}
                            >
                                <h1 className='display-3'>500</h1>
                                <h2>COMPLETED PROJECTS</h2>
                            </motion.div>
                        </div>
                        <br />
                        <p className='text-secondary'>
                            Distinctio nesciunt blanditiis beatae, exercitationem dicta aliquid aliquam soluta sapiente, vero dignissimos quam repellat expedita voluptas magnam repellendus pariatur consequatur deleniti sequi quaerat! Maiores harum nostrum numquam modi, animi quia eum nemo in eaque asperiores incidunt accusamus commodi a at placeat maxime deserunt eligendi quos qui officiis sequi! Necessitatibus voluptate sed, dignissimos esse aliquid repellendus. Quo accusamus sit incidunt magnam quis architecto nobis, eaque maxime, laboriosam molestiae placeat iure sequi mollitia quas consectetur non
                        </p>
                    </div>

                    <div className='col-md-3 posts-div'>
                        <h3>Recent Posts</h3>
                        <hr/>
                        {data.slice(0, 3).map(item => {
                            return (
                                <div className='row my-2 border rounded' key={item._id}>
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-seconday'>auther: Hasnain</p>
                                        <p>{postDate()}</p>
                                    </div>
                                    <h6><strong>{item.title.slice(0,30)}...</strong></h6>
                                    <p>{item.description.slice(0,60)}...</p>
                                </div>
                            )
                        })}
                        <hr/>
                        <div className='row'>
                            <div className='col text-end'>
                                <NavLink to='/posts'>
                                <motion.button className='btn btn-outline-secondary btn-sm'
                                whileHover={{scale:1.2}}
                                whileTap={{scale:1}}
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

export default About;
let postDate=()=>{
    let a=new Date();
    let b=a.toDateString()
    return b
}