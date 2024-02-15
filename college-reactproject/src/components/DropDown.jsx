
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function FloatLabelDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label w-full md:w-14rem">
                <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full" />
                <label htmlFor="dd-city">Select a City</label>
            </span>
        </div>
    )
}
        