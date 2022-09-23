import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Error() {
  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-5 m-auto p-2 text-center text-danger'>
            <h3>Some error occured!</h3>
            <p>Check your internet connection</p>
            <small>Or</small>
            <p>Reload this page</p>
            <NavLink to='/'>Reload</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Error
