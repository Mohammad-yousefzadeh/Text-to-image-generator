import './app.css'
import Navbar from './Components/Navbar/navbar'
import { Route , Routes, Navigate } from 'react-router-dom';
import Main from './Components/Main/main';
import Steps from './Components/Steps/steps';
import Description from './Components/Description/description';
import Testimonials from './Components/Testimonials/testimonials';
import GenerateBtn from './Components/GenerateBtn/generateBtn';
import Footer from './Components/Footer/footer';
import Result from './Pages/Result/result';
import Pricing from './Pages/Pricing/pricing';
import { context } from './Context/context';
import Login from './Pages/Login/login';
import { useContext, useEffect } from 'react';
import SignUp from './Pages/Login/signUp';
import Notification from './Pages/LoginNotification/notification';

const App = () => {

    const {showLogin , login , user , setUser} = useContext(context)
    
    const token = localStorage.getItem('token')
    useEffect(()=>{
        if(!token){
            console.log('token no');
            setUser(false)
            return
        }
        console.log('token no');
        setUser(true)
    } , [token])

    return (
       <div className='background'>

            <Navbar />
            {
                showLogin ? login === 'Login' ? <Login /> : <SignUp /> : null
            }
            <Routes>
                <Route path='/' element={
                    <>
                     <Main />
                     <Steps />
                     <Description />
                     <Testimonials />
                     <GenerateBtn />
                     <Footer />
                    </>
                } />
                <Route path='/pricing' element={<Pricing />} />
                {/* {
                    user ?
                    <Route path='/result' element={<Result />} />
                    :
                    <Route path='/result' element={<Navigate to={'/'} replace/>} />
                } */}
                <Route path='/result' element={user ? <Result /> : <Navigate to={'/'} replace/>} />
                <Route path='*' element={<Navigate to={'/'} replace/>} />
            </Routes>
            <Notification />
       </div>
    );
}
 
export default App;