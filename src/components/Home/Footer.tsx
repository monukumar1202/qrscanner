import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-content'>
                <div>
                    <div className='p-4'>
                        <span className="fs-3 fw-bold ms-3" ><Link to="/" className='text-white' style={{ textDecoration: 'none' }}>SPYDR360</Link></span>
                        <div className="fw-bold ms-3" style={{ color: '#fff' }}>Web3 Market Place</div>
                    </div>
                    <div className='pt-4 ps-4'>
                        <p className='ps-3'>Block Sec focuses on the security of the whole life cycle of smart contracts, specializing in rigorous testing.</p>
                    </div>
                    <div className='social'>
                        <div>
                            <ul className='social_list'>
                                <li>
                                    <a href="#"><i className="bi bi-twitter-x icon"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bi bi-linkedin icon"></i></a></li>
                                <li>
                                    <a href="#"><i className="bi bi-google icon"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='footer_content'>
                        <div>
                            <h5>SERVICES</h5>
                            <ul className='list_style' style={{display:'inline', textAlign:'start'}}>
                                <li>B2B</li>
                                <li>B2C</li>
                                <li>Digial Services</li>
                            </ul>

                        </div>
                        <div className='text-start'>
                            <h5>CONTACT US</h5>
                            <p>809, Vasavi MPM Grand, Ameerpet,</p>
                            <p>Yella Reddy Guda, Hyderabad,</p>
                            <p>Telangana 500073</p>
                            <p> <i className="bi bi-envelope icon"></i> info@spydr360.com </p>
                            <p> <i className="bi bi-telephone icon"></i> +91-999 999 9999 </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='text-end me-4' >
                <p>Copyright : Spydr360 2024</p>
            </div>
        </div>
    )
}

export default Footer
