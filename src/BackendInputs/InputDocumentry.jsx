import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const InputDocumentry = () => {

  const [documentary, setDocumentary] = useState({
    name: '',
    url: '',
    description: ''
  })

  const {mutate} = useMutation({
    mutationFn: async() =>{
      try {
          const res= await fetch('http://localhost:5000/api/create/documentary',{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(documentary),
          })
          const data= await res.json();
          if(!res.ok){
            throw new Error(data.message);
          }
          return data;

      } catch (error) {
        throw new Error(error.message);
        console.log(error);
      }
    }
  })

  const handleChange  = (e) =>{
    setDocumentary({
      ...documentary,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    mutate();
  }


  return (
    <div className="w-screen h-screen p-2 bg-slate-300 flex justify-center items-center">
      <form className="w-[30%] flex flex-col gap-5" onSubmit={handleSubmit}>
      <h1 className='text-center text-[2rem]'>Documentary Info</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Documentary Name" name="name" onChange={handleChange} value={documentary.name} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
         <input type="url" className="grow" placeholder="URL" name="url" onChange={handleChange} value={documentary.url} />
        </label>
        <textarea name="description" cols="30" className="rounded-lg outline-none p-1" onChange={handleChange} value={documentary.description}></textarea>
        <button className="btn rounded-full btn-primary text-white" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputDocumentry;
