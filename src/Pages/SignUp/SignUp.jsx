
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const {createUser}=useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
            const loggerUser = result.user
            console.log(loggerUser)
        })
    }



    return (
        <>
            <Helmet>
                <title>Bistro Boss Restaurant | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center mt-3">SignUp now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 font-semibold">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600 font-semibold">Email is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="Password" className="input input-bordered" />

                                {errors.password?.type === "required" && <p className="text-red-600 font-semibold">Password is required</p>
                                }
                                {errors.password?.type === "minLength" && <p className="text-red-600 font-semibold">Password must be 6 characters </p>
                                }

                                {errors.password?.type === "maxLength" && <p className="text-red-600 font-semibold">Password must be less then 20 characters</p>
                                }

                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}



                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp" />

                            </div>
                        </form>
                        <p className='text-center mb-5 text-lg'>Already registered? <Link to='/login' className='font-semibold'>Go to log in</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;