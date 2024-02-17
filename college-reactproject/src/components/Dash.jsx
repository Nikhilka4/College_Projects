import React from 'react'
import Table from './DashTable'
import "./Dash.css"
import Button from './Button'

const Dash = () => {
    return (
        <>
            <div className="dashBoard">
                <div className="tableConent">
                    <h2>DashBoard</h2>
                    <Table className="table" />
                </div>
                <div className="uploadContent">
                    <div className="newUpload">
                        <Button label="New Upload" />
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

