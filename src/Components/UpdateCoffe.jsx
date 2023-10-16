import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffe = () => {
    
   const coffe=useLoaderData()
   const { _id, name, chef, supplier, taste, category, details, photo } = coffe
        const handelUpdateCoffe=(e)=>{
            e.preventDefault()
            const name=e.target.name.value 
            const chef=e.target.chef.value 
            const supplier=e.target.supplier.value 
            const taste=e.target.taste.value 
            const category=e.target.taste.value 
            const details=e.target.details.value 
            const photo=e.target.photo.value
    
            const UpdateCoffe={name,chef,supplier,taste,category,details,photo}
            console.log(UpdateCoffe)
    
            fetch(`https://coffe-stall-server-1-nry1gwko2-md-emons-projects.vercel.app/coffes/${_id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(UpdateCoffe)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Updated Successfully',
                        icon: 'success',
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        return (
            <div className='bg-[#F4F3F0] p-24  '>
                <h2 className='text-3xl font-bold'>Update New Coffee</h2>
                <p className='mb-4'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handelUpdateCoffe}>
                    {/* Form row */}
                    <div className=' md:flex gap-4'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Update Coffe Name</span>
                            </label>
                            <label className="input-group">
    
                                <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Update Chef Coffe</span>
                            </label>
                            <label className="input-group">
    
                                <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form row */}
                    <div className=' md:flex gap-4'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Update Supplier</span>
                            </label>
                            <label className="input-group">
    
                                <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Update Taste</span>
                            </label>
                            <label className="input-group">
    
                                <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form row */}
                    <div className=' md:flex gap-4'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Update Category</span>
                            </label>
                            <label className="input-group">
    
                                <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Update Details</span>
                            </label>
                            <label className="input-group">
    
                                <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form row */}
                    <div className=' md:flex gap-4'>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
    
                                <input type="text" name='photo' placeholder="Enter coffee Photo url" className="input input-bordered w-full" />
                            </label>
                        </div>
                       
                    </div>
                    <button className="btn mt-4 btn-block bg-[#D2B48C]">Add</button>
                </form>
            </div>
    );
};

export default UpdateCoffe;