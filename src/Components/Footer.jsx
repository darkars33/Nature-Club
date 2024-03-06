import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";


const Footer = () => {
          return (
                    <>
                              <div className="w-full bg-[#263238] p-7 flex justify-center">
                                        <div className="w-[90%] relative flex justify-between gap-10 ms:flex-col ms:items-center">
                                                  <div className="flex flex-col gap-3">
                                                            <div className="w-[300px] h-[150px] bg-white rounded-md">map</div>
                                                            <div className="w-[300px] ">
                                                                      <h1 className="text-white text-[17px] text-center leading-5">Army Institute of Technology,Pune Dighi Hills Pune 411015</h1>
                                                            </div>
                                                            <div className="w-[300px] flex justify-between xs:justify-center xs:gap-4">
                                                                      <a href="/"><FaInstagram className="text-white text-[30px]"/></a>
                                                                      <a href=""><FaYoutube className="text-white text-[30px]"/> </a>
                                                                      <a href=""><FaFacebook className="text-white text-[30px]"/></a>
                                                                      <a href=""><FaTwitter className="text-white text-[30px]"/></a>
                                                                      <a href=""><FaLinkedin className="text-white text-[30px]"/></a>
                                                            </div>
                                                  </div>
                                                  <h1 className="text-[100px] text-green-200 font-semibold lg:text-[60px] xs:text-[40px]">Nature Club</h1>
                                                  <div>
                                                            <div>
                                                                      <ul className="flex flex-col gap-3 text-[18px]">
                                                                                <li className="text-white">About us</li>
                                                                                <li className="text-white">Gallery</li>
                                                                                <li className="text-white">Our Teams</li>
                                                                                <li className="text-white">Events</li>
                                                                                <li className="text-white">Contact us</li>
                                                                      </ul>
                                                            </div>
                                                  </div>
                                        </div>  
                              </div>
                    </>
          )
}

export default Footer;