import { Button, Navbar, ListGroup, Dropdown, Carousel, Card } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./ShowImage.css";
import { Link } from "react-router-dom";
import NavbarWibu from "../../components/NavbarWibu";
import CommentBox from "../../components/CommentSection";
import { FaQuestion, FaUser, FaKey, FaDownload, FaShareAlt} from 'react-icons/fa'
function ShowImage() {
    return (
        <div>
            <NavbarWibu />
            <img
                src="https://picsum.photos/400"
                alt="Image 1"
                className="rounded mx-auto d-block"
            />
            <div id="titleText">
                This is a test title
            </div>
            <div className="utilityBar">
                <FaDownload className="icon" size={25} color={"white"} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaShareAlt className="icon" size={25} color={"white"} />
            </div>
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
            <CommentBox />
        </div>
    );
}

export default ShowImage;