import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const AddCoffeCard = ({ coffe }) => {

    const { _id, name, chef, supplier, taste, category, details, photo } = coffe

    const handelDelete=(_id)=>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
              fetch(`https://coffe-stall-server-1-nry1gwko2-md-emons-projects.vercel.app/coffes/${_id}`,{
                method:"DELETE"
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

                }
            })
            }
          })

       
      }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full">
                   <div>
                   <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">{chef}</h2>
                    <h2 className="card-title">{supplier}</h2>
                    <h2 className="card-title">{taste}</h2>
                    <h2 className="card-title">{category}</h2>
                    <h2 className="card-title">{details}</h2>

                   </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical gap-2">
                            <button className="btn text-2xl font-bold  bg-[#D2B48C]"><GrView></GrView></button>
                           <Link to={`/updatecoffe/${_id}`}>
                           <button className="btn text-2xl font-bold"><FaEdit></FaEdit></button>
                           </Link>
                            <button
                            onClick={()=>handelDelete(_id)}
                            className="btn text-3xl font-bold"><AiTwotoneDelete></AiTwotoneDelete></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffeCard;