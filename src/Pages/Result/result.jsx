import './result.css'
import Image_1 from '../../Assests/medium.webp'
import { useState } from 'react';
import { motion } from "motion/react"

const Result = () => {

    const [image , setImage] = useState('/')
    const [isImageLoaded , setIsImageLoaded] = useState(false)
    const [loading , setLoading] = useState(false)
    const [input , setInput] = useState('')
   
    // const imageCreator = async (e) =>{
    //     console.log(input);
        
    //     if(input == ''){
    //         return 
    //     }
    //     const response = await fetch(
    //         'Api-address' ,
            
    //         {
    //             method : 'POST' ,
    //             headers :{
    //                 "Content-Type" : "application/json",
    //                 "Authorization": "Bearer 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" ,
    //                 "User-Agent" : "Chrome"
    //             },
    //             body:JSON.stringify({
    //                 prompt : `${input}`,
    //                 model: "dall-e-3",
    //                 n : 1 ,
    //                 size : "1024x1024"
    //             }),
    //         }
    //     );
    //     let data = await response.json()
    // }

    return (
        <>
         <div className='container-fluid result mt-5'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-9 col-lg-6 text-center'>
                   <motion.form  
                   initial ={{opacity : 0 , y : 60}}
                   animate ={{opacity : 1 , y : 0}}
                   transition={{delay : 0.3 , duration : 1}} >
                        <img src={Image_1} alt="Default-image" />
                        <div className={loading ? '' :  'd-none'}>
                            <span className='loading-bar'></span>
                            <p>Loading...</p>
                        </div>
                        {
                            isImageLoaded ? 
                            <div className='d-flex  justify-content-center my-4'>
                                <button className='result-btn bg-transparent border border-3 border-dark text-dark mr-3' onClick={()=>(
                                    setIsImageLoaded(false)
                                )}>Generate Another</button>
                                <a href={Image_1} download className='result-btn'>Download</a>
                            </div>
                            :
                            <div className='result-input mt-5 d-flex justify-content-between'>
                                <input onChange={(e)=>{
                                    setInput(e.currentTarget.value)
                                }} 
                                value={input}
                                className='text-white' type="text" placeholder='Describe what you want' />
                                <button onClick={()=>{        
                                    // imageCreator()
                                    setIsImageLoaded(true)
                                 }} className='result-btn'>Generate</button>
                            </div>
                        }
                   </motion.form>
                </div>
            </div>
         </div>
        </>
    );
}
 
export default Result;