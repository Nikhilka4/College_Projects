import React from "react";
import Buttons from "./Button";
import LoginForm from "./LoginForm";
import './Login.css';

export default function LoginDemo() {
    return (
        <main>

            <div class="login-page">
                <div class="form">
                    <h2>LOG IN</h2>
                    <LoginForm />
                    <Buttons className='p-button-success' label="LOGIN" />
                </div>
            </div>
            
        </main>
    )
}
