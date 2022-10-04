import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LoginDiv } from '../Utils/Animations';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
function Login() {
  const Navigate = useNavigate();
  useEffect(()=>{
    let a=localStorage.getItem('UT');
    let b=JSON.parse(a)
    axios.post('https://blogs-website-react.herokuapp.com/dashbord',{token:b})
    .then(result=>{
      if (result.data.access) {
       Navigate('/admin-dashbord'); 
      }
    });
  },[])
  const [state, setState] = useState('');
  const [state1, setState1] = useState('');
  const [errormsg, setErrorMsg] = useState('');
  const [loader,setLoader]=useState(false);
  const handleSubmit =async (e) => {
    e.preventDefault();
    const obj = {
      username: state,
      password: state1
    }
    setLoader(true);
    await axios.post('https://blogs-website-react.herokuapp.com/login', obj)
      .then(result => {
        if (result.data.access) {
          localStorage.setItem('UT', JSON.stringify(result.data.token))
          setTimeout(() => {
            Navigate('/admin-dashbord');
          }, 600);
        }
      })
      .catch(error => {
        setErrorMsg(error.response.data.msg);
        setTimeout(() => {
          setErrorMsg('')
        }, 4000);
      })
      setLoader(false);
  }
  return (
    <div className='container-fluid' style={{overflow:'hidden'}}>
      <div className='container-sm container-md container-lg'>
        <div className='row my-5'>
          <motion.div className='col col-sm-7 col-md-6 col-lg-4 m-auto border rounded shadow p-4'
            variants={LoginDiv}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <h2>Login</h2>
            <br />
            <form onSubmit={handleSubmit}>
              <input type='text' placeholder='Name *' autoComplete='true' value={state} onChange={(e) => { setState(e.target.value) }} required minLength={3} className='form-control' /><br />
              <input type='password' id='inputpassword' autoComplete='true' placeholder='Password *' value={state1} onChange={(e) => { setState1(e.target.value) }} required minLength={8} className='form-control' />
              <br/>
              <label><small>show password</small></label>
              <input type='checkbox' className='mx-2' onClick={action} autoComplete='true' />
              <br />
              <br />
              {loader?<ClipLoader size={25}/>: <motion.button type='submit' className='btn btn-outline-secondary'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >Login</motion.button>}<br />
            </form>
            <br />
            <p><small className='text-danger'>{errormsg ? `"${errormsg}"` : ''}</small></p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Login


const action = () => {
  let a = document.getElementById('inputpassword')
  if (a.type === 'password') {
    a.type = 'text'
  } else {
    a.type = 'password'
  }
}