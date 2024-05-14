import Footer from '@/shared/Footer/Footer';
import NavBar from '@/shared/Navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
