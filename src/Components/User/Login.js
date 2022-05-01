import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit =(data)=>{
        signInWithEmailAndPassword(data.email,data.pwd)
        .then(()=>{
            console.log(user);
        })
    }
    return (
        <>
            <div className='text-3xl uppercase text-center py-1'>
            <h1>LOG IN TO YOUR ACCOUNT</h1>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className='rounded shadow bg-green-400 p-4 text-white uppercase text-3xl w-4/5 lg:w-2/5 mx-auto  mt-10'>
            <div className=''>
                <label className='block' htmlFor="email">Email</label>
                <input {...register('email',{required:true})} className='  text-2xl w-full rounded text-black outline-none  py-1 px-2 ml-2 mt-2' type="email" placeholder='Enter your email' />
                <span className='text-blue-500 italic text-xs block px-2 py-2'>{errors.email && 'Plz Enter your email'}</span>
            </div>
            <div className='mt-2'>
                <label className='block' htmlFor="password">Password</label>
                <input {...register('pwd',{required:true})} className='  text-2xl w-full rounded text-black outline-none   py-1 px-2 ml-2 mt-2' type="password" placeholder='Password' />
                <span className='text-blue-500 italic text-xs block px-2 py-2'>{errors.pwd && 'Plz Enter your password'}</span>
            </div>
            <div>
                <span className='text-xs text-white'>{error?.message}</span>
            </div>
            <div className='flex items-center my-2'>
                <button className='btn border-none outline-none btn-secondary  mx-2 block my-2'>Login</button>
                <Link to='/signup' className='text-sm link text-blue-500'>Create an account</Link>
            </div>
        </form>
        </>
    );
};

export default Login;