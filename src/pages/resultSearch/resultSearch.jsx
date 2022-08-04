import React from 'react'
import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./resultSearch.css";
import { Link, useParams } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from '../../components/FooterWibu';
import NavbarWibu from "../../components/NavbarWibu";
import axios from "axios";
import { toast } from 'react-toastify';
async function ResultSearch() {
    const {searchKey}=useParams();
    const urlS = `https://cnpmapi.azurewebsites.net/search/${searchKey}`;
    let data = await axios.get(urlS);
    let url = `${window.location.origin.toString()}/showImage/`;
    return (
        <>
            <NavbarWibu />
            <div className='masonry-with-flex'>
                {data.map((linkT, index) => <a href={url + data[index]}><div><img src={'https://drive.google.com/uc?export=view&id=' + data[index].id} id="anhHomePage" /></div></a>)}
            </div>
        </>
    );
}

export default ResultSearch