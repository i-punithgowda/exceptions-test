import React from 'react'
import Alien from '../assets/svg/alien.svg'
import {Link} from 'react-router-dom'

function WorkInProgress() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw',flexDirection:'column'}}>
    <img src={Alien} alt="work in progress" style={{width:'400px' , height:'400px'}} />
      <h1 className='text-3xl font-bold'>Work in progress</h1>
      <Link to="/"><button className='btn btn-primary btn-outline mt-8 btn-wide'>Go back </button></Link>
    </div>
  )
}

export default WorkInProgress
