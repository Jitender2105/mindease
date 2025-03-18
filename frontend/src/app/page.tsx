"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white-600 p-4 text-white flex justify-between items-center">
                  <div className="flex justify-center mb-4">
                                             <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
                          </div>   
                <div className="space-x-4 text-gray-700">
                    <Link href="/login" className="hover:underline">Student Login</Link>
                    <Link href="/signup" className="hover:underline">Student Signup</Link>
                    <Link href="/authority/login" className="hover:underline">Authority Login</Link>
                    <Link href="/authority/signup" className="hover:underline">Authority Signup</Link>
                    <Link href="/dashboard" className="hover:underline">Dashboard</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="text-center py-20 bg-blue-500 text-white">
                <h2 className="text-4xl font-bold">Empowering Young Minds for a Brighter Future</h2>
                <p className="mt-4 text-lg">Comprehensive mental health solutions tailored for students and children.</p>
            </header>

            {/* Features Section */}
            <section className="py-12 px-6 text-gray-700">
                <h3 className="text-3xl font-bold text-center mb-8">Our Features</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h4 className="text-xl font-semibold">Counseling Support</h4>
                        <p className="mt-2">Access professional counselors anytime, anywhere.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h4 className="text-xl font-semibold">Mindfulness Exercises</h4>
                        <p className="mt-2">Daily activities to improve focus and reduce stress.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h4 className="text-xl font-semibold">Progress Tracking</h4>
                        <p className="mt-2">Monitor emotional well-being and growth.</p>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-12 bg-gray-200 text-center text-gray-700">
                <h3 className="text-3xl font-bold mb-6">Our Clients</h3>
                <p>Trusted by schools, parents, and mental health professionals worldwide.</p>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 text-white text-center py-4">
                <p>&copy; 2025 Happy Mind Spouts. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
