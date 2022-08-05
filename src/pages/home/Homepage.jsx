import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./Homepage.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from "../../components/FooterWibu";
import NavbarWibu from "../../components/NavbarWibu";
import dataTest from "./testData";
import { getRandomImageApi } from "../../services/imageServices";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
function Homepage() {
  // const [idArray, setArray] = useState("");
  let url = `${window.location.origin.toString()}/showImage/`;
  // let imgID=[];
  // async function GetArray() {
  //     let data = await getRandomImageApi("anime,background", "month", "like", "10")
  // }
  // useEffect(() => {
  //       setArray(data);
  //   }, []);
  // //let data=await getRandomImageApi("anime,background","month","like","10")
  // GetArray();
  // console.log(idArray);
  //console.log(dataTest);
  // const [ImageArray, SetImageArray] = useState("");
  // const getImageArray = async () => {
  //   const data = await getRandomImageApi("anime,background", "month", "like", "10");
  //   SetImageArray(data);
  //   setCookie("triggeredEffect", 1);
  // }
  // useEffect(() => {
  //   if (getCookie("triggeredEffect") != 1) {
  //     getImageArray();
  //   }
  // }, []);
  // console.log(ImageArray);
  // console.log(ImageArray[0]);

  // //Delay
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {

  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)

  // }, []);

  // //Fetch data
  // const [ImageArray, SetImageArray] = useState("");
  // // declare the async data fetching function
  // useEffect(() => {
  //   axiosGet();
  // }, []);
  // async function axiosGet() {
  //   const data = await getRandomImageApi("background", "month", "like", "10");
  //   SetImageArray(data);
  // }

  // if (loading) {
  //   return <div>loading...</div>
  // }

  // console.log(ImageArray);
  // console.log(ImageArray[0]);

  const [testArr, setTestArray] = useState([]);
  async function testF() {
    const data = await getRandomImageApi("background", "", "like", "10");
    setTestArray(data);
    console.log(data);
  }
  useEffect(() => {
    testF();
  }, []);
  return (
    <>
      <NavbarWibu />
      <div className="masonry-with-flex">
        {testArr.map((linkT, index) => (
          <a href={url + testArr[index].id} key={index}>
            <div>
              <img
                src={
                  "https://drive.google.com/uc?export=view&id=" +
                  testArr[index].id
                }
                id="anhHomePage"
              />
            </div>
          </a>
        ))}
      </div>
      <FooterWibu />
    </>
  );
}

export default Homepage;
