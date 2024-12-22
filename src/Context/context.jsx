import { createContext, useState } from "react";

export const context = createContext()

const ContextProvider = (props) =>{

    const [user , setUser] = useState(false)
    const [showLogin , setShowLogin] = useState(false)
    const [login , setLogin] = useState('Login')
    const [password , setPassword] = useState('')
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [showNotif , setShowNotif] = useState(false)

    const contextValue = {
        user ,
        setUser ,
        showLogin , 
        setShowLogin ,
        login ,
        setLogin ,
        name ,
        setName ,
        email , 
        setPassword ,
        password , 
        setEmail , 
        showNotif ,
        setShowNotif
    }

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )

}

export default ContextProvider;