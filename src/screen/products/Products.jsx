import React from 'react'
import './products.css'
import tshirt from '../../images/tshirt.webp'
import Navbar from '../../components/navbar/Navbar'
function Products(){
  return (
    <div>
        <div className='products-header-wrapper'>
            <div className='products-header-overlay'>
               <Navbar/>
               <div className='text-center'>
                    <h1 className='align-bottom' style={{paddingTop:"200px"}}>Products</h1>
               </div>
            </div>
            <div className='products-list-wrapper'>
               <div className='container'>
               <div className='row mt-5'>
                    <div className='col-md-3'>
                    <div className='products-card-wrapper p-2'>
                        <div class="products-card p-2" data-name='p-1' style={{width: "18rem",color:"black"}}>
                           <img class="card-img-top" src={tshirt} alt="Card image cap"/>
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='col-md-3'>
                    <div className='products-card-wrapper p-2'>
                    <div class="products-card p-2" style={{width: "18rem",color:"black"}}>
                    <img class="card-img-top" src={tshirt} alt="Card image cap"/>
                    <div class="card-body">
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className='col-md-3'>
                    <div class="products-card" style={{width: "18rem",color:"black"}}>
                    <img class="card-img-top" src={tshirt} alt="Card image cap"/>
                    <div class="card-body">
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-md-3'>
                    <div class="products-card" style={{width: "18rem",color:"black"}}>
                    <img class="card-img-top" src={tshirt} alt="Card image cap"/>
                    <div class="card-body">
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                    </div>
               </div>
               <div className='products-card-preview-wrapper'>
                <div className="products-card-preview active" data-target='p-1'>
                <i class="fa-solid fa-xmark"></i>
                    <img src={tshirt} alt="" />
                    <h3>T Shirt</h3>
                    <div className='stars'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star-half'></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div className='products-price'>Rs.200</div>
                    <div className='products-btn' style={{width:"100%"}}>
                        <button className='btn-enquire me-2' style={{width:"45%"}}>Enquire</button>
                        <button className='btn-cart' style={{width:"45%"}}>Add to Cart</button>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Products