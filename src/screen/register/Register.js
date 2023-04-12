import React, {useState} from 'react'
import './register.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Register = () => {
    const[name,setName]= useState("")
    const[email,setEmail]= useState("")
    const[password,setPassword]= useState("")
    const[phone,setPhone]= useState("")
    const[address,setAddress]= useState("")


    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name,email,password,phone,address);
        toast.success('Registration Successfull');
    };
  return (
    <div>
        <div className='register-nav'>
        <Navbar/>
        </div>
        <div className='register-wrapper'>
           <h1>Register Form</h1>
           <div className='register-form'>
           <form onSubmit={handleSubmit}>
           <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
                className="form-control" id="exampleInputName" required />
            </div>
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
            <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}
                className="form-control" id="exampleInputName" required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                <textarea type="text" value={address} onChange={(e)=>setAddress(e.target.value)}
                className="form-control" id="exampleInputName"  required/>
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

export default Register