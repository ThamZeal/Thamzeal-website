'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/button";
import Image from "next/image";

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
    },
];




function SuperVision() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const [selectedVertical, setSelectedVertical] = useState(null);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center text-white">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={"/banners/aerial-view-business-team.webp"}
                        alt="ThamZeal Vision"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-12 max-w-3xl">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl mb-4"
                    >
                        Thamzeal is not just a company. <br /> It's a coded movement engineering the future across innovation, industry, and identity.
                    </motion.h3>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row justify-center items-center gap-4"
                    >
                        <Button type="primary" href='/think' title="Our Vision" />
                        <Button type="Secondary" href='/thrive' title="Our Ventures" />
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="text-white bg-black py-16">
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
                            The Venture Ecosystem
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-gray-300 leading-relaxed"
                        >
                            We are a parent company and venture ecosystem, shaping the future across Retail, Food, Services, Tech, and Human Capital. Every vertical, codename, and concept we build shares one mission: to push boundaries, solve deeply, and scale silently.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-gray-300 leading-relaxed mt-4"
                        >
                            Our purpose is to create companies, platforms, and products that don't just function—they shift culture, industry, and behavior.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <Button type="primary" href='#philosophy' title="Our Philosophy" />
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
                            src="/images/handshake.webp"
                            alt="ThamZeal Ecosystem"
                        />
                    </div>
                </div>
            </section>

        
            

            {/* Careers Lab Section */}
            <section className="w-full bg-gray-50 py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="container flex flex-col md:flex-row items-center md:items-start gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/2"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Careers Lab</h2>
                            <h3 className="text-2xl font-semibold text-[#4EAADA] mb-4">The Human OS of Thamzeal</h3>
                            <p className="text-gray-700 mb-6">
                                Careers Lab is our internal accelerator for humans. It identifies, mentors, and launches the next wave of engineers, creators, builders, and CEOs.
                            </p>
                            <p className="text-gray-700 mb-6">
                                This is our live-testing lab where:
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>Raw talent is transformed through real-world experience</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>Innovation is taught through failure</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>Ventures are led by the ones who built them from zero</span>
                                </li>
                            </ul>
                            <Button type="primary" href='/contact' title="Join Careers Lab" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/2"
                        >
                            <img
                                src="/images/creer-lab.webp"
                                alt="Careers Lab"
                                className="rounded-2xl shadow-lg w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            

            {/* Product-Led Innovation */}
            <section className="w-full bg-white py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Product-Led Innovation Model</h2>
                        <p className="text-gray-700">
                            Every Thamzeal project starts from a problem-first, product-forward mindset. We do not follow trends. We build technologies before the market demands them.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-[#4EAADA] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">We operate like a lab</h3>
                            <p className="text-gray-700">Testing, experimenting, and validating with clear hypotheses and metrics.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-[#4EAADA] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">We ship like a company</h3>
                            <p className="text-gray-700">Delivering polished, complete products that solve real problems effectively.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-[#4EAADA] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">We scale like a platform</h3>
                            <p className="text-gray-700">Building infrastructure and systems designed for exponential growth from day one.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Holding Philosophy */}
            <section className="w-full bg-gray-50 py-16" id='philosophy'>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-col items-start gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Holding Philosophy</h2>
                            <p className="text-gray-700 mb-6">
                                Thamzeal is a next-gen holding company with a stealth framework. It builds, launches, and scales independent verticals—each carrying the same DNA.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Impact-first vision</h3>
                                    <p className="text-gray-700">Creating meaningful change as the primary goal.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Product integrity</h3>
                                    <p className="text-gray-700">Building solutions with uncompromising quality.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Design precision</h3>
                                    <p className="text-gray-700">Crafting experiences with meticulous attention to detail.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Founder-level leadership</h3>
                                    <p className="text-gray-700">Operating with ownership mentality at every level.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                We don't name everything we build. Some things stay hidden. Because some things are too early—or too powerful to name yet.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <div className="bg-black text-white text-center p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-[#4EAADA] mb-6">Sustainability, Scale & Silence</h3>
                                <p className="text-gray-300 mb-6">
                                    Thamzeal operates with radical sustainability, ethical frameworks, and silent velocity.
                                </p>
                                <p className="text-gray-300 mb-8">
                                    We scale with care. We build with purpose. We design for impact—not noise.
                                </p>
                                <div className="h-px w-full bg-gray-700 mb-8"></div>
                                <p className="text-2xl font-light text-center">
                                    By the time you hear about us, we've already built it.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Meet Our Team */}
            {/* <section className="w-full bg-white py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"> */}
                    {/* Section Heading */}
                    {/* <div className="text-gray-900 text-left mb-10">
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
                            We are engineers, designers, researchers, operators, and creators—but more than that, we are builders of better.  From our founder’s first challenge to our global ecosystem today, every team member carries one shared principle: the future is something we make, not something we wait for.
                        </motion.p>
                    </div> */}
                    {/* Team Grid */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg text-center"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-28 h-28 mx-auto mb-4 rounded-full object-cover border-4 border-[#065C9B]"
                                />
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {member.name}
                                </h2>
                                <p className="text-gray-600">{member.role}</p>
                            </motion.div>
                        ))}
                    </div> */}
                {/* </div>
            </section> */}

            {/* Call to Action */}
            <section className="w-full bg-gradient-to-r from-[#4047A7] to-[#4EAADA] py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <div className="text-center md:text-left">
                        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
                            Want to be part of our vision?
                        </h2>
                        <p className="text-white text-opacity-90">
                            Join our ecosystem as a partner, talent, or collaborator.
                        </p>
                    </div>
                    <Button type="secondary" href='/contact' title="Connect With Us" />
                </motion.div>
            </section>
        </>
    );
}

export default SuperVision;