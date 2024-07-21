import React, {useState, useRef} from 'react'
import { CiImageOn } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const InputTrip = () => {

  const [event, setEvent] = useState({
    name: '',
    date: '',
    description: '',
    location: '',
  })
  const [eventPic, setEventPic] = useState(null);
  const eventRef = useRef(null);

  const handleChange = (e) =>{
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    })
  }

  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () =>{
        setEventPic(reader.result);
      }
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(event);
    console.log(eventPic);
  }

  return (
    <div className="w-screen h-screen p-2 bg-slate-300 flex justify-center items-center relative">
      <form action="" className="w-[30%] flex flex-col gap-5 absolute" onSubmit={handleSubmit}>
        <h1 className='text-center text-[2rem]'>Events</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Event Name" url="name" name='name' onChange={handleChange} value={event.name} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
         <input type="date" className="grow" placeholder="date" name="date" onChange={handleChange} value={event.date} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
         <input type="text" className="grow" placeholder="Description" name="description" onChange={handleChange} value={event.description} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Location" name="location" onChange={handleChange} value={event.location} />
        </label>
        <label className=" flex items-center gap-2">
          {eventPic && (<><IoCloseSharp className='cursor-pointer' onClick={() =>{
            setEventPic(null);
            eventRef.current.value = null;
          }} /> <img src={eventPic} alt="event" className="w-[100px] h-[100px]" /></>)}
          {!eventPic && <CiImageOn className="fill-primary w-6 h-6 cursor-pointer" onClick={() => eventRef.current.click()} />}
         <input type="file" className="grow" placeholder="Event Pic" name="eventPic" hidden onChange={handleImageChange} ref={eventRef} />
         {!eventPic && <span>Upload Event Pic</span>}
        </label>
        <button className="btn rounded-full btn-primary text-white" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputTrip;
