import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import AddCoffeCard from './Components/AddCoffeCard'

function App() {
 
const lodedData=useLoaderData()

const[coffes,setCoffe]=useState(lodedData)


  return (
    <>
     
      <h1 className='text-3xl font-bold '>Coffe Shope Adda: {coffes.length}</h1>
      
      <div className='mb-3'>
      <Link className='text-2xl font-bold mt-4' to="/addcoffe"><button className='btn btn-accent '>Add Coffe</button></Link>
      </div>
      
      {/* <Link className='text-2xl font-bold gap-3' to="/updatecoffe"><button className='btn btn-accent'>Update Coffe</button></Link> */}
     <div className='grid md:col-span-2 lg:grid-cols-2 gap-3'>
      {
        coffes.map(coffe=><AddCoffeCard key={coffe._id} coffe={coffe}></AddCoffeCard>)
      }
     </div>
     
    </>
  )
}

export default App
