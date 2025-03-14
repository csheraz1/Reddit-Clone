import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuSideBar from './components/SideBars/sidebar'
import CommunitySideBar from './components/SideBars/CommunityBar'
import Posts from './components/RedditPost/Posts'
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react';

function App() {
 
  return (
    <>
   
      <MenuSideBar/>
      <CommunitySideBar/>
      
      <Posts/>
     
      

    </>
  )
}

export default App
