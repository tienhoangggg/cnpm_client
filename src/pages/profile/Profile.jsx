import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./Profile.css";
import { Link } from "react-router-dom";
import NavbarWibu from "../../components/NavbarWibu";
function Profile() {
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
                                        <h5>Alex</h5>
                                    </div>
                                </div>
                                <div class="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                                    <div class="d-flex justify-content-end text-center py-1">
                                        <div>
                                            <p class="mb-1 h5">253</p>
                                            <p class="small text-muted mb-0">Photos</p>
                                        </div>
                                        <div class="px-3">
                                            <p class="mb-1 h5">1026</p>
                                            <p class="small text-muted mb-0">Likes</p>
                                        </div>
                                        <div>
                                            <p class="mb-1 h5">478</p>
                                            <p class="small text-muted mb-0">Stars</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-4 text-black">
                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <p class="lead fw-normal mb-0">Recent photos</p>
                                        <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
                                    </div>
                                    <div class="row g-2">
                                        <div class="col mb-2">
                                            <img src="https://drive.google.com/file/d/1a5fg9ku_cWGrpUueTVwfzEJtkiaXhpP6/view?usp=sharing" alt="image 1" class="w-100 rounded-3" />
                                        </div>
                                        <div class="col mb-2">
                                            <img src="https://drive.google.com/file/d/1NT11HiAJdC7ecHHyfTLr1sWfs91m2F0V/view?usp=sharing" alt="image 1" class="w-100 rounded-3" />
                                        </div>
                                    </div>
                                    <div class="row g-2">
                                        <div class="col">
                                            <img src="https://drive.google.com/file/d/1C8yNe0Z19UHUmXSu-Qiiol3UQ0nvTSBI/view?usp=sharing" alt="image 1" class="w-100 rounded-3" />
                                        </div>
                                        <div class="col">
                                            <img src="https://drive.google.com/file/d/1f8Uf5DvzkNvZFqDc18jJyJn5Z7EGK8de/view?usp=sharing" alt="image 1" class="w-100 rounded-3" />
                                        </div>
                                    </div>
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