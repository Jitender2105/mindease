// src/app/login/page.tsx

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

// Define form data type
interface LoginFormData {
    email: string;
    password: string;
}

export default function Login() {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', formData);
            alert(res.data.message);
        } catch (error: any) {
            alert(error.response.data.error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}