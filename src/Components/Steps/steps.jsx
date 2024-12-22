import './steps.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { stepData } from '../../Assests/assests';
import { motion } from "motion/react"

const Steps = () => {
    return (
        <>
         <div className='container-fluid mt-5'>
            <div className='row justify-content-center'>
                <motion.div 
                initial={{opacity : 0 , y : 110}}
                whileInView={{opacity : 1 , y : 0}}
                transition={{duration : 1.2}}
                viewport={{once : true}} 
                className='col-12 col-lg-6 mb-5'>
                    <div className='text-center'>
                        <h1 className='mt-5'>How it works</h1>
                        <p className='mt-2 mb-5 text-secondary'>Transform words into stunning images</p>
                    </div>
                    {
                        stepData.map((item , index)=>(
                            <div className='steps-boxes' key={index}>
                                <div className='align-self-center fonts-boxes'>
                                    <FontAwesomeIcon icon={item.icon} className='steps-fonts' />
                                </div> 
                                <div className='d-flex flex-column py-3 px-0 pl-4'>
                                    <h4>{item.title}</h4>
                                    <p className='text-secondary'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
         </div>
        </>
    );
}
 
export default Steps;