import React, { useState } from 'react'
import Header from '../Header/Header'

const LogIn = () => {
    const [isSignIn, setIsSignIn] = useState(true)

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)

    }

    return (
        <div  >
            <Header />

            <div className="absolute">
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bgImg' />


            </div>



            <form className=' text-center p-12 bg-black opacity-90 w-1/3 rounded-md absolute my-36 mx-auto right-0 left-0'>
                <h1 className=' text-white my-2 mb-4 text-center  font-bold'>{isSignIn ? "Sign In" : "Sign Up"} </h1>
                {!isSignIn && (<input type='text' placeholder='Full Name' className=' p-2 m-2 w-52' />)}

                <br />
                <input type='text' placeholder='Email Address' className=' p-2 m-2 w-52' />
                <br />
                <input type='password' placeholder='Password' className=' p-2 m-2 w-52' />
                <br />
                <button className='p-2 m-2 w-52 font-bold bg-red-500 text-white rounded-md'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='text-white p-2 m-2  cursor-pointer' onClick={toggleSignIn}>{isSignIn ? "New to NetFlix ?  Sign Up " : "Already Register let's Sign In Now"}
                </p>

            </form>
        </div>
    )
}

export default LogIn
