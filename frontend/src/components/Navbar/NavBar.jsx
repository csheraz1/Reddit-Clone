import './NavBar.css'
import img from '../../assets/react.svg'

export default function NavBar (){
    return (
        <div className="Navigation-Bar">
            <div className="Logo">
                <img src={img}/>
            </div>
            <div className="Login">
                <button className='login-button'>Login</button>
            </div>
            <div className="Register">
                <button className='register-button'>Register</button>
            </div>
        </div>
    )
}