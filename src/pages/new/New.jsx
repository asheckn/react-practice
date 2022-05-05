import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import  DriveFolderUploadOutlinedIcon  from '@mui/icons-material/DriveFolderUploadOutlined';
import "./new.scss";
import { useState } from 'react';

const New = ({inputs, title}) => {

  const [file, setFile] = useState("");


  return (
    <div className='new'>
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              className='img'
               alt="" />
            </div>
            <div className="right">
              <form action="">
              <div className="formInput">
                  <label htmlFor='file' >Image: <DriveFolderUploadOutlinedIcon className='icon'/></label>
                  <input type="file" onChange={e=>setFile(e.target.files[0])} id='file' style={{display: "none"}}/>
                </div>


                {/* <div className="formInput">
                  <label htmlFor="">Username</label>
                  <input type="text" placeholder='john_doe' />
                </div>
                <div className="formInput">
                  <label htmlFor="">Fullname</label>
                  <input type="text" placeholder='John Doe' />
                </div>
                <div className="formInput">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder='john_doe@gmail.com' />
                </div>
                <div className="formInput">
                  <label htmlFor="">Phone</label>
                  <input type="text" placeholder='+263 778 348 169' />
                </div>

                <div className="formInput">
                  <label htmlFor="">Password</label>
                  <input type="password" />
                </div>

                <div className="formInput">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='Doe House 420 Street Harare' />
                </div>

                <div className="formInput">
                  <label htmlFor="">Country</label>
                  <input type="text" placeholder='Zimbabwe' />
                </div> */}

                {inputs.map((input) => (
                  <div className='formInput' key={input.id}> 
                    <label htmlFor={input.name}>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))}

                <button className="send">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New