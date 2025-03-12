import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar, Menu, SubMenu, MenuItem} from 'react-pro-sidebar'

function App() {

  return (
    <>
   <div className='TopBar'>
      <Sidebar className='sidebar'> 
          <Menu>
            <MenuItem className='title'>
             item 1 
            </MenuItem>
            <MenuItem className='eg'>
              Item 2
            </MenuItem>
            <MenuItem>
              Item 3
            </MenuItem>
            <MenuItem>
              Item 4
            </MenuItem>
            <MenuItem>
              Item 5
            </MenuItem>
          </Menu>
          
      </Sidebar>
      </div>
      
      <div className='CommunityBar'>
      
        <Sidebar className='sidebar2'>
          <Menu>
            <MenuItem>
              Communities
            </MenuItem>
            <MenuItem>
              Examples
            </MenuItem>
            <MenuItem>
              Examples
            </MenuItem>
            <MenuItem>
              Examples
            </MenuItem>
            <MenuItem>
              Examples
            </MenuItem>

          </Menu>
        </Sidebar>
      </div>
      

    </>
  )
}

export default App
