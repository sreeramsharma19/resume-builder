import React from 'react'
import { GiMailedFist } from "react-icons/gi";
import { FcCellPhone } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";


function Footer() {
  return (
    <div style={{ height: '380px' }} className="d-flex justify-content-center align-items-center bg-success">
  <div className="text-light text-center">
    <h2 className="fw-bold mb-4">Contact Us</h2>

    <div className="mb-3">
      <h5 className="d-flex justify-content-center align-items-center">
        <GiMailedFist className="me-2 fs-4" />
        resumebuilder@123
      </h5>
    </div>

    <div className="mb-3">
      <h5 className="d-flex justify-content-center align-items-center">
        <FcCellPhone className="me-2 fs-4" />
        998899384
      </h5>
    </div>

    <h5 className="mt-4 mb-3">Connect With Us</h5>
    <div className="d-flex justify-content-center gap-3 fs-3">
      <FaWhatsapp />
      <FaXTwitter />
      <PiInstagramLogoFill />
    </div>
  </div>
</div>
 
  )
}

export default Footer