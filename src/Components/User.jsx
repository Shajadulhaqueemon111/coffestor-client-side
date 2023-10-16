import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = () => {

    const userLoad=useLoaderData()

    const[users,setUser]=useState(userLoad)

    const handelDelete=(id)=>{
        fetch(`https://coffe-stall-server-1-nry1gwko2-md-emons-projects.vercel.app/users/${id}`,{
            method:"DELETE",

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  const remaining=users.filter(user=>user._id !== id)
                  setUser(remaining)
            }
        })

    }
    return (
        <div>
            <h2>User Data:{userLoad.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        
        <th>Created</th>
        <th>LastloAt</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map(load=>
            <tr key={load._id}>
        <th>1</th>
        <td>{load.email}</td>
        <td>{load.createTime}</td>
        <td>{load.lastLogAt}</td>
       

       
        <td>
            <button onClick={()=>handelDelete(load._id)} className='btn btn-accent'>X</button>
        </td>
      </tr>)
     }
      
    
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;