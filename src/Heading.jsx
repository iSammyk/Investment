import React from 'react'
import Api from './Api'
import './First.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
const Heading = () => {
    // const navigate = useNavigate()
    const signup = () =>{
        // navigate('/signup')
    }
    return (
        <>
            <div>
                <div className='pou w-100 text-light shadow-lg '>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand text-dark" href='/head'>GreenT(logo)</a>
                            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse text-light brol" id="navbarText">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='#'>About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='#'>Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='#pricing'>Pricing Plans</a>
                                    </li>
                                </ul>
                                <span className="navbar-text">
                                    <button className='rounded-3 buttons' onClick={signup}>
                                        Sign up
                                        <div className="arrow-wrapper">
                                            <div className="arrow"></div>
                                        </div>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='overall'>
                    <div className='upo'>
                        <div className='upos mt-2  px-2'>
                            <h2 className='mas'>Invest with <br /> us Today </h2>
                            <b className='opo'>
                                Our goal is to enable financial freedom for our clients, every of of our client makes exceptional profits at managed risk.
                            </b>
                            <div>
                                <button className="button mt-1">
                                    Join us now
                                    <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                        <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='upk'>
                            <img src={require('../src/invest.jpg')} alt="" className='jop' />
                        </div>
                    </div>

                    <div className='mt-4'>
                        <h2 className='text-center doe'>
                            Services
                        </h2>
                        <p className='text-center fw-bolder'>We provide top notch service for our clients</p>
                        <div className='wog mx-auto'>
                            <div className='text-center '>
                                <img src={require('../src/mission green.jpg')} className='wogimg' alt="" />
                                <h5>Our mission</h5>
                                <p>We believe everyone should have access to and be part of the biggest transfer of wealth happening in the finance world</p>
                            </div>
                            <div className='text-center '>
                                <img src={require('../src/vision.png')} className='wogimg2' alt="" />
                                <h5>Our Vission</h5>
                                <p>Empowering people to "act" today to secure financial stability for themselsves and thier family / loved ones with little to no risk</p>
                            </div>
                        </div>

                        <div className="mx-auto">
                            <h2 className='text-center doe'>
                                How To Get Started
                            </h2>
                            <div className="wog mx-auto mt-3">
                                <div className='mb-3'><h3>Heading</h3><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsa quibusdam? Tempora unde illo, obcaecati distinctio commodi, culpa aliquid voluptatem fugiat doloribus id exercitationem pariatur! Inventore, fuga! Ea, error quasi?</b></div>
                                <div className='mb-3'><h3>Heading</h3><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsa quibusdam? Tempora unde illo, obcaecati distinctio commodi, culpa aliquid voluptatem fugiat doloribus id exercitationem pariatur! Inventore, fuga! Ea, error quasi?</b></div>
                                <div className='mb-3'><h3>Heading</h3><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsa quibusdam? Tempora unde illo, obcaecati distinctio commodi, culpa aliquid voluptatem fugiat doloribus id exercitationem pariatur! Inventore, fuga! Ea, error quasi?</b></div>
                                <div className='mb-3'><h3>Heading</h3><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsa quibusdam? Tempora unde illo, obcaecati distinctio commodi, culpa aliquid voluptatem fugiat doloribus id exercitationem pariatur! Inventore, fuga! Ea, error quasi?</b></div>
                            </div>
                        </div>
                    </div>

                    <section id='crypto'>
                        <div>
                            <Api />
                        </div>
                    </section>
                </div>


                <section id='pricing'>
                    <div className='bg-white'>
                        <div className='w-75 mx-auto text-center mt-1'>
                            <h2 className='text-center doe mb-2'>
                                Our investment plans
                            </h2>
                            <b className='my-5'>Our clients, both corperate and privare ones will have the chance to make their finances grow faster and earn better rewards</b>
                        </div>
                        <div className='container fov'>
                            <div class="cardo  my-3">
                                <div className='mane'>
                                    <img src={require('../src/bronze.png')} className='bron' alt="" />
                                    <b>Bronze plan</b>
                                    <h5>+ 10.00% Daily</h5>
                                    <b>$500 - $2,000</b>
                                    <div>
                                        <button className="button mt-3">
                                            Join now
                                            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                                <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="cardo  my-3">
                                <div className='mane'>
                                    <img src={require('../src/silver.png')} className='bron' alt="" />
                                    <b>Silver plan</b>
                                    <h5>+ 15.00% Daily</h5>
                                    <b>$2,000 - $10,000</b>
                                    <div>
                                        <button className="button mt-3">
                                            Join now
                                            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                                <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="cardo  my-3">
                                <div className='mane'>
                                    <img src={require('../src/gold.png')} className='bron' alt="" />
                                    <b>Gold plan</b>
                                    <h5>+ 21.50% Daily</h5>
                                    <b>$10,000 +</b>
                                    <div>
                                        <button className="button mt-3">
                                            Join now
                                            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                                <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <h2 className='text-center doe'>
                            Our top investors
                        </h2>
                        <div className='table-continer'>
                            <table className="table mt-3 table-light table-striped">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name / Company name</th>
                                        <th>Total deposited</th>
                                        <th>Total withdrawal</th>
                                        <th>Joined</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='d-flex align-items-center gap-1'>1 <FaArrowAltCircleUp className='text-success' /></td>
                                        <td>Gateway limited</td>
                                        <td className='text-danger'>170,000</td>
                                        <td className='text-success'>850,000</td>
                                        <td>09/05/23</td>
                                    </tr>
                                    <tr>
                                        <td className='d-flex align-items-center gap-1'>2 <FaArrowAltCircleDown className='text-danger' /></td>
                                        <td>James Kenedy</td>
                                        <td className='text-danger'>168,000</td>
                                        <td className='text-success'>800,000</td>
                                        <td>15/07/23</td>
                                    </tr>
                                    <tr>
                                        <td className='d-flex align-items-center gap-1'>3 <FaArrowAltCircleDown className='text-danger' /></td>
                                        <td>Micheal wallance </td>
                                        <td className='text-danger'>153,400</td>
                                        <td className='text-success'>795,000</td>
                                        <td>13/10/22</td>
                                    </tr>
                                    <tr>
                                        <td className='d-flex align-items-center gap-1'>4 <FaArrowAltCircleUp className='text-success' /></td>
                                        <td>Sarah Jasmine</td>
                                        <td className='text-danger'>142,500</td>
                                        <td className='text-success'>650,090</td>
                                        <td>02/12/22</td>
                                    </tr>
                                    <tr>
                                        <td className='d-flex align-items-center gap-1'>5 <FaArrowAltCircleDown className='text-danger' /></td>
                                        <td>Bryan Miles</td>
                                        <td className='text-danger'>135,000</td>
                                        <td className='text-success'>610,000</td>
                                        <td>27/02/23</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='text-center w-100 ele'>
                            <a href="">See more.....</a>
                        </div>
                    </div>
                </section>

                <div className='foal'>

                    <div className='lonk'>
                        <b className='mb-3'>Quick links</b>
                        <a href="#">Home</a>
                        <a href="#">About us</a>
                        <a href="#">Benefits</a>
                        <a href="#">Services</a>
                        <a href="#">Pricing</a>
                    </div>

                    <div className='lonk'>
                        <b className='mb-3'>Contacts</b>
                        <a href="#">+1565432345</a>
                        <a href="#">whoareu@hotmail.com</a>
                        <div className='qon mt-2'>
                            <button className='fs-5'>
                                <a href="#"><FaFacebookF /></a>
                            </button>

                            <button className='fs-5'>
                                <a href="#"><FaTelegramPlane /></a>
                            </button>

                            <button className='fs-5'>
                                <a href="#"><FaLinkedinIn /></a>
                            </button>

                            <button className='fs-5'>
                                <a href="#"><FaTwitter /></a>
                            </button>
                        </div>
                    </div>

                    <div className='born'>
                        <div className='lonk'>
                            <b>Have a question?</b>
                            <div class="group p-2 mt-3">
                                <input required="" type="text" class="input" />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Name</label>
                            </div>

                            <div class="group p-2 mt-2">
                                <input required="" type="text" class="input" />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>

                            <div class="group p-2 mt-4 grop">
                                <label>Message</label>
                                <textarea name="" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='capp pb-3 w-100 d-flex align-items-center'>
                        <div className=''>
                            <p className='gap-1 d-flex align-items-center pt-3'>
                                <FaCopyright />Copyright 2018 (companyname) All rights deserved
                            </p>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <a href="">Policy Privacy</a>  |
                            <a href="">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading