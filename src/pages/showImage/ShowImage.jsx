import { Button, Navbar, ListGroup, Dropdown, Carousel, Card } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./ShowImage.css";
import { Link, useParams } from "react-router-dom";
import NavbarWibu from "../../components/NavbarWibu";
import { FaQuestion, FaUser, FaKey, FaDownload, FaShareAlt, FaThumbsUp, FaRegStar, FaRegFlag} from 'react-icons/fa'
import CommentSection from "../../components/CommentSection";
import FooterWibu from '../../components/FooterWibu';
import { toast } from 'react-toastify';
import { showImageApi } from "../../services/imageServices";
async function ShowImage() {
    const {imgID}=useParams();
    let data = await showImageApi({ imgID });
    console.log(imgID);
    let url = `${window.location.origin.toString()}/showImage/`;
    const linkDrive="https://drive.google.com/uc?export=view&id=";
    console.log(url);
    return (
        <div id="showImageBody">
            <NavbarWibu />
            <img
                src={'https://drive.google.com/uc?export=view&id='+imgID}
                alt="Image 1"
                className="rounded mx-auto d-block"
                id="idShowImage"
            />
            <div id="titleText">
                This is a test title
            </div>
            <div className="utilityBar">
                <FaThumbsUp className="icon" size={25} color={"#EEBBC3"} />
                {data.like}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaRegStar className="icon" size={25} color={"#EEBBC3"} />
                {data.star}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={'https://drive.google.com/uc?export=download&id='+imgID}>
                <FaDownload className="icon" size={25} color={"#EEBBC3"}/>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaShareAlt className="icon" size={25} color={"#EEBBC3"} onClick={() => {navigator.clipboard.writeText(url+imgID); toast.dark("Copied to clipboard");}}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaRegFlag className="icon" size={25} color={"#EEBBC3"} />
            </div>
            <br />
            <div style={{padding: "3rem"}}>
            <Card className="descriptionBox">
                <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Text>
                        Uploader:
                    </Card.Text>
                    <Card.Text>
                        Id:
                    </Card.Text>
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