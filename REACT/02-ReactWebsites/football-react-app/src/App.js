import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import Table from './components/data-website/Table.js';
import Matches from './components/data-website/Matches.js';
import styles from './App.module.css'
import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then(
      (res) => res.json().then((data) => {
        console.log(data);
        setTeams(data);
      })
    );
  }, []);


  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <div className='bg-background-white font-display'>
          <div><Header /></div>
          <div><Navigation /></div>
          <div><Table teams={teams} /></div>
          <div><Footer /></div>
        </div>,
    },
    {
      path: "/games",
      element:
        <div className='bg-background-white font-display'>
          <div><Header /></div>
          <div><Navigation /></div>
          <div><Matches teams={teams} /></div>
          <div><Footer /></div>
        </div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
