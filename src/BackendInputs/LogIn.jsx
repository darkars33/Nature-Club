import React, {useState} from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import {toast} from "react-hot-toast";

const LogIn = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })


// Assuming you have a way to store and retrieve the auth token, like localStorage
const storeToken = (token) => {
  localStorage.setItem('authToken', token);
};

const getToken = () => {
  return localStorage.getItem('authToken');
};

const queryClient = useQueryClient();

const { mutate: userLogIn, isError, isPending } = useMutation({
  mutationFn: async () => {
    try {
      const res = await fetch('http://localhost:5000/api/logIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      // Store the token (or other auth details)
      storeToken(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  },
  onSuccess: () => {
    toast.success('Logged in successfully');
    queryClient.invalidateQueries({ queryKey: ['authUser'] });
  },
  onError: (error) => {
    toast.error(error.message);
  },
});


  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    userLogIn();
  }


  return (
    <>
      <div className="max-w-screen-xl mx-auto flex h-screen">
        <div className="flex-1 flex flex-col justify-center items-center">
          <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-extrabold text-black">
              {"Let's"} go.
            </h1>
            <label className="input input-bordered rounded flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="username"
                name="username"
                onChange={handleChange}
                value={formData.username}
              />
            </label>
            <label className="input input-bordered rounded flex items-center gap-2">
              <input
                type="password"
                className="grow"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
            </label>
            <button className="btn rounded-full btn-primary text-white">
              {/* {isPending ? "Loading..." : "Log In"} */}
            </button>
            {/* {isError && <p className="text-red-500">Something went wrong</p>} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
