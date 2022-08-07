import {
  Button,
  Navbar,
  ListGroup,
  Dropdown,
  Carousel,
  Nav,
  Container,
  NavDropdown,
  Form,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import logo from "../assets/images/logo.png";
import getCookie from "../hooks/getCookie";
import removeCookie from "../hooks/removeCookie";
import { Link, useParams } from "react-router-dom";
import setCookie from "../hooks/setCookie";
import "./cssComponent/CommentSection.css";
import { FaQuestion, FaUser, FaKey, FaListUl } from "react-icons/fa";
import React, { useState, useEffect, useCallback } from "react";
import { showImageApi } from "../services/imageServices";
import { sendComment } from "../services/imageServices";
function CommentSection() {
  // const imageData = [];
  // const nameData = [];
  // const dateData = [];
  // const desData = [];
  const { imgID } = useParams();
  let [imageData, setImg] = useState([]);
  let [nameData, setName] = useState([]);
  let [dateData, setDate] = useState([]);
  let [desData, setDes] = useState([]);
  let [initVal, setInitVal] = useState([1]);
  const [contentC, setContentC] = useState("");
  async function submitComment() {
    //id image, id avatar, username, content
    console.log(imgID);
    console.log(getCookie("imgavatar"));
    console.log(getCookie("usr"));
    console.log(contentC);
  }
  async function fetchComment() {
    const data = await showImageApi(imgID);
    console.log(data);
    setImg(data.idAvatar);
    setName(data.username);
    setDate(data.updatedAt);
    setDes(data.content);
  }

  useEffect(() => {
    fetchComment();
  }, initVal);

  function CommentBox(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <div style={{ textAlign: "center" }}>
          <img
            src="https://drive.google.com/uc?export=view&id=1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs"
            id="avatarComment"
          />
          &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            placeholder="Enter your comment"
            style={{
              width: "80%",
              height: "5vh",
              // overflow: "scroll",
              borderRadius: "0%",
            }}
            onChange={(e) => setContentC(e.target.value)}
          />
          <Button id="btnS" onClick={() => submitComment()}>
            Submit
          </Button>
        </div>
      );
    } else {
      return (
        <div style={{ color: "white", textAlign: "center" }}>
          You need to login to leave a comment
        </div>
      );
    }
  }
  return (
    <>
      <CommentBox isLoggedIn={getCookie("logged")} />
      <div style={{ padding: "2vh" }}>
        {imageData.map((linkT, index) => (
          <>
            <Card
              style={{ backgroundColor: "#232946", color: "white" }}
              className="border-0"
            >
              <Card.Title>
                <img src={linkT} id="avatarComment" />
                <text> </text>
                {nameData[index]}
                <text> </text>
                <text style={{ fontSize: "0.5rem", color: "gray" }}>
                  {dateData[index]}
                </text>
              </Card.Title>
              <Card.Body>{desData[index]}</Card.Body>
            </Card>
          </>
        ))}
      </div>
    </>
  );
}

export default CommentSection;
