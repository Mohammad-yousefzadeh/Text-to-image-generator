import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons'
import { faTwitter , faInstagram , faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
         <div className='d-flex justify-content-around pt-4 pb-3 align-items-center flex-wrap-reverse'>
            <div className='d-flex align-items-center my-3 my-lg-0 footer-copyright'>
                <h3><FontAwesomeIcon icon={faMagicWandSparkles} />Imagify</h3>
                <span className='mx-3'>|</span>
                <strong className='text-secondary'>All right reserved. Copyright @Imagify</strong>
            </div>
            <div className='d-flex'>
                <FontAwesomeIcon className='social-media-brands' icon={faFacebook} />
                <FontAwesomeIcon className='social-media-brands mx-3' icon={faInstagram} />
                <FontAwesomeIcon className='social-media-brands' icon={faTwitter} />
            </div>
         </div>
        </>
    );
}
 
export default Footer;