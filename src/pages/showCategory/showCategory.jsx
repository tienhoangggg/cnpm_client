import React from 'react'
import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./showCategory.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import NavbarWibu from "../../components/NavbarWibu";
import FooterWibu from '../../components/FooterWibu';
function ShowCategory() {
  const textData = ['Link a', 'Link b', 'Link c']
  return (
    <div id="all">
      <NavbarWibu />
      {textData.map(linkT => <text style={{ color: 'white' }}>{linkT}<br /></text>)}
      <div className="fixed-bottom">
        <FooterWibu />
      </div>
    </div>
  )
}

export default ShowCategory