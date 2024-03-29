import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import DropDown from "./DropDown";
import Radio from "./Radio";
import Register from './RegNo';
import Button from './Button';
import "./ResultsSearch.css";

const Results = () => {
    return (
        <main>
            <div className="box">
                <div className="black-top"></div>
                <div className='form'>
                    <DropDown className="drop"
                        placeholder="Select your Semester"
                    />
                    <Radio />
                    <Register />
                    <Button label="Get Results" />
                </div>
            </div>
            <div class="results">
                <h1>Result notifications will be displayed here...</h1>
            </div>
        </main>
    )
}

export default Results;

