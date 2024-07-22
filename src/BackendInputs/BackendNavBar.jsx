import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { navLink } from "../Constants/data";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {toast} from "react-hot-toast";

const BackendNavBar = () => {
          const [show, setShow] = useState(false);

          const queryClient = useQueryClient(); 

          const {mutate, isError, isPending} = useMutation({
            mutationFn: async() =>{
              try {
                const res = await fetch('http://localhost:5000/api/logOut',{
                  method: "POST",
                });
                const data= await res.json();
              } catch (error) {
                console.log(error);
              }
            },
            onSuccess: () =>{
              toast.success('Logged out successfully');
              queryClient.invalidateQueries({queryKey: ["User"]});
            }
          })

  return (
          <>
          <nav className="w-full fixed flex items-center pt-2 top-0 z-20 bg-white border-b border-black">
            <div className="w-full flex justify-center items-center max-w-[90%] mx-auto bg-white">
              <div className="flex items-center gap-10 bg-white ms:gap-1 md:hidden p-5">
                <NavLink className="mx-2 text-black hover:underline bg-white text-[18px]" to="/" >Home</NavLink>
                <NavLink className="mx-2 text-black hover:underline bg-white text-[18px]" to="/input-team" >Team</NavLink>
                <NavLink className="mx-2 text-black hover:underline bg-white text-[18px]" to="/input-trip" >Events</NavLink>
                <NavLink className="mx-2 text-black hover:underline bg-white text-[18px]" to="/input-documentary" >Documentary</NavLink>
                <CiLogout className="text-[2rem] text-black cursor-pointer" onClick={() => mutate()} />
              </div>
              <div className="sm:hidden bg-white">
                {show ? (
                  <IoMdClose
                    className="h-8 w-8 bg-white"
                    onClick={() => setShow(!show)}
                  />
                ) : (
                  <IoIosMenu
                    className="h-8 w-8 bg-white"
                    onClick={() => setShow(!show)}
                  />
                )}
                <div className="sm:hidden ">
                  {show && (
                    <div className="flex flex-col absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10">
                      {navLink.map((item, index) => {
                        return (
                          <Link
                            to={item.id}
                            key={index}
                            className="mx-2 text-[#6e6d6d] hover:text-[#000] bg-white text-[15px] p-2 rounded-sm"
                            onClick={() => setShow(!show)}
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </>
  )
}

export default BackendNavBar
