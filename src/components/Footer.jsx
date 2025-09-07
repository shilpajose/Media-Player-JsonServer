import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div style={{ height: '350px', bottom: 0 }} className='footer-fullwidth mt-5 bg-dark p-5'>
                <div className='footer-content d-flex justify-content-between'>
                    <div className="media" style={{ width: '400px' }}>
                        <h5 className='d-flex' style={{ height: '25px' }}><i className="fa-solid fa-music"></i>Media Player</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique minima dignissimos rem tempora eius, sunt ab dicta totam pariatur aliquid reprehenderit error expedita optio, laboriosam laborum? Incidunt neque ad mollitia!</p>
                    </div>
                    <div className="links d-flex flex-column">
                        <h5 className='d-flex' style={{ height: '25px' }}>Links</h5>
                        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>Landing Page</Link>
                        <Link to='/home' style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
                        <Link to='/watch' style={{ textDecoration: 'none', color: '#fff' }}>Watch</Link>
                    </div>
                    <div className="guides d-flex flex-column">
                        <h5 className='d-flex' style={{ height: '25px' }}>Guides</h5>
                        <a href="" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}>React Js</a>
                        <a href="" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}>Node Js</a>
                        <a href="" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}>Express Js</a>
                        <a href="" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}>Mongo Db</a>
                        <a href="" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}>Next Js</a>
                    </div>
                    <div className="contacts d-flex flex-column">
                        <h5 className='d-flex' style={{ height: '25px' }}>Contacts</h5>
                        <div className="d-flex">
                            <input type="text" className='form-control' placeholder='Enter your email' />
                            <button className='btn btn-info'><i className="fa-solid fa-arrow-right fa-3x "></i></button>
                        </div>
                        <div className='d-flex p-5 justify-content-between'>
                            <a href="https://github.com/" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}><i className="fa-brands fa-github"></i></a>
                            <a href="https://twitter.com/" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://linkedin.com/" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://facebook.com/" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}><i className="fa-solid fa-phone"></i></a>
                            <a href="https://instagram.com/" target='_blank' style={{ textDecoration: 'none', color: '#fff' }}><i className="fa-brands fa-instagram"></i></a>

                        </div>
                    </div>
                    <div className="footer-copyright text-center text-white mt-4" style={{ position: 'absolute', bottom: '20px', left: 0, width: '100%' }}>
                        &copy; {new Date().getFullYear()} Media Player. All rights reserved.
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer