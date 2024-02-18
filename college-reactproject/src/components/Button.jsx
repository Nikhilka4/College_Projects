import "./Button.css";
import React from 'react'; 
import { Button } from 'primereact/button';

export default function Buttons(props) {
    const buttonStyle = props.applyMargin ? { marginRight: '40px' } : {};
    return (
        <div className="card flex justify-content-center">
            <Button className='p-button-success' label={props.label} style={buttonStyle} onClick={props.onClick} />
        </div>
    )
}
