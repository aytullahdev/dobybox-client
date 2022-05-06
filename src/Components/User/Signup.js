import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import {  useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Signup = () => {
    const navigate= useNavigate();
    
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit =(data)=>{
        if(data.pwd!==data.cpwd){
            const notify = () => toast("Password Doesn't match");
            notify();
            return;
        }
        try{
            createUserWithEmailAndPassword(data.email,data.pwd,{sendEmailVerification:true})
            if(!loading){
                if(user){
                    navigate(from,{replace:true});
                    toast("Account Created Sucessfullly");
                    }
            }
        }catch(err){
            error.message="Some Error ";
        }
        
    
    }
   
    return (
      <>
        <div className='text-3xl uppercase text-center py-1'>
            <h1>Create a new  Account</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='rounded shadow bg-green-400 p-4 text-white uppercase text-3xl w-4/5 lg:w-2/5 mx-auto  mt-10'>
        <div className=''>
            <label className='block' htmlFor="email">Email</label>
            <input {...register('email',{required:true})} className='   text-2xl w-full rounded text-black outline-none  py-2 px-2 ml-2 mt-2' type="email" placeholder='Enter your email' />
            <span className='text-blue-500 italic text-xs block px-2 py-2'>{errors.email && 'Plz Enter your email'}</span>
        </div>
        <div className='mt-2'>
            <label className='block' htmlFor="password">Password</label>
            <input {...register('pwd',{required:true})} className='  text-2xl w-full rounded text-black outline-none   py-2 px-2 ml-2 mt-2' type="password" placeholder='Password' />
            <span className='text-blue-500 italic text-xs block px-2 py-2'>{errors.pwd && 'Plz Enter your password'}</span>
        </div>
        <div className='mt-2'>
            <label className='block' htmlFor="password">Confirm Password</label>
            <input {...register('cpwd',{required:true})} className='  text-2xl w-full rounded text-black outline-none   py-2 px-2 ml-2 mt-2' type="password" placeholder='Confirm Password' />
            <span className='text-blue-500 italic text-xs block px-2 py-2'>{errors.cpwd && 'Plz Enter your password'}</span>
        </div>
        <div>
       
            <span className='text-xs text-black'>{error?.message}</span>
        </div>
        <div className='flex items-center my-2'>
            <button className='btn border-none outline-none btn-secondary  mx-2 block my-2' type='submit'>Create</button>
            <Link to='/login' className='text-sm link text-blue-500'>Alrady have account</Link>
        </div>
        </form>
        </>
        
    );
};

export default Signup;