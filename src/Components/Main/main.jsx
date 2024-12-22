import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import firstDefaultImage from '../../Assests/medium (1).webp'
import secondDefaultImage from '../../Assests/medium.webp'
import './main.css'
import {useContext } from "react";
import { motion } from "motion/react"
import { context } from "../../Context/context";

const Main = () => {

    const { setShowLogin , user} = useContext(context)
    const navigate = useNavigate()

    return (
        <>
         <motion.div 
         initial={{opacity : 0 , y : 100}}
         whileInView={{opacity : 1 , y : 0}}
         transition={{duration : 0.9}}
         viewport={{once : true}} 
         className='container-fluid main mt-3 mt-lg-5'>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-5 text-center">
                    <div className="text-center mb-4">
                        <button className="recomendation-btn btn-hover">best text to image generator <FontAwesomeIcon icon={faStar} className="text-warning" /></button>
                    </div>
                    <motion.h1 
                    initial ={{opacity : 0}}
                    animate ={{opacity : 1}}
                    transition={{delay : 0.2 , duration : 1}}
                    className="mt-3 mb-2">Turn text to <span className="text-primary">Image</span>, in seconds.</motion.h1>
                    <motion.p 
                    initial ={{opacity : 0}}
                    animate ={{opacity : 1}}
                    transition={{delay : 0.3 , duration : 1}}
                    className="fw-bolder">Unleash your creativity with AI. turn your imagination to visual art in seconds-just type and watch the magic happen.</motion.p>
                    <div className="text-center">
                        <button className="mt-3 mb-5 border-0 btn-hover text-white generate-btn"
                        onClick={()=>user ? navigate('/result') : setShowLogin(true)}
                        >Generate Images <FontAwesomeIcon className="text-warning ml-1" icon={faStar} /></button>
                    </div>
                    <motion.div 
                    initial ={{opacity : 0 }}
                    animate ={{opacity : 1}}
                    transition={{delay : 0.7 , duration : 1.3}}
                    className="d-flex flex-wrap justify-content-center mt-4 mb-2">
                        {
                            Array(5).fill('').map((item , index)=>(
                                <img className="m-1" src={index % 2 === 0 ? firstDefaultImage : secondDefaultImage} key={index} alt="Default images" />
                            ))
                        }
                    </motion.div>
                    <span className="text-secondary ">Generate images with Imagify</span>
                </div>
            </div>
         </motion.div>
        </>
    );
}
 
export default Main;