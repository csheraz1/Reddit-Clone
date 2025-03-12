import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuSideBar from './components/SideBars/sidebar'
import CommunitySideBar from './components/SideBars/CommunityBar'
import Posts from './components/RedditPost/Posts'

function App() {

  return (
    <>
   
      <MenuSideBar/>
      <CommunitySideBar/>
      <div>
        <Posts/>
      </div>
      <div className='imageDiv'>
      <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
        <img src={reactLogo}/>
      </div>

    </>
  )
}

export default App
