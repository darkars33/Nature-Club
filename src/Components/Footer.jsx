import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
          return (
                    <>
                              <div className="w-full bg-[#263238] p-7 flex justify-center">
                                        <div className="w-[90%] relative flex justify-between gap-10 ms:flex-col ms:items-center">
                                                  <div className="flex flex-col gap-3">
                                                            <div className="w-[300px] h-[150px] bg-white rounded-[15px]">
                                                            <div class="mapouter"><div class="gmap_canvas"><iframe className="rounded-[15px]" width="300" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=AIT+pune&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                                                            </div>
                                                            <div className="w-[300px] ">
                                                                      <h1 className=" text-[17px] text-center leading-5 text-green-200">Army Institute of Technology,Pune Dighi Hills Pune 411015</h1>
                                                            </div>
                                                            <div className="w-[300px] flex justify-between xs:justify-center xs:gap-4">
                                                                      <a href="https://www.instagram.com/ait_nature_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><FaInstagram className="text-[30px] text-green-200 hover:text-white hover:text-[35px] hover:transition-all"/></a>
                                                                      <a href="https://www.youtube.com/@AITNatureClub" target="_blank"><FaYoutube className="text-[30px] text-green-200 hover:text-white hover:text-[35px] hover:transition-all"/> </a>
                                                                      <a href=""><FaFacebook className="text-[30px] text-green-200 hover:text-white hover:text-[35px] hover:transition-all"/></a>
                                                                      <a href=""><FaTwitter className="text-[30px] text-green-200 hover:text-white hover:text-[35px] hover:transition-all"/></a>
                                                                      <a href=""><FaLinkedin className="text-[30px] text-green-200 hover:text-white hover:text-[35px] hover:transition-all"/></a>
                                                            </div>
                                                  </div>
                                                  <h1 className="text-[100px] text-green-200 font-semibold lg:text-[60px] xs:text-[40px]">Nature Club</h1>
                                                  <div>
                                                            <div>
                                                                      <ul className="flex flex-col gap-3 text-[18px] cursor-pointer">
                                                                                <Link to='/about us' className="text-green-200 hover:text-white">About us</Link>
                                                                                <Link to='/gallery' className="text-green-200 hover:text-white">Gallery</Link>
                                                                                <Link to='/team' className="text-green-200 hover:text-white">Our Teams</Link>
                                                                                <Link to='/event' className="text-green-200 hover:text-white">Events</Link>
                                                                                <Link to='/contact' className="text-green-200 hover:text-white">Contact us</Link>
                                                                                <Link to='login'className="text-green-200 hover:text-white" >LogIn</Link>
                                                                      </ul>
                                                            </div>
                                                  </div>
                                        </div>  
                              </div>
                    </>
          )
}

export default Footer;