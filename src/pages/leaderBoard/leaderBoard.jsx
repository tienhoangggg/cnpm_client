import React from 'react'
import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./leaderBoard.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import NavbarWibu from '../../components/NavbarWibu';
import FooterWibu from '../../components/FooterWibu';
function LeaderBoard() {
  return (
    <div>
      <NavbarWibu />
      <div className="row" style={{ textAlign: "center" }}>
        <h4
          className="text-warning justify-content-center"
          style={{ fontWeight: "bold" }}
        >
          Ranking all the time (by like)
        </h4>
        <table className="table table-dark table-striped justify-content-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Upload date</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The wind</td>
              <td>1234</td>
              <td>22/06/2022</td>
              <td>14321</td>
            </tr>
            <tr>
              <td>Lab</td>
              <td>3143</td>
              <td>21/06/2022</td>
              <td>12121</td>
            </tr>
          </tbody>
        </table>
      </div>
      <FooterWibu />
    </div>
  )
}

export default LeaderBoard