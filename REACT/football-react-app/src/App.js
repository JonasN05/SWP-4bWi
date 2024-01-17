import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then(
      (res) => res.json().then((data) => {
        console.log(data);
      })
    );
  }, []);


  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <div className='bg-backgroundwhite font-display'>
          <div><Header /></div>
          <div><Navigation /></div>
          <div>Table</div>
          <div><Footer /></div>
        </div>,
    },
    {
      path: "/games",
      element:
        <div className='bg-backgroundwhite font-display'>
          <div><Header /></div>
          <div><Navigation /></div>
          <div>Games</div>
          <div><Footer /></div>
        </div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
