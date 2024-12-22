import './generateBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../../Context/context'

const GenerateBtn = () => {  
    const {setShowLogin , user} = useContext(context)
    const navigate = useNavigate()

    return (
        <>
         <div className='container my-5'>
            <div className='row justify-content-center'>
                <motion.div
                initial={{opacity : 0 , y : 110}}
                whileInView={{opacity : 1 , y : 0}}
                transition={{duration : 0.9}}
                viewport={{once : true}} 
                className='col-12 text-center pt-5'>
                    <h1 className='mt-4'>See the Magic. Try now</h1>
                    <div className=''>
                        <button className='footer-generate-btn my-5 text-white'
                        onClick={()=>user ? navigate('/result') : setShowLogin(true)}
                        >Generate Images <FontAwesomeIcon className='ml-1 text-warning' icon={faStar} /></button>
                    </div>
                </motion.div>
            </div>
         </div>
        </>
    );
}
 
export default GenerateBtn;