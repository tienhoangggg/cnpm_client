import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import getCookie from "../hooks/getCookie";
import removeCookie from "../hooks/removeCookie";
import setCookie from "../hooks/setCookie";
function NavbarWibu() {
  function Profile(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <Dropdown.Item href="#/action-1">Profile: {getCookie('usr')}</Dropdown.Item>
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
  function Upload(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <Link to="/upload" style={{ textDecoration: 'none' }}>
          <Dropdown.Item href="#/action-2">
            Upload wallpaper
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
    <Navbar className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img
            src={logo}
            alt="Avatar Logo"
            style={{ width: "9vh" }}
            className="justify-content-center"
          />
        </a>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "rgba(52, 52, 52, 0.0)",
              border: "red",
            }}
          >
            {" "}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Profile isLoggedIn={getCookie('logged')} />
            <Login isLoggedIn={getCookie('logged')} />
            <Upload isLoggedIn={getCookie('logged')} />
            <Logout isLoggedIn={getCookie('logged')} />
            <hr className="dropdown-divider" />
            <Link to="/showCategory" style={{ textDecoration: 'none' }}>
              <Dropdown.Item href="#/action-2">Categories</Dropdown.Item>
            </Link>
            <Link to="/leaderboards" style={{ textDecoration: 'none' }}>
              <Dropdown.Item href="#/action-2">Leaderboards</Dropdown.Item>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Dropdown.Item href="#/action-2">About us</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
        <input
          className="form-control me-2"
          type="text"
          placeholder="Type a name or id"
          style={{ width: "88%" }}
        />
        <Button className="btn btn-primary" type="button" href="/resultSearch">
          Search
        </Button>
      </div>
    </Navbar>
  )
}

export default NavbarWibu