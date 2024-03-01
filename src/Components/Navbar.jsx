import React, {useState} from "react";
import { Link } from "react-router-dom";
import {navLink} from "../Constants/data";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import logo from "../assets/logo.svg";

const Navbar = () =>{
          const [show, setShow] = useState(false);
          return (
                    <>
                              <nav className="w-full fixed flex items-center pt-2 top-0 z-20 bg-white ">
                                        <div className="w-full flex justify-between items-center max-w-[90%] mx-auto bg-white">
                                                  <Link to='/' className="bg-white flex items-center gap-3"><img src={logo} alt="club-logo" className="bg-white w-14 h-14 mb-3 ms:w-10 ms:h-10"/><h2 className="bg-white text-[25px] font-medium md:text-[20px]">Nature Club</h2></Link>
                                                  <div className="flex items-center gap-10 bg-white ms:gap-1 md:hidden">
                                                            {navLink.map((item, index)=>{
                                                                      return(
                                                                                <Link to={item.id} key={index} className="mx-2 text-[#6e6d6d] hover:text-[#000] bg-white text-[18px]">{item.title}</Link>
                                                                      )
                                                            })}
                                                  </div>
                                                  <div className="sm:hidden bg-white"> 
                                                        {show ? <IoMdClose className="h-8 w-8 bg-white" onClick={() =>setShow(!show)} /> : <IoIosMenu className="h-8 w-8 bg-white" onClick={() => setShow(!show)}/> }
                                                        <div className="sm:hidden ">
                                                            {show && <div className="flex flex-col absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10">
                                                                                {navLink.map((item, index)=>{
                                                                                          return(
                                                                                                    <Link to={item.id} key={index} className="mx-2 text-[#6e6d6d] hover:text-[#000] bg-white text-[15px] p-2 rounded-sm">{item.title}</Link>
                                                                                          )
                                                                                })}
                                                                      </div>
                                                            }
                                                            
                                                        </div>
                                                  </div>
                                        </div>
                              </nav>
                    </>
          )
}

export default Navbar;