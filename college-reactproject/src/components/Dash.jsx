import React from 'react'
import Table from './DashTable'
import "./Dash.css"
import Button from './Button'
import { useNavigate } from 'react-router-dom';


const Dash = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="dashBoard">
                <div className="tableConent">
                    <h2>DashBoard</h2>
                    <Table className="table" />
                </div>
                <div className="uploadContent">
                    <div className="newUpload">
                        <Button onClick = {() => navigate('/upload')} label="New Upload" />
                    </div>
                    <div className="newUpload">
                        <Button label="New Upload" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dash

