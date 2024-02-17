import "./RegNo.css";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function RegNo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText className="p-inputtext Register" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Register No."/>
        </div>
    )
}
        