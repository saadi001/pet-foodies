import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Asset/icon/logo.png'
import { AuthContext } from '../../Contexts/AuthProvider';
import { MdReportGmailerrorred } from "react-icons/md";

const Login = () => {
     const { providerLogin, signIn } = useContext(AuthContext);
     const { register, handleSubmit, formState: { errors } } = useForm();
     const provider = new GoogleAuthProvider();
     const navigate = useNavigate();

     const handleGooglePopup = (provider) => {
          providerLogin(provider)
               .then(result => {
                    const user = result.user
                    console.log(user)
                    navigate('/')
               })
               .catch(error => {
                    console.error(error)
               })
     }

     const handleLogin = (data) =>{
         
          const {name, password} = data;
          console.log(name, password);
          signIn(name, password)
          .then(result=>{
               const user = result?.user;
               navigate("/")
               console.log(user);
          })
          .catch(error=>{
               console.log(error);
          })
          
     }

     return (
          <div className='flex justify-center items-center h-screen w-full'>
               <div className=''>
                    <div className='w-full flex justify-center'><Link to={'/'} className='w-28  mb-3'><img src={logo} alt="" /></Link></div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                         <div>
                              <label className="text-gray-700 ">Email</label>
                              <input {...register('name', { required: "This field is required." })}  type='email' className="block w-96 px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                              {errors.name && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.name?.message}</p>}
                         </div>

                         <div className='mt-5'>
                              <label className="text-gray-700 " for="username">Password</label>
                              <input {...register('password', { required: "This field is required." })}  type="password" className="block w-96 px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                              {errors.name && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.name?.message}</p>}
                         </div>
                         <button className='w-full py-2 my-2 bg-pink-600 rounded text-white mt-5' type='submit'>Log In</button>
                         <p className='my-3 text-center'>New here? <Link to={'/signup'} className='underline'>create account</Link></p>
                    </form>
                    <div onClick={() => handleGooglePopup(provider)} className='flex items-center gap-3 text-xl font-bold text-slate-700 border px-7 py-3 rounded-md bg-slate-500/20 cursor-pointer hover:border-blue-400/20'><FcGoogle className='text-3xl' /> Sign in with google</div>
               </div>
          </div>
     );
};

export default Login;