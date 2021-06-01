import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../viwers/home';
import User from '../viwers/user/profile';
import Settings from '../viwers/user/settings';
import Navbar from '../components/navbar';
import NotFound from '../viwers/notFound';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Navbar /> }> 

          <Route path="/" element={ <Home /> } />
          <Route path="/user" element={ <User /> } />
          <Route path="/user/:id" element={ <Settings /> } />
                      
      </Route>
      <Route path="*" element={<NotFound />} />            
  </Routes>
  )
};
