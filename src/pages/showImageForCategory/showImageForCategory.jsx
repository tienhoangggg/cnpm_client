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
  return (
    <div className="myContain">
      <NavbarWibu />
      <div className="row">
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt="Image 1"
            className="d-block"
            style={{ width: "100%" }}
          />
          <h6 className="text-muted"> Picture 2</h6>
        </div>
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt="Image 1"
            className="d-block"
            style={{ width: "100%" }}
          />
          <h6 className="text-muted"> Picture 1</h6>
        </div>
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt="Image 1"
            className="d-block"
            style={{ width: "100%" }}
          />
          <h6 className="text-muted"> Picture 3</h6>
        </div>
      </div>
      <hr />
      <div className="row">
        <h5 className="text-muted">
        </h5>
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt="Image 1"
            className="d-block"
            style={{ width: "100%" }}
          />
          <h6 className="text-muted"> Picture 4</h6>
        </div>
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt="Image 1"
            className="d-block"
            style={{ width: "100%" }}
          />
          <h6 className="text-muted"> Picture 5</h6>
        </div>
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt="Image 1"
            className="d-block"
            style={{ width: "100%" }}
          />
          <h6 className="text-muted"> Picture 6</h6>
        </div>
      </div>
      <div className="row">
        <h5 className="text-muted">
        </h5>
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt="Image 1"
            className="d-block"
            style={{ width: "100%" }}
          />
          <h6 className="text-muted"> Picture 4</h6>
        </div>
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt="Image 1"
            className="d-block"
            style={{ width: "100%" }}
          />
          <h6 className="text-muted"> Picture 5</h6>
        </div>
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt="Image 1"
            className="d-block"
            style={{ width: "100%" }}
          />
          <h6 className="text-muted"> Picture 6</h6>
        </div>
      </div>
      <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      <FooterWibu />
    </div>
  )
}

export default ShowImageForCategory