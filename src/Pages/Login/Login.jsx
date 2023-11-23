import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

import SocialLogin from '../Shard/SocialLogin/SocialLogin';


const Login = () => {

    
    const [disabled,setDisable]=useState(true)
    const {signIn}=useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    console.log('state in the location',location.state)

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
           const user = result.user
           console.log(user)
           Swal.fire({
            title: "User Login Successfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
            
          });
          navigate(from, { replace: true });
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const handleValidateCaptcha = e =>{
        const user_captcha_value = e.target.value;
        // console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else{
            setDisable(true)
        }
   

    }
    return (
        <>
        <Helmet>
           <title>Bistro Boss Restaurant | Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
            
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className='text-center text-3xl font-bold text-purple-500 italic'>Please Login!!!</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="input this captcha" className="input input-bordered" required />
                            
                            
                            
                        </div>
                        <div className="form-control mt-6">
                            
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    
                    <p className='text-center mb-5 text-lg'>New here ? <Link to='/signup' className='font-semibold'>Create a New Account</Link></p>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
        </>
    );
};

export default Login;