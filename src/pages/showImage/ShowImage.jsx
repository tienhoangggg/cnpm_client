import {
  Button,
  Navbar,
  ListGroup,
  Dropdown,
  Carousel,
  Card,
} from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./ShowImage.css";
import { Link, useParams } from "react-router-dom";
import NavbarWibu from "../../components/NavbarWibu";
import {
  FaQuestion,
  FaUser,
  FaKey,
  FaDownload,
  FaShareAlt,
  FaThumbsUp,
  FaRegStar,
  FaRegFlag,
} from "react-icons/fa";
import CommentSection from "../../components/CommentSection";
import FooterWibu from "../../components/FooterWibu";
import { toast } from "react-toastify";
import { showImageApi } from "../../services/imageServices";
import React, { useState, useEffect, useCallback } from "react";
import { sendComment } from "../../services/imageServices";
function ShowImage() {
  const { imgID } = useParams();
  //console.log(imgID);
  let url = `${window.location.origin.toString()}/showImage/`;
  const linkDrive = "https://drive.google.com/uc?export=view&id=";
  //let data = await showImageApi({ imgID });
  //console.log(imgID);

  // //Delay
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {

  //     setTimeout(() => {
  //         setLoading(false)
  //     }, 1500)

  // }, []);

  // //Fetch data
  // const [CommentArray, SetCommentArray] = useState("");
  // // declare the async data fetching function
  // useEffect(() => {
  //     axiosGet();
  // }, []);
  // async function axiosGet() {
  //     const data = await showImageApi({ imgID });;
  //     SetCommentArray(data);
  // }

  // if (loading) {
  //     return <div>loading...</div>
  // }
  //console.log(url);
  //console.log(CommentArray);
  let [likeN, setLikeN] = useState(1);
  let [starN, setStarN] = useState(1);
  async function getData() {
    const data = await showImageApi(imgID);
    setLikeN(data.like);
    setStarN(data.star);
    console.log(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="showImageBody">
      <NavbarWibu />
      <img
        src={"https://drive.google.com/uc?export=view&id=" + imgID}
        alt="Image 1"
        className="rounded mx-auto d-block"
        id="idShowImage"
      />
      <div id="titleText">This is a test title</div>
      <div className="utilityBar">
        <FaThumbsUp className="icon" size={25} color={"#EEBBC3"} />
        &nbsp;&nbsp;
        <div style={{ color: "white", display: "inline" }}>{likeN}</div>
        {/* {data.like} */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaRegStar className="icon" size={25} color={"#EEBBC3"} />
        &nbsp;&nbsp;
        <div style={{ color: "white", display: "inline" }}>{starN}</div>
        {/* {data.star} */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href={"https://drive.google.com/uc?export=download&id=" + imgID}>
          <FaDownload className="icon" size={25} color={"#EEBBC3"} />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaShareAlt
          className="icon"
          size={25}
          color={"#EEBBC3"}
          onClick={() => {
            navigator.clipboard.writeText(url + imgID);
            toast.dark("Copied to clipboard");
          }}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaRegFlag className="icon" size={25} color={"#EEBBC3"} />
      </div>
      <br />
      <div style={{ padding: "3rem" }}>
        <Card className="descriptionBox">
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>Uploader:</Card.Text>
            <Card.Text>Id:</Card.Text>
            <Card.Text>
              This is a good image i want to share with every one
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <CommentSection />
      <FooterWibu />
    </div>
  );
}

export default ShowImage;
