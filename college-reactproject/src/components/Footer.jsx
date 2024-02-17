import React from 'react';
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import footerLogo from "../assets/footer-logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo-footer">
          <img src={footerLogo} />
        </div>
        <div className="name-footer">
          <p className="main-name">AVANTHI</p>
          <p className="second-name">INSTITUTE OF ENGINEERING & TECHNOLOGY</p>
          <p className="desc">(Approved by AICTE, Permanently Affiliated to JNT University, Kakinada,</p>
          <p className="desc">Accredited by NBA & Recognized Under 2(f) and 12(b) by UCC, New Delhi)</p>
          <p className="desc">Tamaram, Makavarapalem, Narsipatnam(R.D), Visakhapatnam Dist-531113</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaPinterest /></a>
            <a href="#"><FaGooglePlusG /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
