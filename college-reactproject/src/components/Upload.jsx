import React from 'react'
import "./Upload.css";
import DropDown from "./DropDown";
import Radio from "./Radio";
import UploadFiles from './DragDrop';


const Upload = () => {
  return (
    <>
        <main>
            <div className="box">
                <div className="top"></div>
                <div className="black-top"></div>
                <div className='form'>
                    <DropDown className="drop"
                        placeholder="Select Semester"
                        height="5vh"
                    />
                    <Radio />
                    <UploadFiles />
                </div>
            </div>
        </main>
    </>
  )
}

export default Upload;