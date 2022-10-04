import React, { createContext, useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './Utils/Navbar';
import { AnimatePresence } from 'framer-motion';
import Contact from './Pages/Contact';
import Menu from './Utils/Menu';
import Posts from './Pages/Posts';
import SinglePost from './Pages/SinglePost';
import Login from './Admin/Login';
import Dashbord from './Admin/Dashbord';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import Error from './Utils/Error';
import { MainStore } from './Store/Context';

function RoutesPage() {
  const { menuOpen, setMenuOpen, data, setData } = useContext(MainStore);
  const location = useLocation();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setLoader(true);
    getData();
  }, []);
  let getData = async () => {
    await axios.get('https://blogs-website-react.herokuapp.com/blogs')
      .then(result => {
        let arr = result.data.post.reverse();
        setData(arr);
      })
      .catch(error => {
        navigate('*');
      })
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }
  return (
    <>
      {loader ? <div className='my-5 text-center p-5' ><ClipLoader size={30} /></div> :
        <>
          <Navbar />
          {menuOpen?<Menu />:""}
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.key} >
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/posts/:id' element={<SinglePost />} />
              <Route path='/admin' element={<Login />} />
              <Route path='/admin-dashbord' element={<Dashbord />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </AnimatePresence>
        </>}
    </>
  )
}

export default RoutesPage;