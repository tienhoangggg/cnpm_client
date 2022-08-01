import { Button, Navbar, ListGroup, Dropdown, Carousel, Nav, Container, NavDropdown, Form, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import getCookie from "../hooks/getCookie";
import removeCookie from "../hooks/removeCookie";
import setCookie from "../hooks/setCookie";
import "./cssComponent/CommentSection.css";
import { FaQuestion, FaUser, FaKey, FaListUl } from 'react-icons/fa'
import React from 'react'
function CommentSection() {
    function CommentBox(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn == 1) {
            return(
                <div style={{textAlign: "center"}}>
                 <img src="https://drive.google.com/uc?export=view&id=1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs" id="avatarComment" />
                 &nbsp;&nbsp;&nbsp;
                 <input type="text" placeholder="Enter your comment" style={{width: "80%", height: "5vh", overflow: "scroll", borderRadius: "0%"}}/>
                </div>
            );
        } else {
          return (
            <div style={{color: "white", textAlign: "center"}}>You need to login to leave a comment</div>
            );
        }
    }
    const imageData = ['https://drive.google.com/uc?export=view&id=1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs', 'https://drive.google.com/uc?export=view&id=1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs']
    const nameData = ['Test1', 'Test1']
    const dateData = ['1/1/2022', '1/1/2022']
    const desData = ['This so goood', 'This so goood']
    return (
        <>
            <CommentBox isLoggedIn={getCookie('logged')}/>
            <div style={{ padding: "2vh" }}>
                {imageData.map((linkT, index) =>
                    <>
                        <Card style={{ backgroundColor: "#232946", color: "white" }} className="border-0">
                            <Card.Title>
                                <img src={linkT} id="avatarComment" />
                                <text> </text>
                                {nameData[index]}
                                <text> </text>
                                <text style={{ fontSize: "0.5rem", color: "gray" }}>
                                    {dateData[index]}
                                </text>
                            </Card.Title>
                            <Card.Body>
                                {desData[index]}
                            </Card.Body>
                        </Card>
                    </>
                )}
            </div>
        </>

    )
}

export default CommentSection