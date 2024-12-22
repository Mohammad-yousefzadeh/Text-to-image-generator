import image from '../../Assests/medium.webp' 
import './description.css'
import { motion } from "motion/react"

const Description = () => {
    return (
        <>
          <motion.div 
          initial={{opacity : 0 , y : 110}}
          whileInView={{opacity : 1 , y : 0}}
          transition={{duration : 1.2}}
          viewport={{once : true}} 
          className='container my-5'>
            <div className='text-center'>
                <h1 className='mt-5'>Create AI Image</h1>
                <p className='mt-2 mb-2 mb-lg-4 text-secondary'>Turn your imagination into visuals</p>
            </div>
            <div className='row justify-content-center flex-wrap-reverse py-2 py-lg-4'>
                <div className='col-12 col-lg-5 description-image-box'>
                    <img src={image} className=' description-image' alt="Description-image" />
                </div>
                <div className='col-12 col-lg-7 mt-3 p-3'>
                    <h2>Introducing an AI-powered text to image generator</h2>
                    <p className='text-secondary my-3 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum deleniti porro, nulla tempore odit voluptatum soluta a amet unde
                        minus aperiam deserunt quos magnam ex odio fugiat doloribus error dolores facilis accusantium dolorum vitae velit modi. Nobis
                        rerum est nam tempora beatae voluptatibus quos excepturi iure non, corporis, sit deserunt!
                    </p>
                    <p className='text-secondary mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum deleniti porro, nulla tempore odit voluptatum soluta a amet unde
                        minus aperiam deserunt quos magnam ex odio fugiat doloribus error dolores facilis accusantium dolorum vitae velit modi. Nobis
                        rerum est nam tempora beatae voluptatibus quos excepturi iure non, corporis, sit deserunt!
                    </p>
                </div>
            </div>
          </motion.div>
        </>
    );
}
 
export default Description;