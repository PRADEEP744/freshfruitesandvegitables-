import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
export default function Signup() {
  let nav= useNavigate();
  return (
    <div className="header">

      <div className="body">
      <h1 className='h1'>SignUp</h1>

      <label className='lable1' >Name</label>
      <input type="text" placeholder="Enter Your Name" id="input1"/><br/><br/>

      <label className='lable1' >Password </label>
      <input type="text" placeholder="Create Your Password" /><br /><br />

      <label className='lable1' >Password </label>
      <input type="text" placeholder="Confirm Password" /><br /><br />

      <input type="checkbox" className='lable1'/>
      <label >Remember me</label>

      <button className='button2'>Sign</button><br /><br />

      <label className='lable1'>Aldready have an account?</label>
      <label className='signup' onClick={()=>{nav('/')}}>Login</label><br/><br/>
      </div>

    </div>
  )
}
