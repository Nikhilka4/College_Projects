
import "./DropDown.css";

import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function DropDown(props) {
    const [semester, setSemester] = useState(null);
    const semesters = [
        { name: '1st semester', code: '1' },
        { name: '2nd semester', code: '2' },
        { name: '3rd semester', code: '3' },
        { name: '4th semester', code: '4' },
        { name: '5th semester', code: '5' },
        { name: '6th semester', code: '6' },
        { name: '7th semester', code: '7' },
        { name: '8th semester', code: '8' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={semester} onChange={(e) => setSemester(e.value)} options={semesters} optionLabel="name" 
                placeholder={props.placeholder} className="w-full md:w-14rem" />
        </div>
    )
}
        