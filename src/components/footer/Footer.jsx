import React from 'react';
import "./footer.css";
import { AiFillFacebook } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ZDEGING WEB</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacto">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.facebook.com/"><AiFillFacebook /></a>
        <a href="https://www.instagram.com/"><FiInstagram /></a>
        <a href="https://twitter.com/"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Zdesing Web. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
