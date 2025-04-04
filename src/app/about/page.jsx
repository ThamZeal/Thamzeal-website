'use client';

import { useState, useEffect } from "react";
import Button from "../components/button";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
    {
        name: "Sneha Kumar",
        role: "Marketing Lead",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Nikhil Raj",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Aarathi Menon",
        role: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
    }
];

const coreValues = [
    {
        title: "Innovation",
        description: "We constantly push boundaries to develop next-generation solutions."
    },
    {
        title: "Integrity",
        description: "Honesty and transparency define our work and business ethics."
    },
    {
        title: "Customer Focus",
        description: "Our solutions are designed to meet and exceed customer expectations."
    }
];

function About() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Hero Section */}
            

            {/* Company Overview */}
            <section className="text-white bg-black py-16 -mt-28 pt-38">
                <div className="container relative flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Left Text Section */}
                    <div className="w-full md:w-1/2 text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold pb-5"
                        >
                            About ThamZeal International
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-gray-300 leading-relaxed"
                        >
                            ThamZeal International is an emerging innovation-driven startup
                            officially registered in January 2025 and operational since 2024.
                            Our goal is to redefine industries through technology, e-commerce,
                            utilities, and AI-powered solutions. Similar to Google, we aim
                            to be a product-first company creating transformative products
                            across multiple industries.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-8 space-x-4"
                        >
                            <Button type="primary" title="Our Businesses" />
                            <Button type="Secondary" title="Contact Us" />

                        </motion.div>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg"
                            src="/images/about.jpg"
                            alt="ThamZeal"
                        />
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="w-full bg-white py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Section Heading */}
                    <div className="text-gray-900 text-left mb-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            Our Vision & Mission
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            At ThamZeal International, we believe in building a smarter, sustainable future through innovation, collaboration, and purpose-driven action.
                        </motion.p>
                    </div>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold text-[#065C9B] mb-3">🌟 Mission</h2>
                            <p className="text-gray-700">
                                To empower brands and businesses globally by providing innovative technology solutions and strategic collaborations that spark growth, inspire creativity, and leave a lasting impact.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold text-[#065C9B] mb-3">🚀 Vision</h2>
                            <p className="text-gray-700">
                                To be a globally recognized leader in tech-driven innovations and creative brand synergy — shaping industries, enabling progress, and transforming lives.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold text-[#065C9B] mb-3">📈 Vision 2030</h2>
                            <p className="text-gray-700">
                                By 2030, ThamZeal International aims to establish a powerful global presence with multiple brand divisions, AI-integrated solutions, and a strong impact across industries including marketing, design, software, and sustainability.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="w-full bg-gray-50 py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Section Heading */}
                    <div className="text-gray-900 text-left mb-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            Our Core Values
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            The principles that guide our approach to business and innovation.
                        </motion.p>
                    </div>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((val, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                viewport={{ once: true }}
                                key={i}
                                className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-gray-800">{val.title}</h3>
                                <p className="text-gray-700 mt-2">{val.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="w-full bg-white py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Section Heading */}
                    <div className="text-gray-900 text-left mb-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            Meet Our Team
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Get to know the passionate individuals driving ThamZeal International forward.
                        </motion.p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                viewport={{ once: true }}
                                className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg text-center"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-28 h-28 mx-auto mb-4 rounded-full object-cover border-4 border-[#065C9B]"
                                />
                                <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
                                <p className="text-gray-600">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="w-full bg-gradient-to-r from-[#4047A7] to-[#4EAADA] py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-center items-center gap-6"
                >
                    <h2 className="text-white text-2xl font-semibold text-center md:text-left">
                        Want to collaborate with us? Let's build the future together!
                    </h2>
                    <Button type="secondary" title="Let's talk business !!" />
                </motion.div>
            </section>
        </>
    );
}

export default About;