import React, {useState, useRef} from 'react'
import { CiImageOn } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const InputTeam = () => {

  const [teamMember, setTeamMember] = useState({
    name: '',
    position: '',
    linkedInLink: '',
    instagramLink: '',
  })

  const [profilePic, setProfilePic] = useState(null);
  const picRef = useRef(null);

  

  const handleChange = (e) =>{
    setTeamMember({
      ...teamMember,
      [e.target.name] : e.target.value
    })
  }

  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () =>{
        setProfilePic(reader.result);
      }
      reader.readAsDataURL(file);
    }

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(teamMember);
    console.log(profilePic);
  }

  return (
    <div className="w-screen h-screen p-2 bg-slate-300 flex justify-center items-center relative">
      <form action="" className="w-[30%] flex flex-col gap-5 absolute" onSubmit={handleSubmit}>
        <h1 className='text-center text-[2rem]'>Team Members</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Name" name='name' onChange={handleChange} value={teamMember.name} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
         <input type="text" className="grow" placeholder="Position" name="position" onChange={handleChange} value={teamMember.position} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
         <input type="url" className="grow" placeholder="LinkedIn Link" name="linkedInLink" onChange={handleChange} value={teamMember.linkedInLink} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="url" className="grow" placeholder="Instagram Link" name="instagramLink" onChange={handleChange} value={teamMember.instagramLink} />
        </label>
        <label className=" flex items-center gap-2">
          {profilePic && <> <IoCloseSharp className='cursor-pointer' onClick={() =>{
            setProfilePic(null);
            picRef.current.value = null;
          }} /> <img src={profilePic} alt="profile" className="w-[100px] h-[100px]" /></>}
         {!profilePic && <CiImageOn className="fill-primary w-6 h-6 cursor-pointer" onClick={() => picRef.current.click()} />}
          <input accept='image/*' type="file"  hidden  name="profilePic" onChange={handleImageChange} ref={picRef} />
          {!profilePic && <span>Upload Profile Pic</span>}
        </label>
        <button className="btn rounded-full btn-primary text-white" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputTeam

