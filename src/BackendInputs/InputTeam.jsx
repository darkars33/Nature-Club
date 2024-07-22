import React, {useState, useRef} from 'react'
import { CiImageOn } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const InputTeam = () => {

  const [teamMember, setTeamMember] = useState({
    name: '',
    position: '',
    linkedInLink: '',
    instagramLink: '',
  })

  const [profile, setProfilePic] = useState(null);
  const picRef = useRef(null);

  const {mutate} = useMutation({
    mutationFn: async({teamMember, profile}) =>{
      try {
        const res= await fetch("http://localhost:5000/api/create/team",{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: teamMember.name, position: teamMember.position, linkedInLink: teamMember.linkedInLink, instagramLink: teamMember.instagramLink, profile: profile}),
        })
        const data = await res.json();
        if(!res.ok){
          throw new Error(data.message);
        }
        return data;
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    },
    onSuccess: () =>{
      toast.success('Team Member Added Successfully');
    }
  })

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
    mutate({teamMember, profile});
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
          {profile && <> <IoCloseSharp className='cursor-pointer' onClick={() =>{
            setProfilePic(null);
            picRef.current.value = null;
          }} /> <img src={profile} alt="profile" className="w-[100px] h-[100px]" /></>}
         {!profile && <CiImageOn className="fill-primary w-6 h-6 cursor-pointer" onClick={() => picRef.current.click()} />}
          <input accept='image/*' type="file"  hidden  name="profilePic" onChange={handleImageChange} ref={picRef} />
          {!profile && <span>Upload Profile Pic</span>}
        </label>
        <button className="btn rounded-full btn-primary text-white" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputTeam

