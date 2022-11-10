import React from 'react';
import { PacmanLoader } from 'react-spinners';
import "./styles.css";

const Loader = () => {
  return (
    <div className='box-loader'>
        <PacmanLoader />
    </div>
  )
}

export default Loader