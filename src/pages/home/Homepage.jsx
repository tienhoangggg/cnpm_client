import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./Homepage.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from '../../components/FooterWibu';
import NavbarWibu from "../../components/NavbarWibu";
import dataTest from "./testData";
function homepage() {
  let url = `${window.location.origin.toString()}/showImage/`;
  return (
    <>
      <NavbarWibu />
      <div className='masonry-with-flex'>
        {dataTest.map((linkT, index) =><a href={url+dataTest[index]}><div><img src={'https://drive.google.com/uc?export=view&id='+dataTest[index]} id="anhHomePage"/></div></a>)}
      </div>
      <FooterWibu />
    </>
  );
}

export default homepage;
