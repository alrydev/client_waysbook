import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import instagram from '../assets/images/instagram.png'
import goodreads from '../assets/images/goodreads.png'
import twitter from '../assets/images/twitter.png'
import facebook from '../assets/images/facebook.png'
import logoNav from '../assets/images/logoNav.png'
import message from '../assets/images/message.png'

const Footer = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffc0cb',
            padding: '20px'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                <div className=''>
                    <div className='mb-2'>
                        <span className='fw-bold me-2 '>Join us on:{" "} </span>
                    </div>
                    <div className='d-flex ' style={{ width: "14rem" }}>
                        <div style={{ width: "30%" }}>
                            <img className='w-100  pe-2' src={instagram} alt='' />
                        </div>
                        <div style={{ width: "30%" }}>
                            <img className='w-100  pe-2' src={twitter} alt='' />
                        </div>
                        <div style={{ width: "30%" }}>
                            <img className='w-100  pe-2' src={facebook} alt='' />
                        </div>
                        <div style={{ width: "30%" }}>
                            <img className='w-100  pe-2' src={goodreads} alt='' />
                        </div>
                    </div>
                </div>
                <img style={{ position: "absolute", marginTop: "-50px" }} src={logoNav} alt='' />
                <div className=''>
                    <div>
                        <p className='fw-bold'>Overview</p>
                    </div>
                    <div className='d-flex'>
                        <p className='mx-1'>• FAQs</p>
                        <p className='mx-1'>• Advertise</p>
                        <p className='mx-1'>• Terms & Cons</p>
                    </div>
                </div>
                <div>
                    <Form.Group className="mb-3 w-100" >
                        <Form.Label className='fw-bold'>Special Letters</Form.Label>
                        <div className='d-flex align-items-center w-100'>
                            <Form.Control style={{ height: "2rem" }} className='w-100 border-0' type="email" placeholder='email@example.com' />
                            <div className='w-25'>
                                <img className='pointer' style={{ width: "55px" }} src={message} alt='' />
                            </div>
                        </div>
                    </Form.Group>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{ marginTop: '20px', width: "12%" }}>
                <Link to="#" style={{ color: 'black' }}>About</Link>
                <Link to="#" style={{ color: 'black' }}>Contact Us</Link>
            </div>
            <div style={{ marginTop: '20px', color: '#333' }}>
                Copyright © {new Date().getFullYear()} Waysbook
            </div>
        </div>
    );
}

export default Footer;