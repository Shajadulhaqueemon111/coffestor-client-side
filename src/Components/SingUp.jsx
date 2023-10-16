import React, {  useContext } from 'react';
import { AuthContext } from './Auth/AuthProvider';
import Swal from 'sweetalert2';

const SingUp = () => {

    const {creatUser}=useContext(AuthContext)

    const handelSingUp=(e)=>{
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value
       
       console.log(email,password)
       

        creatUser(email,password)
        .then(res=>{
            console.log(res.user)
            const createTime=res.user?.metadata?.creationTime;
        const user={email,createTime}
        console.log(user)

            fetch('https://coffe-stall-server-1-nry1gwko2-md-emons-projects.vercel.app/users',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Sing-Up sucessfully',
                        showConfirmButton: false,
                        timer: 1500,
                      })
                }
            })
        })
        .catch(error=>{
            console.log(error)
            alert('Firebase: Error (auth/email-already-in-use)') 
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Sing-Up</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelSingUp} className="card-body">
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
                <button className="btn btn-primary">Sing-Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SingUp;