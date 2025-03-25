import './App.css'
import MenuSideBar from './components/SideBars/sidebar'
import CommunitySideBar from './components/SideBars/CommunityBar'
import Posts from './components/RedditPost/Posts'
import NavBar from './components/Navbar/NavBar'


function App() {
 
  return (
    <>
      <NavBar/>
      <MenuSideBar/>
      <CommunitySideBar/>
      <Posts/>
    </>
  )
}

export default App
