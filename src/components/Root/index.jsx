import React from 'react';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <h2>Hola soy un Footer desde el ROOT</h2>
    </>
  )
}

export default Root