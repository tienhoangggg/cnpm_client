import React from 'react'
import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./showImageForCategory.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import NavbarWibu from '../../components/NavbarWibu';
import FooterWibu from '../../components/FooterWibu';
function ShowImageForCategory() {
  const dataTest=[]
  return (
    <>
      <NavbarWibu />
      <div className='masonry-with-flex'>
        {dataTest.map(linkT => <div><img src={linkT} id="anhHomePage"/></div>)}
      </div>
      <FooterWibu />
    </>
  );
}

export default ShowImageForCategory