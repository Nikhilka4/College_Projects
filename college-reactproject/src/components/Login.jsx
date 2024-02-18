import React from "react";
import Buttons from "./Button";
import LoginForm from "./LoginForm";
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function LoginDemo() {
    const navigate = useNavigate();
    return (
        <main>

            <div class="login-page">
                <div class="form">
                    <h2>LOG IN</h2>
                    <LoginForm />
                    <Buttons onClick = {() => navigate('/dashboard')} className='p-button-success' label="LOGIN" />
                </div>
            </div>
            
        </main>
    )
}
