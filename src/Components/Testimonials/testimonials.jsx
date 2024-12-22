import './testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { testimonailsData } from '../../Assests/assests'
import { motion } from "motion/react"

const Testimonials = () => {
    return (
        <>
         <motion.div 
         initial={{opacity : 0 , y : 110}}
         whileInView={{opacity : 1 , y : 0}}
         transition={{duration : 1.2}}
         viewport={{once : true}} 
         className='container testimonails my-5'>
           <div className='text-center pt-4'>
                <h1>Customer Testimonials</h1>
                <p className='mt-2 mb-4 text-secondary'>What Our Customers Saying</p>
            </div>
            <div className='row justify-content-center'>
                {
                    testimonailsData.map((item , index)=>(
                        <div className='col-12 col-lg-4 text-center mt-3' key={index}>
                            <div className='testimonails-cards rounded p-3 m-2'>
                                <img className='mt-3' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User-image" />
                                <h4 className='my-1'>{item.name}</h4>
                                <h6 className='text-secondary'>{item.role}</h6>
                                {
                                    Array(item.stars).fill().map((element , indx)=>(
                                        <FontAwesomeIcon className='text-warning' icon={faStar} key={indx} />
                                    ))
                                }
                                <p className='p-3 my-2 mb-4 text-secondary'>{item.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
         </motion.div>
        </>
    );
}
 
export default Testimonials;