// import React from 'react';
import React, { useState } from 'react';
import ImageSlider from "./ImageSlider";
import './style.css';

const Signup = () => {
    const slides = [
        { image: "https://picsum.photos/250/400?grayscale", title: 'img1' },
        { image: 'https://picsum.photos/seed/img3/250/400', title: 'img2' },
        { image: 'https://picsum.photos/seed/img1/250/400', title: 'img3' }

    ];

    const containerStyles = {
        width: "100%",
        height: "100%",
        margin: "auto 80%",
    };
    return (
        <div class="round">
            <section className='signup'>
                <div className="container">
                    <div className="singup-content">

                        <div className="signup-img">
                            <div className='img-container'>
                                <ImageSlider slides={slides} />
                            </div>
                        </div>

                        <div className="signup-form">
                            <div className="form-header">
                                <h2 className="form-title">Sign Up</h2>
                            </div>
                            <form action="" className="register-form" id='register-form'>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name='name' autoComplete='off' id='name' placeholder='Your Name' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="college">
                                        <i class="zmdi zmdi-home material-icons-name"></i>
                                    </label>
                                    <input type="text" name='college' autoComplete='off' id='college' placeholder='Your College' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name='email' autoComplete='off' id='email' placeholder='Your Email' />
                                </div>



                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name='name' autoComplete='off' id='password' placeholder='password' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cPass">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name='cPass' autoComplete='off' id='cPass' placeholder='Confirm Password' />
                                </div>

                                <div className="form-btn">
                                    <input type="submit" name='signup' id='signup' value='Register' className='form-submit' />
                                </div>
                            </form>

                            <div className="lower-text">
                                <h5>or register with</h5>
                            </div>
                            <div className="other-btn">
                                {/* <a href=""><i class="zmdi zmdi-google material-icons-name"></i></a>
                                <a href=""></a>
                                <a href=""></a> */}
                                <div className="social">
                                    <div className="google">
                                        <i class="zmdi zmdi-google material-icons-name"></i>google</div>
                                    <div className="facebook">
                                        <i class="zmdi zmdi-facebook material-icons-name"></i>facebook</div>
                                    <div className="linkedin">
                                        <i class="zmdi zmdi-linkedin material-icons-name"></i>linkedin</div>
                                </div>
                                <div className="footer-link">
                                    <h5 className='form-subtitle'>Already a member? <a href="#">Login</a> </h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup;