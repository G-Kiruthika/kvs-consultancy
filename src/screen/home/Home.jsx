import React, { useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './home.css'
import home1 from '../../images/home1.jpg'
import { InlineIcon } from '@iconify/react';
import { Helmet } from 'react-helmet';
function Home() {
  const [cut,setCut] = useState(false);
  const [iron,setIron] = useState(false);
  const [pack,setPack] = useState(false);

  return (
    <div>
      <div className='home-wrapper'>
          <div className='home-overlay'>
        <div className='header'>
            <Navbar/>
        </div>
        <div className='home-head-wrapper'>
          <div className='row'>
            <div className=' col-md-6 d-flex justify-content-end' >
              <div className='home-head-img m-5'>
                <img src={home1} alt=""  width="684" height="1024" 
                sizes="(max-width:684px) 100vw, 684px"/>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='home-head-title-wrapper'>
              <div className='home-head-title mt-5  justify-content-start'>
               <b><h1 className='' style={{fontSize:"65px",fontWeight:"700"}}>High Quality Textile and Garments</h1></b> 
               <p style={{fontSize:"15px",fontWeight:"200"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam, aut deserunt molestias dolor 
                impedit ad culpa cum harum quidem 
                labore eius mollitia delectus alias veniam illum minima quas earum.</p>
                <div className='buttons'>
              <button className='btn1'>Learn More</button>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
              
        </div>
        </div>
        <div className='home-content-wrapper'>
        <div className='home-content w-75 m-auto'>
          <h2 className='text-center mt-5'>What We Do</h2>
          <p className='m-5 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet eum iusto dolor possimus natus, 
          libero iste, blanditiis molestiae numquam ullam, 
          alias et corporis itaque explicabo. Dolorem optio ullam id. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro voluptas veritatis impedit tempora in
           pariatur obcaecati consequatur dolorem error tenetur, laudantium rerum tempore, 
          corporis distinctio nulla unde, culpa maxime!</p>
        
        
        <hr />
        </div>
      <div className='home-services-wrapper'>
        <div className='home-services-overlay'>
          <div className='home-services container'>
            <div className='home-sevices-header'>
              <div className='row'>
                <div className='col-md-6'>
             <div className='home-services-title'>
              <b><h1 className='pl-5 pt-5' style={{fontSize:"60px"}}>Great fabrics, amazing Products</h1></b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ea veniam maiores repellat architecto,
                 neque porro fuga commodi placeat molestiae deserunt doloribus magnam dolores.
                 Corrupti, sed blanditiis! Aliquid, exercitationem totam.</p>
             </div>
             </div>
             <div className='col-md-6'>
             <div className='p-5'>
                 <button className='home-services-btn mt-5'>Learn More</button>
             </div>
             </div>
             </div>
             </div>
             <div className='home-services-cards pt-5'>
              <div className='row'>
              <div className='col-md-4' >
              <div className='home-services-card1'>
              <div class="home-card" style={{width:"20rem",height:"25rem",backgroundColor:"#4c4452"}}>
                   <div class="card-body" >
                    <div className='home-card1-icon rounded' style={{width:"50px",height:"50px",backgroundColor:"#dcd3e4"}}>
                      <InlineIcon style={{color:"#4c4452",fontSize:"36px"}} icon="mdi:scissors-cutting"/>
                    </div>
                     <h3 class="card-title">Cutting Section</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6 className='home-card-learn-more' onClick={(e)=>{e.preventDefault();setCut(true)}}>Learn more</h6>
                   </div>
                   </div>
              </div>
             </div>
              <div className='col-md-4' >
              <div className='home-services-card2'>
              <div class="home-card"  style={{width:"20rem",height:"25rem",backgroundColor:"transparent",borderBlockColor:"white"}}>
                   <div class="card-body" >
                   <div className='home-card1-icon rounded' style={{width:"50px",height:"50px",backgroundColor:"#4c4452"}}>
                      <InlineIcon style={{color:"#dcd3e4",fontSize:"36px"}} icon="icon-park-solid:iron-two"/>
                    </div>
                     <h3 class="card-title">Ironing Section</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6 className='home-card-learn-more' onClick={(e)=>{e.preventDefault();setIron(true)}}>Learn more</h6>

                   </div>
                   </div>
              </div>
             </div>
              <div className='col-md-4' >
             <div className='home-services-card3'>
              <div class="home-card"  style={{width:"20rem",height:"25rem",backgroundColor:"#4c4452"}}>
                   <div class="card-body" >
                   <div className='home-card1-icon rounded' style={{width:"50px",height:"50px",backgroundColor:"#dcd3e4"}}>
                      <InlineIcon style={{color:"#4c4452",fontSize:"36px"}} icon="mdi:scissors-cutting"/>
                    </div>
                     <h3 class="card-title">Packing Section</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6 className='home-card-learn-more' onClick={(e)=>{e.preventDefault();setPack(true)}}>Learn more</h6>

                   </div>
                   </div>
              </div>
             </div>
             </div>
             </div>
          </div>

        </div>
        </div>
        
      </div>
      <div>
      </div>
      
      <div className='home-card-preview-wrapper active'>
      {cut && 
        <div className="home-card-preview active">
          <i class="fa-solid fa-xmark" onClick={()=>setCut(false)}></i>
            <h3>Cutting Section</h3>    
            <p className='home-card-preview-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque mollitia hic quae, 
              velit ex nesciunt maxime voluptas similique aspernatur reiciendis cum repellendus 
              modi delectus magni soluta error tenetur laborum unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sed laudantium maiores necessitatibus ipsam ex ea, eveniet error assumenda, adipisci qui ipsum omnis, 
              impedit tempora 
              veritatis placeat iusto eligendi vero voluptatum.</p>
        </div>
        }
        {iron &&
        <div className="home-card-preview active">
          <i class="fa-solid fa-xmark" onClick={()=>setIron(false)}></i>
            <h3>Ironing Section</h3>    
            <p className='home-card-preview-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque mollitia hic quae, 
              velit ex nesciunt maxime voluptas similique aspernatur reiciendis cum repellendus 
              modi delectus magni soluta error tenetur laborum unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sed laudantium maiores necessitatibus ipsam ex ea, eveniet error assumenda, adipisci qui ipsum omnis, 
              impedit tempora 
              veritatis placeat iusto eligendi vero voluptatum.</p>
        </div>
        }
        {pack &&
        <div className="home-card-preview active" >
          <i class="fa-solid fa-xmark" onClick={()=>setPack(false)}></i>
            <h3>Packing Section</h3>    
            <p className='home-card-preview-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque mollitia hic quae, 
              velit ex nesciunt maxime voluptas similique aspernatur reiciendis cum repellendus 
              modi delectus magni soluta error tenetur laborum unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sed laudantium maiores necessitatibus ipsam ex ea, eveniet error assumenda, adipisci qui ipsum omnis, 
              impedit tempora 
              veritatis placeat iusto eligendi vero voluptatum.</p>
        </div>
         }
      </div>
    </div>
  )
}

export default Home