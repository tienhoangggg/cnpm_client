import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./Profile.css";
import NavbarWibu from "../../components/NavbarWibu";
import getCookie from "../../hooks/getCookie";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { handleGetProfileApi } from "../../services/userServices";
import { getRandomImageApi } from "../../services/imageServices";
import setCookie from "../../hooks/setCookie";
function Profile() {
  let usernameC = getCookie("usr");
  let { usrID } = useParams();
  //console.log(usrID);
  //console.log(typeof(parseInt(usrID, 10)));
  //console.log(usrID);
  //let data = await handleGetProfileApi({usrID})
  let url = `${window.location.origin.toString()}/showImage/`;

  //Delay
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {

  //     setTimeout(() => {
  //         setLoading(false)
  //     }, 1800)

  // }, []);

  // //Fetch data
  // const [CommentArray, SetCommentArray] = useState("");
  // // declare the async data fetching function
  // useEffect(() => {
  //     axiosGet();
  // }, []);
  // async function axiosGet() {
  //     try {
  //         const data = await handleGetProfileApi(parseInt(usrID, 10));
  //         SetCommentArray(data);
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  // if (loading) {
  //     return <div>loading...</div>
  // }
  //console.log(testArr);
    // if (loading) {
  //     return <div>loading...</div>
  // }
  //console.log(testArr);


