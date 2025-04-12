"use client";  // Add this at the top

// src/app/login/page.tsx

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Image from 'next/image';

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
         <div 
            className="relative flex justify-center items-center min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
        >
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-4">
                             <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
          </div>   
            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Login as Student</h1>
              <form onSubmit={ handleSubmit} className="space-y-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black'
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black'
                />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
            </form>
        </div></div>
    );
}