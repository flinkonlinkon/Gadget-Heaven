import React from 'react'

export default function Footer() {
  return (
    <div>
       <div className='text-center mx-auto  border-b-2 bg-base-200 text-base-content p-10'>
        <p className='text-2xl font-bold'>
        Gadget Heaven
        </p>
        <p>Leading the way in cutting-edge technology and innovation.</p>
    </div>
      <footer className="footer bg-base-200 text-base-content p-10">
      
  <nav>
    
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product Support
    </a>
    <a className="link link-hover">Order Tracking
    </a>
    <a className="link link-hover">Shipping & Delivery
    </a>
    <a className="link link-hover">Returns
    </a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers
    </a>
    <a className="link link-hover">Contact</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}
