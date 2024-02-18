import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import "./Radio.css";
export default function Radio() {
    const [examType, setExamType] = useState('Regular');
// google.com
    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <RadioButton inputId="regular" name="type" value="Regular" onChange={(e) => setExamType(e.value)} checked={examType === 'Regular'} />
                    <label htmlFor="regular" className="ml-2">Regular</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="supplementary" name="type" value="Supplymentary" onChange={(e) => setExamType(e.value)} checked={examType === 'Supplymentary'} />
                    <label htmlFor="supplementary" className="ml-2">Supplymentary</label>
                </div>
            </div>
        </div>
    );
}
