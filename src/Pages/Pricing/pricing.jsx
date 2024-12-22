import './pricing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons'
import { pricingdata } from '../../Assests/assests'
import { context } from '../../Context/context'
import { useContext } from 'react'
import { motion } from "motion/react"

const Pricing = () => {

    const {user , setUser} = useContext(context)

    return (
        <>
         <motion.div 
         initial={{opacity : 0}}
         whileInView={{opacity : 1 }}
         transition={{duration : 0.9}}
         viewport={{once : true}} 
         className='container pricing'>
                <div className='text-center pb-3 pt-4'>
                    <button className='pricing-plans-btn mb-4'>Our Plans</button>
                    <h1>Choose the Plan</h1>
                </div>
            <div className='row justify-content-center'>
                {
                    pricingdata.map((item)=>(
                        <div className='col-12 col-lg-4 mt-2 mt-lg-4'>
                            <div className='pricing-cards m-4 m-lg-3 py-4 p-4' >
                                <span><FontAwesomeIcon icon={faMagicWandSparkles} className='fs-2 mb-3 mt-4' /></span>
                                <h5>{item.type}</h5>
                                <p className='mt-2 mb-4'>{item.text}</p>
                                <div className='d-flex'>
                                    <h2>{item.price}</h2>
                                    <p>/ {item.credits}</p>
                                </div>
                                <div className='text-center'>
                                    <button className='mb-3 mt-4 px-5 rounded pricing-btn py-2'>{
                                        !user ? 'Purchase' :'Get Started'  
                                    }</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> 
         </motion.div>
        </>
    );
}
 
export default Pricing;