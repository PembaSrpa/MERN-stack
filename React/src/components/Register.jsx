import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
    const init = {
        username: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    };
    const [formData, setFormData] = React.useState(init);
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData(init);
        toast.success("Form submitted successfully!");
    };
    console.log(formData);
    return (
        <>
            <div className='container mx-auto mt-5 flex flex-col items-center justify-center h-screen'>
                <h2 className='text-2xl font-bold mb-4'>Register Form</h2>
                <ToastContainer />
                <form
                    className='bg-yellow-200 rounded-2xl p-8 border-black border-2 w-[30vw]'
                    onSubmit={handleSubmit}
                >
                    <div className='mb-4'>
                        <label className='block text-sm text-gray-700'>
                            Username :
                        </label>
                        <input
                            onChange={handleChange}
                            type='text'
                            className='w-full border border-gray-300 rounded-md p-2'
                            placeholder='Enter your name'
                            name='username'
                            value={formData.username}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm text-gray-700'>
                            Email :
                        </label>
                        <input
                            onChange={handleChange}
                            type='email'
                            className='w-full border border-gray-300 rounded-md p-2'
                            placeholder='Enter your email'
                            name='email'
                            value={formData.email}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm text-gray-700'>
                            Password :
                        </label>
                        <input
                            type='password'
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-md p-2'
                            placeholder='Enter your password'
                            name='password'
                            value={formData.password}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm text-gray-700'>
                            Address :
                        </label>
                        <input
                            type='address'
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-md p-2'
                            placeholder='Enter your address'
                            name='address'
                            value={formData.address}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm text-gray-700'>
                            Phone :
                        </label>
                        <input
                            type='number'
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-md p-2'
                            placeholder='Enter your phone number'
                            name='phone'
                            value={formData.phone}
                            required
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <Link to='/'>
                    <button>Home</button>
                </Link>
            </div>
        </>
    );
};

export default Register;
