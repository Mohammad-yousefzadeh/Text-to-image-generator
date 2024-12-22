import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import './notification.css'
import { context } from "../../Context/context";
import { motion } from "motion/react"

const Notification = () => {

    const {showNotif , login} = useContext(context)

    return (
        <>
         <motion.div
         initial={{opacity : 0 , y :60}}
         whileInView={{opacity : 1 , y : 0}}
         transition={{duration : 1}}
         viewport={{once : true}}
         className={`notification ${showNotif ? 'notif-display' : ' '}`}>
            <div className="d-flex position-relative h-100 align-items-center pl-1">
                <FontAwesomeIcon icon={faCheckCircle} className="text-success px-2" />
                <span className="text-secondary">{login === 'Login' ? 'You have Logged in Succesfully' : 'You have Signed UP Succesfully'}</span>
            </div>
            <div className="notif-bar"></div>
         </motion.div>
        </>
    );
}
 
export default Notification;