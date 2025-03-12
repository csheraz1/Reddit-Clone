import { Sidebar, Menu, SubMenu, MenuItem} from 'react-pro-sidebar'
import { useState } from 'react'
import '../../App.css'

export default function MenuSideBar(){
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false):setMenuCollapse(true);
    }
    return(
        <div className='MenuBar'>
            <Sidebar className='sidebar' collapsed={menuCollapse}> 
                <Menu>
                    <MenuItem className='sidebar-heading'> 
                    Sidebar
                    </MenuItem>
                
                    <button className='sidebar-button' onClick={menuIconClick}>
                    item 1 
                    </button>
                    

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
    )
}