import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./Profile.css";
import NavbarWibu from "../../components/NavbarWibu";
import getCookie from "../../hooks/getCookie";
import { Link, useParams } from "react-router-dom";
import { handleGetProfileApi } from "../../services/userServices";
async function Profile() {
    let usernameC = getCookie('usr');
    let { userID } = useParams();
    let data = await handleGetProfileApi(userID)
    let url = `${window.location.origin.toString()}/showImage/`;
    return (
        <>
            <NavbarWibu />
            <section class="h-100 gradient-custom-2">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-lg-9 col-xl-7">
                            <div class="card">
                                <div class="rounded-top text-white d-flex flex-row"
                                    style={{ backgroundColor: "#000", height: "200px" }}>
                                    <div class="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                                        <img src="https://drive.google.com/file/d/1a5fg9ku_cWGrpUueTVwfzEJtkiaXhpP6/view?usp=sharing" alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2" style={{ width: "100px", zIndex: "1" }} />
                                        <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                                            style={{ zIndex: "1" }}>
                                            Edit profile
                                        </button>
                                    </div>
                                    <div class="ms-3" style={{ marginTop: "130px" }}>
                                        <h5>{usernameC}</h5>
                                    </div>
                                </div>
                                <div class="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                                    <div class="d-flex justify-content-end text-center py-1">
                                        <div>
                                            <p class="mb-1 h5">{data.numOfImage}</p>
                                            <p class="small text-muted mb-0">Photos</p>
                                        </div>
                                        <div class="px-3">
                                            <p class="mb-1 h5">{data.like}</p>
                                            <p class="small text-muted mb-0">Likes</p>
                                        </div>
                                        <div>
                                            <p class="mb-1 h5">{data.star}</p>
                                            <p class="small text-muted mb-0">Stars</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-4 text-black">
                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <p class="lead fw-normal mb-0">Recent photos</p>
                                        <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
                                    </div>
                                    {data.image.map((linkT, index) => <>
                                        {data.image.map((linkT, index) =><a href={url+data.image[index]}><div><img src={'https://drive.google.com/uc?export=view&id='+data.image[index]} id="anhHomePage"/></div></a>)}
                                    </>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile