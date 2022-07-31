import { Button, Navbar, ListGroup, Dropdown, Carousel, Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./AdminPage.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from '../../components/FooterWibu';
import NavbarWibu from "../../components/NavbarWibu";
import dataTest from "./testData";
import React from 'react'

function AdminPage() {
  const imgID=[
    '19hEWuwRILVFcDOBF9sq5yTnrjS8sydN5',
    '1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs',
    '1FjK29ynIxF7_lwlgBmXnus1QnnSaJisw',
    '1Gc7DBQu4wVB8QHnx9vkpVed6K70jarbj',
    '1kZRUVTNQz7c6YgXVbMwypuKHAwKfP6U-',
    '1NKOgbzaWDoErzZ4pdDtL5bwkT-X5RBC3',
    '1pCBHAAyNPKnHVBqyPxXHNfxjyRmTSa6s',
    '1SGLs3sys1jpxuOlwWYbJw-Dgd93jNJjv',
    '1z1R4pttq4Tz_t5tRzZq7LBbvMgK971k5',
    '1ZS6bffKrJtOMspWYaL-yrwYSeGAnYRTK',
    ]
  let url = `${window.location.origin.toString()}/showImage/`;
  const numberOfReport=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  return (
    <>
    <NavbarWibu />
    <Container>
      <Row id="rowAdmin" className="justify-content-center">
        <Col id="colAdmin">
          <h3>&nbsp;&nbsp;Image link</h3>
          <div id="divCol">
          {imgID.map((linkT, index) =><><text>{index+1}/ {url+linkT}</text><br /></>)}
          </div>
        </Col>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Col id="colAdmin">
        <h3>&nbsp;&nbsp;Number of reports</h3>
        <div id="divCol">
        {numberOfReport.map((n, index) =><><text>{n}</text><br /></>)}
        </div>
        </Col>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Col id="colAdmin">
          <h3>&nbsp;&nbsp;Delete command</h3>
          <div id="divCol">
          {imgID.map((linkT, index) =><><Button id="btnS">
            Delete {index+1}
          </Button><br /></>)}
          </div>
        </Col>
      </Row>
    </Container>
    <FooterWibu />
    </>
  )
}

export default AdminPage