"use client"; // Add this to use hooks

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
interface SignupFormData {
    name: string;
    email: string;
    password: string;
    dob: string;
    gender: string;
    // Testing Comment
}


export default function Signup() {
    const [formData, setFormData] = useState<SignupFormData>({
        name: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/signup', formData);
            alert(res.data.message);
        } catch (error: any) {
            if (error.response && error.response.data) {
                alert(error.response.data.error);
            } else {
                alert("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div>
            <h1>Signup</h1><br /><br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                /><br /><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br /><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br /><br />
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                /><br /><br />
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select><br /><br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}