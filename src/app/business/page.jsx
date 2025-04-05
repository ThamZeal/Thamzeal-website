'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/button";
import Image from "next/image";

const brand_divisions = [
    {
        title: "Tech IT Solutions (Collaboration with Xyberai LLC)",
        desc: "Pioneering digital products and applications for transformative solutions.",
    },
    {
        title: "E-commerce & Retail",
        desc: "Creating seamless online shopping experiences for customers worldwide.",
    },
    {
        title: "Import & Export",
        desc: "Providing essential utility solutions for everyday convenience.",
    },
    {
        title: "F&B Chain",
        desc: "Open to exciting partnerships and collaborations in various industries.",
    },
    {
        title: "AI-Driven Innovations",
        desc: "Pioneering digital products and applications for transformative solutions.",
    },
];

function Business() {
    const [expandedDivision, setExpandedDivision] = useState(null);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen -mt-28 flex items-center justify-center text-center text-white">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={"/banners/transport-logistics-products.webp"}
                        alt="Current"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-12 max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Our Business Divisions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl mb-6"
                    >
                        Explore our diverse brand divisions and exciting collaboration opportunities.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row justify-center items-center gap-4"
                    >
                        <Button type="primary" title="Explore Divisions" />
                        <Button type="Secondary" title="Partner With Us" />
                    </motion.div>
                </div>
            </section>

            {/* Business Overview */}
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
                            Multi-Industry Portfolio
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-gray-300 leading-relaxed"
                        >
                            ThamZeal International operates across multiple verticals through our
                            strategic brand divisions. Each division brings innovative solutions to
                            its respective industry, leveraging our core expertise in technology,
                            digital transformation, and customer experience. Our diverse portfolio
                            allows us to create synergies across sectors and deliver comprehensive
                            solutions to complex business challenges.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <Button type="primary" title="Our Approach" />
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
                            src="/banners/aerial-view-business-team.webp"
                            alt="ThamZeal Business Portfolio"
                        />
                    </div>
                </div>
            </section>

            {/* Brand Divisions */}
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
                            Brand Divisions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Explore our diverse brand divisions and exciting collaboration opportunities.
                        </motion.p>
                    </div>

                    {/* Divisions Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {/* Cards */}
                        {brand_divisions.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                key={index}
                                className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                    {item.title}
                                </h2>
                                <p className="text-gray-700">{item.desc}</p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="w-full bg-gray-50 py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="text-gray-900 text-left mb-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            Our Success Metrics
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Key performance indicators across our business divisions.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <MetricCard
                            number="12+"
                            title="Strategic Partnerships"
                            description="Global collaborations driving innovation"
                            delay={0.2}
                        />
                        <MetricCard
                            number="5"
                            title="Brand Divisions"
                            description="Specialized teams delivering sector-specific solutions"
                            delay={0.3}
                        />
                        <MetricCard
                            number="85%"
                            title="Client Retention"
                            description="Strong relationships built on trust and results"
                            delay={0.4}
                        />
                        <MetricCard
                            number="20+"
                            title="Countries Served"
                            description="Global reach with local understanding"
                            delay={0.5}
                        />
                    </div>
                </div>
            </section>

            {/* Collaboration Opportunities */}
            <section className="w-full bg-black text-white py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="text-white text-left mb-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            Collaboration Opportunities
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Join us in creating the next generation of innovative solutions.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 p-8 rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold text-[#4EAADA] mb-4">For Businesses</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>Strategic partnerships to enhance your product offerings</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>Access to our innovative technology stack and solutions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>Co-development opportunities for market-leading products</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>Integration with our established distribution networks</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <Button type="primary" title="Business Partnerships" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 p-8 rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold text-[#4EAADA] mb-4">For Innovators</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>Startup incubation programs with mentorship</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>Investment opportunities for disruptive technologies</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>R&D collaborations to bring ideas to market</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-2">✓</span>
                                    <span>Access to global markets through our network</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <Button type="primary" title="Innovation Programs" />
                            </div>
                        </motion.div>
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
                    className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <div className="text-center md:text-left">
                        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
                            Ready to explore collaboration?
                        </h2>
                        <p className="text-white text-opacity-90">
                            Contact our business development team to discuss opportunities.
                        </p>
                    </div>
                    <Button type="secondary" title="Schedule a Meeting" />
                </motion.div>
            </section>
        </>
    );
}

// Helper Components
const AnimatedContent = ({ children, isVisible }) => {
    return (
        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
        >
            {children}
        </div>
    );
};

const MetricCard = ({ number, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            viewport={{ once: true }}
            className="bg-white hover:bg-blue-100 border-2 border-black hover:border-[#065C9B] p-6 rounded-2xl shadow-lg text-center transition-all duration-300"
        >
            <span className="text-4xl md:text-5xl font-bold text-[#065C9B] block mb-2">{number}</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default Business;