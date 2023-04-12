import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { InlineIcon } from '@iconify/react';
import {Link} from 'react-router-dom';
import contactOverlay from "../../images/designers-contact.jpg";
import './contact.css'
function Contact() {
  return (
    <div>
      <div className='contact-header-wrapper'>
      <div className='contact-header-overlay'>

         <Navbar/>
           <div className='contact-header-title' style={{color:"white"}}>
            <h1 className='text-center font-weight-bold'>Contact Us</h1>
           </div>
           </div>
        </div>
        <div className='contact-content container'>
            <div className='contact-content1'>
              <div className='contact-cards mt-5'>
              <div className='contact-cards-overlay'>
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <div className='contact-card1 text-center'>
                    <div className="card" style={{width: "27rem",height:"18rem",color:"white",backgroundColor:"rgba(76,68,82,0.8)"}}>
                      <div className="card-body">
                      <div className='rounded' style={{height:"50px",width:"50px",backgroundColor:"#dcd3e4",marginLeft:"auto",marginRight:"auto"}}>
                          <InlineIcon style={{height:"30px",width:"30px",color:"#4c4452",marginTop:"5px"}} icon="material-symbols:phone-in-talk-outline" alt="" />
                      </div>
                        <h5 className="card-title pt-4">+91 7010605192</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='contact-card-btn d-flex'>
                          <span><p>Learn more </p></span>
                           <span className='mt-1'>
                          <InlineIcon style={{fontSize:"20px"}}icon="ic:baseline-arrow-right-alt"/>
                          </span>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='contact-card2 text-center' style={{border:"none"}}>
                    <div class="card" style={{width: "27rem" ,height:"18rem",backgroundColor:"#eaeaea"}}>
                    <div class="card-body">
                    <div className='rounded' style={{height:"50px",width:"50px",backgroundColor:"#4c4452",marginLeft:"auto",marginRight:"auto"}}>
                          <InlineIcon style={{height:"30px",width:"30px",color:"#dcd3e4",alignItems:"center",marginTop:"5px"}} icon="tabler:mail" alt="" />
                      </div>
                       <h5 class="card-title pt-4">kvsgarments@outlook.com</h5>
                      <p class="card-text" style={{color:"#4c4452"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className='contact-card-btn' >
                          <span><p>Learn more </p></span>
                           <span className='mt-1'>
                          <InlineIcon style={{fontSize:"20px"}}icon="ic:baseline-arrow-right-alt"/>
                          </span>
                        </div>
                      </div>
                   </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='contact-card3 text-center'>
                    <div class="card" style={{width: "27rem",height:"18rem",color:"white",backgroundColor:"rgba(76,68,82,0.8)"}}>
                    <div class="card-body">
                    <div className='rounded' style={{height:"50px",width:"50px",backgroundColor:"#dcd3e4",marginLeft:"auto",marginRight:"auto"}}>
                          <InlineIcon style={{height:"30px",width:"30px",color:"#4c4452",alignItems:"center",marginTop:"5px"}} icon="material-symbols:location-on-outline-rounded" alt="" />
                      </div>
                         <h5 class="card-title pt-4">Tirupur</h5>
                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <div className='contact-card-btn d-flex'>
                          <span><p>Learn more </p></span>
                           <span className='mt-1'>
                          <InlineIcon style={{fontSize:"20px"}}icon="ic:baseline-arrow-right-alt"/>
                          </span>
                        </div>
                       </div>
                    </div>
                    </div>
                  </div>
              </div>
              </div>
              </div>
            </div>
            <div className='contact-form w-75 m-auto'>
              <div className='contact-form-head mt-5'>
                <h2 className='text-center' style={{color:"#4c4452",fontSize:"48px"}}>Get In Touch</h2>
                <p className='text-center' style={{color:"#7A7A7A"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Laborum recusandae rerum expedita ut ullam alias, id reiciendis accusantium nobis 
                tenetur quisquam, maxime incidunt qui?
                 Eveniet omnis dolorem quas error cum?</p>
              </div>
              <div className='contact-form-content '>
              <form>
                <div class="form-group p-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                <div class="form-group p-3">
                    <input type="password" class="form-control" id="exampleInputName1" placeholder="Name"/>
                 </div>
                 <div class="form-group p-3">
                    <input type="text" class="form-control" id="exampleInputPhone1" placeholder="Phone"/>
                 </div>
                 <div class="form-group p-3">
                    <textarea name="" class="form-control" id="exampleInputMessage1" cols="30" rows="5" placeholder="Message"></textarea>
                 </div>
                 <div className='contact-form-btn'>
                <button type="submit" class="contact-submit-btn p-3 ">Submit</button>
                </div>
              </form>
              </div>
            </div>
            <div className='contact-map mt-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.399902246021!2d77.35659371493506!3d11.157997892063296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9075cf0d44b43%3A0x4d62b884585bc432!2sKVS%20GARMENTS!5e0!3m2!1sen!2sin!4v1680585826857!5m2!1sen!2sin"
             style={{width:"100%",height:"700px",border:"0"}} 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className='contact-footer-wrapper' style={{backgroundColor:"#4c4452"}}>
              <div className='contact-footer w-75 m-auto pt-5' style={{color:"white"}}>
                <div className='row pl-5'>
                  <div className='col-md-6 col-lg-5 col-12 ft-1'>
                       <h1 className='font-italic font-weight-bold' style={{fontStyle:"italic"}}>KVS GARMENTS</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit ullam, dolore placeat 
                        provident eos aspernatur hic omnis esse dicta tempore.
                         </p>
                        <div className='contact-footer-icon'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                  </div>
                  <div className='col-md-6 col-lg col-12 ft-2'>
                    <h5>Navigation</h5>
                    <ul>
                    <Link class="nav-link active mx-5" aria-current="page" to="/">Home</Link>
                    <Link class="nav-link mx-5" to="/about">About</Link>
                    <Link class="nav-link mx-5" to="/products">Products</Link>
                    <Link class="nav-link mx-5" to="/contact">Contact</Link>
      
                    </ul>
                  </div>
                  <div className='col-md-6 col-lg col-12 ft-3'>
                  <h5>Work Hours</h5>
                  <i class="fa-regular fa-clock"></i>
                    &nbsp;8 AM - 6 PM, Mon - Sat
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Velit explicabo eveniet aut et, molestias</p>
                    <button className='contact-footer-btn' style={{fontWeight:"600"}}>
                    <i class="fa-solid fa-phone"></i>
                    &emsp;Call Us
                    </button>
                  </div>
                  <hr className='mt-5'/>
                  <p className='mt-5 text-center'>Copyright &copy; 2023 KVS Garments</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Contact