import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {
    const navigate= useNavigate();
    const[showPassword,setShowPassword]=useState(false);

    const passwordVisibility=()=>{
        setShowPassword(!showPassword);
    }



    const goToProfile=()=>{
        navigate('/profile')
    }


  return (
    <div className=' flex justify-center bg-customWhite'>
    <div className=' flex flex-col h-[950px] border w-[448px] bg-white mt-[70px] mb-[70px] rounded-xl shadow-lg'>
        <div className=' border w-[100px] h-[100px] rounded-full mt-[88px] ml-[174px] bg-customWhite'></div>
        <div className='mt-[30px] ml-[190px]'><p className=' text-2xl'>Login</p></div>
        <div className='flex items-center ml-[50px] mr-[50px] justify-between mt-[50px]'>
            <button className=' flex justify-evenly items-center w-[154px] h-[50px] bg-customWhite rounded-lg'><FcGoogle size={24} />Google</button>
            <button className=' flex justify-evenly items-center w-[154px] h-[50px] bg-customWhite rounded-lg'> <RiFacebookFill size={24} />Facebook</button>
        </div>
        <div className='flex justify-between items-center h-[22px] ml-[50px] mr-[50px] mt-[25px]'>
            <div className='w-[151px] border opacity-[10%] rotate-0 border-black '></div>
            <div>Or</div>
            <div className='w-[151px] border opacity-[10%] rotate-0 border-black '></div>
        </div>
        <div className='flex flex-col h-auto mr-[50px] ml-[50px] mt-3 '>
            <div className='flex flex-col mt-7'>
                <p>Email Address</p>
                <input type='email' className='h-[50px] bg-customWhite rounded-lg mt-2 p-4' required/>
            </div>
            <div className='flex flex-col mt-7 relative'>
            <p>Password</p>
            <input
              type={showPassword ? 'text' : 'password'}
              className='h-[50px] bg-customWhite rounded-lg mt-2 p-4 pr-10'
              required
            />
            <div className='absolute inset-y-0 right-0 flex items-center pr-3 mt-8' onClick={passwordVisibility}>
              {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between mr-[50px] ml-[50px]'>
        <div className='flex h-[44px]  mt-[10px]  items-center '>
            <input type='checkbox'  className="form-checkbox h-[15px] w-[15px] cursor-pointer text-blue-600"/>
            <p className=' text-[14px] ml-[10px]'>Remember me</p>
        </div>
        <div className='flex items-center justify-center mt-[6px] cursor-pointer' ><p className='text-[14px] font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>Reset Password?</p></div>
        </div>
        <div className='flex ml-[50px] mr-[50px]'>
        <button onClick={goToProfile} className=' flex items-center justify-center w-[348px] h-[50px] mt-[40px] bg-yellow-400 rounded-lg'><p className=' font-semibold'>Login</p></button>
        </div>
        <div className='flex items-center ml-[50px] mr-[50px] justify-center mt-[27px]'><p>Don't have account yet? <Link to='/' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">New Account</Link></p></div>
    </div>
    </div>
  )
}

export default Login