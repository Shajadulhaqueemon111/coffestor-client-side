import React, { useContext } from 'react';
import { AuthContext } from './Auth/AuthProvider';


const SingIn = () => {
const {userSingIn}=useContext(AuthContext)
    const handelSingIn=(e)=>{
        e.preventDefault()

        const password=e.target.password.value;
        const email=e.target.email.value;

    console.log(password,email)

        userSingIn(email,password)
        .then(res=>{
            console.log(res.user)
            

            const user={email,
                lastLogAt:res?.user?.metadata?.lastSignInTime
                }
            console.log(user)

            fetch('https://coffe-stall-server-1-nry1gwko2-md-emons-projects.vercel.app/users',{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",

                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sing-In</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelSingIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sing-In</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingIn;