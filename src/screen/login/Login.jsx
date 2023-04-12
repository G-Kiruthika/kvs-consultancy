import React , {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import './login.css'
import Footer from '../../components/footer/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Login() {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(email,password);
        toast.success('Login Successfull');
    };
  return (
    <div>
        <div className='login-nav'>
            <Navbar/>
        </div>
        <div className='login-wrapper'>
            <h1>Login Form</h1>
            <div className='login-form'>
            <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                className="form-control" id="exampleInputEmail1" required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
           <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                className="form-control" id="exampleInputPassword1" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          <ToastContainer/>
            </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Login