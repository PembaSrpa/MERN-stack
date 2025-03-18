import React, { useState } from 'react'
import Button from './Button'    
import img from '/src/assets/react.svg'   

const Form = ({initialTitle="Login"}) => {
    const [title, setTitle] = useState(initialTitle);
    const toggleForm = () => {
        setTitle(title === "Login" ? "Register" : "Login");
    }
    return (
    <> 
    <div className=' items-center border-2 rounded-md p-[1rem] w-xl ml-[40rem] mt-5' id='forrm'>
        {title === "Register" && <h1 className="text-6xl">Register Form</h1>}
        {title === "Login" && <h1 className="text-6xl">Login Form</h1>}
        <img src={img} />
        <form className='flex flex-col items-start mt-7 gap-3' action="">
            {title === "Register" && <>
                <span>Name: <input type='text' placeholder='John Doe' required/></span>
                <span>Number: <input type="number" placeholder='98********' required/></span>
                <span>Birthdate: <input type="date" name="bd"/></span>
                </>}
            <span>Email: <input type="text" placeholder="example@gmail.com" required/></span>
            <span>Password: <input type="password" placeholder="password" required/></span>
            {title === "Login" ? (
                <Button text="Login" colour="yellow"/>
            ): (
                <Button text="Register" colour="green"/>
            )}
            {title === "Login" ? (
                <a className="text-blue-500 hover:underline cursor-pointer" onClick={toggleForm}>Not Signed Up yet?</a>
            ) : (
                <a className="text-blue-500 hover:underline cursor-pointer" onClick={toggleForm}>Already have an account?</a>
            )}
        </form>        
    </div>
    </>
    )
}       

export default Form