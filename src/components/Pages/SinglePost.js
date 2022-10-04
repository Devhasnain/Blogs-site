import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Utils/Footer';
import {motion} from 'framer-motion';
import {Bodydiv} from '../Utils/Animations';
import { MainStore } from '../Store/Context';
function SinglePost() {
    const { id } = useParams();
    const {data}=useContext(MainStore);
    let date=new Date();
    return (
        <>
            <motion.div className='container-fluid'
            variants={Bodydiv}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
                <div className='container'>
                    <div className='row my-4'>
                        <div className='col'>
                                <h4 className="card-title">{data[id].title}</h4>
                                <hr/>
                            <div className='row'>
                                <div className='col-lg-9 col-md-9 m-auto'>
                                    <img src={`data:image/jpeg;base64,${data[id].image}`} className='card-img-top' alt="..." />
                                </div>
                            </div>
                                <hr/>
                            <div className="card-body">
                                <div className='d-flex justify-content-between'>
                                <p className="card-text"><small className="text-muted">{date.toDateString()}</small></p>
                                <p className='text-end'>auther: Hasnain</p>
                                </div>
                                <p className="card-text">{data[id].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <h4>Post a comment</h4>
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 p-3'>
                            <div className=''>
                            comments
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 my-1'>
                            <form >
                                <input className='form-control' placeholder='Name *' type='text' required minLength={3}/><br/>
                                <input className='form-control' placeholder='Email *' type='text' required /><br/>
                                <textarea rows={6} className='form-control' placeholder='Comment *' type='text' required minLength={80}/><br/>
                                <input type='submit' className='btn btn-outline-secondary'/><br/>
                            </form>
                        </div>
                    </div>
                    <hr/>
                </div>
                <Footer/>
            </motion.div>
        </>
    )
}

export default SinglePost;