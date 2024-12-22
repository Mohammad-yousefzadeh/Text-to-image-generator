import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagicWandSparkles , faBars } from "@fortawesome/free-solid-svg-icons";
import './navbar.css'
import { useContext } from "react";
import { context } from "../../Context/context";

const Navbar = () => {

    const {showLogin , setShowLogin , user , setUser} = useContext(context)

    return (
        <>
         <nav className="navbar navbar-expand-lg web-navbar p-3 px-0 px-lg-5">
            <div className="navbar-brand">
                <h2 className="mx-3 mx-lg-5"><Link to={'/'} className="text-dark"><FontAwesomeIcon icon={faMagicWandSparkles} /> Imagify</Link></h2>
            </div>
            <div className='navbar-toggler humberger' data-target="#navbar-menu" data-toggle="collapse">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbar-menu">
                <ul className="list-unstyled navbar-nav mx-5 text-center align-items-center">
                    <li className="nav-item mr-0 mr-lg-3"><Link className="text-dark" to={'/pricing'}>Pricing</Link></li>
                    <li className="nav-item mt-4 mt-lg-0 login-btn px-4" onClick={()=>{
                        if(user){
                            setUser(false)
                            localStorage.removeItem('token')
                            window.location = '/'
                        }else{
                            setShowLogin(true)
                        }
                    }}>{user ? 'LogOut': 'Login'}</li>
                </ul>
            </div>
         </nav>
        </>
    );
}
 
export default Navbar;