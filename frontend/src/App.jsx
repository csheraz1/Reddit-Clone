import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuSideBar from './components/SideBars/sidebar'
import CommunitySideBar from './components/SideBars/CommunityBar'
import Posts from './components/RedditPost/Posts'
import NavBar from './components/NavBar'

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
