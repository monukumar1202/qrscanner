import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeNav = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

  return (
    <div className='p-3 text-end'>
      <button className='btn btn-outline-warning' onClick={()=>handleClick()}>Sign In</button>
    </div>
  )
}

export default HomeNav
