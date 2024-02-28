import './Login.css'
export default function Login() {

  return (
    <div className="header">

      <div className="body">
      <h1 className='h1'>Login</h1>

      <label className='lable1' >Name</label>
      <input type="text" placeholder="Enter Your Name" id="input1"/><br/><br/>

      <label className='lable1' >Password </label>
      <input type="text" placeholder="Enter Your Password" /><br /><br />

      <input type="checkbox" className='lable1'/>
      <label >Remember me</label>
      <label className='forgot'> Forgot password ?</label><br/><br/>

      <button className='button2'>login</button><br /><br />

      <label className='lable1'>Don't have an account?</label>
      <label className='signup'>Signup</label><br/><br/>
      </div>

    </div>
  )
}
