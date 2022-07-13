import React from "react";
import Logo from "../img/logo.png";
import { RiSendPlaneFill } from "react-icons/ri";
// import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
// import logo from "../../assets/images/res-logo.png";

// import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-footer px-4 md:px-16 md:py-8 py-4 w-full h-auto">
            <div className="container text-gray-700">
                <div className="flex flex-col  md:flex-row  gap-6 md:gap-2">
                    <div className="flex flex-col w-full ">
                        <div className="flex items-center mb-2">
                            <Link to={"/"} className="flex items-center gap-2">
                                <img src={Logo} className="w-8 object-cover" alt="logo" />
                                <p className=" text-xl font-bold">City</p>
                            </Link>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus
                        </p>
                    </div>

                    <div className="flex flex-col w-full ">
                        <h5 className="font-bold mb-1">Delivery Time</h5>
                        <div className="md:gap-10">
                            <div className="mb-1">
                                <span className="font-medium">Monday - Friday</span>
                                <p>10:00am - 10:00pm</p>
                            </div>

                            <div>
                                <span className="font-medium">Saturday - Sunday</span>
                                <p>08:00am - 12:00am</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full ">
                        <h5 className="font-bold mb-2">Contact</h5>
                        <div>
                            <div className="mb-1">
                                <p>
                                    <span className="font-medium">Location :</span> Kakkanad, Eranakulam, Kerala - 682030
                                </p>
                            </div>
                            <div className="mb-1">
                                <p>
                                    <span className="font-medium">Phone :</span> 91-0987654321
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-medium">Email :</span> example@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <h5 className="font-bold mb-2">Newsletter</h5>
                        <p className="font-medium mb-1">Subscribe our newsletter</p>
                        <div className="flex flex-row items-center gap-2 ">
                            <input
                                className="p-1 border-2 w-48 border-gray-700 rounded-sm bg-transparent placeholder:text-gray-600 focus:outline-none"
                                type="email"
                                placeholder="Enter your email"
                            />
                            <span className="p-2 rounded-sm cursor-pointer bg-gray-700">
                                <RiSendPlaneFill className="text-white" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row mt-5 justify-center items-center">
                    <div className="flex items-center">
                        <p>
                            Copyright - 2022, website made by Mabin Varghese. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
