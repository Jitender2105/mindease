"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <h1 className="text-2xl font-bold">Happy Mind Spouts</h1>
                <div className="space-x-4">
                    <Link href="/student-login" className="hover:underline">Student Login</Link>
                    <Link href="/authority-login" className="hover:underline">Authority Login</Link>
                    <Link href="/signup" className="hover:underline">Signup</Link>
                    <Link href="/dashboard" className="hover:underline">Dashboard</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="text-center py-20 bg-blue-500 text-white">
                <h2 className="text-4xl font-bold">Empowering Young Minds with Mental Health Solutions</h2>
                <p className="mt-4 text-lg">Providing a safe space for students to grow emotionally and mentally.</p>
                <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg text-lg font-semibold">Get Started</button>
            </section>

            {/* Features Section */}
            <section className="py-16 px-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-black">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md text-center">
                        <Image src="/images/counseling.jpg" alt="Counseling" width={300} height={200} className="mx-auto" />
                        <h3 className="text-xl font-semibold mt-4 text-black">Personalized Counseling</h3>
                        <p className="text-gray-600 mt-2 text-black">One-on-one sessions with expert counselors for emotional well-being.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md text-center text-black">
                        <Image src="/images/activities.jpg" alt="Activities" width={300} height={200} className="mx-auto" />
                        <h3 className="text-xl font-semibold mt-4 text-black">Engaging Activities</h3>
                        <p className="text-gray-600 mt-2 text-black">Interactive games and exercises designed to boost mental health.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md text-center">
                        <Image src="/images/community.jpg" alt="Community Support" width={300} height={200} className="mx-auto" />
                        <h3 className="text-xl font-semibold mt-4 text-black">Community Support</h3>
                        <p className="text-gray-600 mt-2 text-black">A safe space where students can connect and share experiences.</p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-white px-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-black">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-black">Step 1: Sign Up</h3>
                        <p className="text-black-600 text-black">Create your account and set up your profile.</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-black">Step 2: Explore Resources</h3>
                        <p className="text-black-600 text-black">Access mental health articles, exercises, and support groups.</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-black">Step 3: Get Help</h3>
                        <p className="text-black-600 text-black">Schedule counseling sessions and track your progress.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-200 px-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-black">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 text-black">“Happy Mind Spouts has truly changed my life. I feel more confident and happier.”</p>
                        <h3 className="font-semibold mt-4 text-black">- A Grade 10 Student</h3>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 text-black">“An amazing platform to support students in their mental health journey.”</p>
                        <h3 className="font-semibold mt-4 text-black">- School Counselor</h3>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16 px-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-black">Latest Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-black">5 Ways to Reduce Exam Stress</h3>
                        <p className="text-gray-600 mt-2 text-black">Discover simple techniques to stay calm during exams.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-black">The Importance of Mental Health in Schools</h3>
                        <p className="text-gray-600 mt-2 text-black">Why schools should prioritize students' emotional well-being.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-black">How to Build Resilience</h3>
                        <p className="text-gray-600 mt-2 text-black">Tips for students to overcome challenges with confidence.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-16 bg-blue-600 text-white">
                <h2 className="text-3xl font-bold">Join Us in Making a Difference</h2>
                <p className="mt-4 text-lg">Sign up today to access mental health resources and support.</p>
                <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg text-lg font-semibold">Sign Up Now</button>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-6 text-center mt-8">
                <p>© 2025 Happy Mind Spouts. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
