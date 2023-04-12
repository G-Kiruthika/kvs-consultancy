import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { InlineIcon } from '@iconify/react';
import './about.css'
import aboutimg from '../../images/home1.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vision from '../../images/bixby-vision.svg'
import aboutAdv from '../../images/pexels-tim-mossholder-3091200.jpg'
function About() {
  return (
    <div>
      <div style={{backgroundColor:"#877e8a"}}>
        <Navbar/>
        </div>
        <div className='about-header'>
            <h1 className='about-title text-center font-weight-bold ' style={{color:"white"}}>About Us</h1>
        </div>
        <div className='about-content ml-5 mr-5 h-75' >
            <Container>
                <Row>
                    <Col xs={4}>
                         <img className="py-5" src={aboutimg} alt="" height="600x"/>
                    </Col>
                    <Col className='pt-5 pl-5 border-0'>
                        <h5>About Us</h5>
                        <h2 className="font-weight-bold">Making Every Fabric Count</h2>
                        <p className="font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias saepe tenetur numquam obcaecati dolor 
                            repellendus, at facere ducimus suscipit porro doloremque eius minima? 
                            Dolorem tempore et beatae mollitia fugit ipsa.</p>
                        <div className='about-cards'>
                            <Container>
                                <Row>
                                <Col>
                            <span className='about-card1'>
                            <div class="card my-4" style={{width: "20rem",height:"20rem", backgroundColor:"#4c4452",color:"white"}}>
                                <div class="card-body">
                                    <div className='rounded' style={{height:"50px",width:"50px",backgroundColor:"#dcd3e4"}}>
                                    <img className="text-center" style={{height:"30px",width:"30px"}} src={vision} alt="" />
                                    </div>
                                   <h3 class="card-title">Vision</h3>
                                   <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam dignissimos 
                                   quis fuga eaque velit impedit, dolor laudantium suscipit deleniti! Quam explicabo et ipsum velit culpa, 
                                   dignissimos tenetur dolorem corrupti.</p>
                                </div>
                            </div>
                            </span>
                            </Col>
                            <Col>
                            <span className='about-card2'>
                            <div class="card my-4" style={{width: "20rem",height:"20rem", backgroundColor:"#dcd3e4",border:"none"}}>
                                <div class="card-body">
                                    <div className='rounded' style={{height:"50px",width:"50px",backgroundColor:"#4c4452"}}>
                                    <InlineIcon className="light" style={{height:"30px",width:"30px",color:"white",alignItems:"center"}} icon="simple-line-icons:rocket" alt="" />
                                    </div>
                                   <h3 class="card-title">Mission</h3>
                                   <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam dignissimos 
                                   quis fuga eaque velit impedit, dolor laudantium suscipit deleniti! Quam explicabo et ipsum velit culpa, 
                                   dignissimos tenetur dolorem corrupti.</p>
                                </div>
                            </div>
                            </span>
                            </Col>
                            </Row>
                            </Container>
                        </div>

                    </Col>               
                </Row>
            </Container>
            <div className='about-adv' style={{height:"600px",color:"white",backgroundImage:{aboutAdv}}}>
                <div className='ml-5 mr-5'></div>
                 <div className='about-adv-title'>
                    <h3 className='font-weight-light text-center py-5'>Our Features</h3>
                    <h1 className='font-weight-bold text-center '>Advantages From Us</h1>
                    <Container>
                        <Row>
                            <Col>
                            <div className='rounded my-5 mx-5' style={{height:"50px",width:"50px",backgroundColor:"#4c4452"}}>
                                    <InlineIcon className="light" style={{height:"30px",width:"30px",alignItems:"center"}} icon="fluent:savings-24-regular" />
                            </div>
                            <h3 className='' >Affordable Pricing</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, molestias 
                                placeat dolorem modi nobis, 
                                perferendis harum commodi enim maxime,</p>
                            </Col>
                            <Col>
                            <div className='rounded my-5 mx-5' style={{height:"50px",width:"50px",backgroundColor:"#4c4452"}}>
                                    <InlineIcon className="light" style={{height:"30px",width:"30px",alignItems:"center"}} icon="uil:thumbs-up"/>
                            </div>
                            <h3 className='' >Top Quality</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, molestias 
                                placeat dolorem modi nobis, 
                                perferendis harum commodi enim maxime,</p>
                            </Col>
                            <Col>
                            <div className='rounded my-5 mx-5' style={{height:"50px",width:"50px",backgroundColor:"#4c4452"}}>
                                    <InlineIcon className="light" style={{height:"30px",width:"30px",alignItems:"center"}} icon="fluent:person-support-24-regular"/>
                            </div>
                            <h3 className='' >24/7 Support</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, molestias 
                                placeat dolorem modi nobis, 
                                perferendis harum commodi enim maxime,</p>
                            </Col>
                        </Row>
                    </Container>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default About