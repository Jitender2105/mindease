"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

interface SignupFormData {
    name: string;
    email: string;
    password: string;
    dob: string;
    gender: string;
    institute_id: string;
}

interface Institute {
    id: number;
    institute_name: string;
}

export default function Signup() {
    const [formData, setFormData] = useState<SignupFormData>({
        name: "",
        email: "",
        password: "",
        dob: "",
        gender: "",
        institute_id: ""
    });

    const [institutes, setInstitutes] = useState<Institute[]>([]);
    const [filteredInstitutes, setFilteredInstitutes] = useState<Institute[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    const [passwordCriteria, setPasswordCriteria] = useState({
        length: false,
        lowercase: false,
        uppercase: false,
        number: false,
        specialChar: false,
    });

    useEffect(() => {
        axios.get("http://localhost:5000/api/institutes")
            .then(response => {
                setInstitutes(response.data);
                setFilteredInstitutes(response.data);
            })
            .catch(error => console.error("Error fetching institutes:", error));
    }, []);

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

    const handleInstituteSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredInstitutes(
            institutes.filter(inst => inst.institute_name.toLowerCase().includes(query))
        );
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (Object.values(passwordCriteria).includes(false)) return;
        try {
            const res = await axios.post("http://localhost:5000/api/signup", formData);
            alert(res.data.message);
        } catch (error: any) {
            alert(error.response?.data?.error || "An error occurred. Please try again later.");
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
            <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg w-full max-w-4xl flex">
                <div className="w-1/3 p-6 bg-blue-100 rounded-l-2xl">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Why Sign Up?</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Access exclusive resources</li>
                        <li>Join a network of learners</li>
                        <li>Track your progress easily</li>
                        <li>Personalized learning experience</li>
                    </ul>
                </div>
                <div className="w-2/3 p-6">
                    <div className="flex justify-center mb-4">
                        <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
                    </div>
                    <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up As Student</h1>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black" />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black" />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black" />
                        <div className="text-xs text-gray-600 col-span-2 flex flex-wrap gap-x-4">
                            {Object.entries(passwordCriteria).map(([key, valid]) => (
                                <span key={key} className={valid ? "text-green-600 flex items-center" : "text-red-500 flex items-center"}>
                                    {valid && <FaCheck className="mr-1" />} {key.replace(/([A-Z])/g, ' $1')}
                                </span>
                            ))}
                        </div>
                        <input type="text" placeholder="Search Institute" value={searchQuery} onChange={handleInstituteSearch} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black" />
                        <select name="institute_id" value={formData.institute_id} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black">
                            <option value="">Select Institute</option>
                            {filteredInstitutes.map(inst => (
                                <option key={inst.id} value={inst.id}>{inst.institute_name}</option>
                            ))}
                        </select>
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black" />
                        <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <button type="submit" className="col-span-2 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}