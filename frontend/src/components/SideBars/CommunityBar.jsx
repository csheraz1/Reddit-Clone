import { Sidebar, Menu, SubMenu, MenuItem} from 'react-pro-sidebar'
import '../../App.css'

export default function CommunitySideBar(){

    return(
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
    )
}