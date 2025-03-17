"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

interface SignupFormData {
    name: string;
    email: string;
    password: string;
    dob: string;
    gender: string;
}

export default function Signup() {
    const [formData, setFormData] = useState<SignupFormData>({
        name: "",
        email: "",
        password: "",
        dob: "",
        gender: "",
    });

    const [passwordCriteria, setPasswordCriteria] = useState({
        length: false,
        lowercase: false,
        uppercase: false,
        number: false,
        specialChar: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (e.target.name === "password") {
            validatePassword(e.target.value);
        }
    };

    const validatePassword = (password: string) => {
        setPasswordCriteria({
            length: password.length >= 8,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /\d/.test(password),
            specialChar: /[@$!%*?&#]/.test(password),
        });
    };

    const finalData = { ...formData, type_of_user: "student" };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (Object.values(passwordCriteria).includes(false)) return;
        try {
            const res = await axios.post("http://localhost:5000/api/signup", finalData);
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
        <div 
            className="relative flex justify-center items-center min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
        >
            {/* Semi-Transparent Form Container */}
            <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg w-full max-w-md">
                
                {/* Logo Section */}
                <div className="flex justify-center mb-4">
                    <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
                </div>

                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up As Student</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                    />

                    {/* Password Criteria Validation */}
                    <div className="text-sm mt-1">
                        <p className={passwordCriteria.length ? "text-green-600 flex items-center" : "text-red-500"}>
                            {passwordCriteria.length && <FaCheck className="mr-1" />} At least 8 characters
                        </p>
                        <p className={passwordCriteria.lowercase ? "text-green-600 flex items-center" : "text-red-500"}>
                            {passwordCriteria.lowercase && <FaCheck className="mr-1" />} At least one lowercase letter
                        </p>
                        <p className={passwordCriteria.uppercase ? "text-green-600 flex items-center" : "text-red-500"}>
                            {passwordCriteria.uppercase && <FaCheck className="mr-1" />} At least one uppercase letter
                        </p>
                        <p className={passwordCriteria.number ? "text-green-600 flex items-center" : "text-red-500"}>
                            {passwordCriteria.number && <FaCheck className="mr-1" />} At least one number
                        </p>
                        <p className={passwordCriteria.specialChar ? "text-green-600 flex items-center" : "text-red-500"}>
                            {passwordCriteria.specialChar && <FaCheck className="mr-1" />} At least one special character (@$!%*?&#)
                        </p>
                    </div>

                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black custom-select"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
