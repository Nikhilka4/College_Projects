import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import "./LoginForm.css";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="card flex justify-content-center">
            <div className="p-float-label">
                <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label className="label" htmlFor="username">Username</label>
            </div>
            <div className="p-float-label">
                <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask feedback={false} />
                <label className="label" htmlFor="password">Password</label>
            </div>
        </div>
    )
}
