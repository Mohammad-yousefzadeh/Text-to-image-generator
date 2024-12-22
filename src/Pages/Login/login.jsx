import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle} from "@fortawesome/free-regular-svg-icons";
import { faKey , faEnvelope , faUser } from "@fortawesome/free-solid-svg-icons";
import './login.css'
import { useContext, useEffect } from "react";
import { context } from "../../Context/context";
import { motion } from "motion/react"
import axios from "axios";

const Login = () => {

  const {setShowLogin , setLogin , setPassword , setEmail , email , password , setShowNotif} = useContext(context)

  useEffect(()=>{
    document.body.style.overflow = 'hidden'

    return ()=>{
      document.body.style.overflow = 'unset'
    }
  })

  const btnHandler = async(e) =>{
    e.preventDefault()

    const newUser = {
      password : password ,
      email : email 
    }
    const response = await axios.post('https://reqres.in/api/users/users' , newUser)
    localStorage.setItem('token' , response.data.id)
    setShowLogin(false)
    setShowNotif(true)
    setTimeout(()=>{
      setShowNotif(false)
    } , 5000)
  }

    return (
        <>
          <div className="container-fluid bg">
            <div className="row justify-content-center">
                <div className="col-12 text-center login">
                   <motion.div
                   initial={{opacity : 0 , y : 60}}
                   whileInView={{opacity : 1 , y : 0}}
                   transition={{duration : 0.7}}
                   viewport={{once : true}} 
                   className="login-box">
                    <FontAwesomeIcon icon={faXmarkCircle} className="cross-icon" onClick={()=>{
                      setShowLogin(false)
                      setLogin('Login')
                    }} />
                    <h2 className="pt-2">Login</h2>
                    <p className="text-secodary">Welcome back! please sign in to continue</p> 
                    <form className="py-4" >
                      <div className="name-input">
                          <FontAwesomeIcon icon={faKey} className="pr-2" />
                          <input onChange={(e)=>setPassword(e.currentTarget.value)} value={password} type="password" placeholder="Password" required />
                      </div>
                      <div className="name-input my-3">
                          <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
                          <input onChange={(e)=>setEmail(e.currentTarget.value)} value={email} type="text" placeholder="Email" required />
                      </div>
                      <p className="text-primary mb-2 mt-4">Forgot password ?</p>
                      <button onClick={btnHandler} className="w-100 px-5 py-2 login-btn text-white">Submit</button>
                    </form>                 
                    <p className="login-Suggestions mb-0 text-left">Dont have an account ?  
                    <span className="text-primary" onClick={()=>setLogin('Sign Up')}> Sign Up</span></p>         
                   </motion.div>
                </div>
            </div>
          </div>
        </>
    );
}
 
export default Login;