import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import Buttons from "./Button";
import './Login.css';

export default function LoginDemo() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <main>

            <div class="login-page">
                <div class="form">
                    <h2>LOG IN</h2>
                    
                    <Buttons className='p-button-success' label="LOGIN" />
                </div>
            </div>
            <div class="results">
                <h1>Result notifications will be displayed here...</h1>
            </div>
        </main>
    )
}
