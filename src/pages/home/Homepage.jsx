import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./Homepage.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from '../../components/FooterWibu';
import NavbarWibu from "../../components/NavbarWibu";
function homepage() {
  function Profile(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <Dropdown.Item href="#/action-1">{getCookie('usr')}</Dropdown.Item>
        </Link>);
    }
  }
  function Login(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
    } else {
      return (
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Dropdown.Item href="#/action-2">
            Login
          </Dropdown.Item>
        </Link>);
    }
  }
  function logoutUtility() {
    console.log('hello');
    removeCookie('usr');
    setCookie('logged', 0);
    window.location.reload(false);
  }
  function Logout(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <Dropdown.Item onClick={logoutUtility}>Logout</Dropdown.Item>
      );
    }
  }
  return (
    <>
      <div className="myContain">
        <NavbarWibu />
        <div className="container text-success">
          <img
            src={welcome}
            className="row justify-content-center"
            id="welcomeImage"
          />
          <div className="row justify-content-center" id="featuredText">
            Featured wallpaper
          </div>
          <div className="row justify-content-center hover-overlay">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/200"
                  alt="First slide"
                  id="headImage"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/200"
                  alt="Second slide"
                  id="headImage"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/200"
                  alt="Third slide"
                  id="headImage"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <hr />
          <div className="row">
            <h5 className="text-muted">
              Scenery <small>|more</small>
            </h5>
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
              City <small>|more</small>
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
    </>
  );
}

export default homepage;
