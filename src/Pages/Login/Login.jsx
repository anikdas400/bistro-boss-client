import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {

    const captchaRef = useRef(null)
    const [disabled,setDisable]=useState(true)
    const {signIn}=useContext(AuthContext)

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
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const handleValidateCaptcha=()=>{
        const user_captcha_value = captchaRef.current.value;
        // console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else{
            setDisable(true)
        }
   

    }
    return (
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
                            <input type="text" ref={captchaRef} name="captcha" placeholder="input this captcha" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
                            
                        </div>
                        <div className="form-control mt-6">
                            
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-5 text-lg'>New here ? <Link to='/signup' className='font-semibold'>Create a New Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;