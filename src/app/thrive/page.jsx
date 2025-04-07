'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/button";
import Image from "next/image";



const services = [ 
    {
        title: "Retail & Trade Services",
        tagline: "Elevating Experiences. Simplifying Commerce.",
        offerings: [
            "Omnichannel Retail Strategy & Execution",
            "Global Sourcing & Import-Export Management",
            "Smart Logistics & Supply Chain Intelligence",
            "Retail Analytics & Consumer Journey Design"
        ],
        description: "From street-level stores to seamless e-commerce integrations, we redefine what shopping feels like—with real-time infrastructure and ethical sourcing at the core."
    },
    {
        title: "Food Chain & Culinary Services",
        tagline: "Building What the World Craves.",
        offerings: [
            "Brand Development for Food Ventures",
            "Smart Kitchen & Cloud Kitchen Implementation",
            "Tech-Enabled Order Management Systems",
            "Sustainable Sourcing & Culinary Innovation"
        ],
        description: "We help build next-generation food ventures—where taste meets tech, and every meal tells a story."
    },
    {
        title: "Technology & Innovation Services",
        tagline: "Solving Real Problems with Scalable Technology.",
        offerings: [
            "Custom Product Development (AI, Cloud, Automation)",
            "Innovation Labs for Corporates & Creators",
            "MVP Design, Testing, and Launch Programs",
            "Human-Centered Tech Prototyping"
        ],
        description: "Our tech services operate like a lab—where breakthrough meets business and prototypes meet the real world."
    },
    {
        title: "Enterprise Solutions & Platforms",
        tagline: "Tools for the Next Billion Enterprises.",
        offerings: [
            "Software-as-a-Service (SaaS) Platforms",
            "Business Process Automation (BPA)",
            "Digital Consulting & Transformation",
            "Internal Tools for Ops, HR, and Growth"
        ],
        description: "We equip modern businesses with the tools to grow fast, scale smart, and operate globally."
    },
    {
        title: "Careers Lab & Placement Services",
        tagline: "Talent is the Real Engine. We Build It.",
        offerings: [
            "Internships with Live Projects",
            "Leadership & Startup Incubation Programs",
            "Placement Partnerships for Talent Deployment",
            "Creator & Founder Acceleration Tracks"
        ],
        description: "Through InGen, our placement arm, we bridge sharp minds with global ventures—internal and external."
    },
    {
        title: "Innovation as a Service (IaaS)",
        tagline: "Plug into Our Brain. Access Our Ecosystem.",
        offerings: [
            "Codename Project Collaboration",
            "Access to ARIELAB R&D Resources",
            "Idea-to-Execution Consulting",
            "Innovation Audits for Corporates"
        ],
        description: "When enterprises need fresh thinking, we become their extended innovation arm—quietly building what’s next."
    },
    {
        title: "Global Advisory & Venture Services",
        tagline: "We Don’t Just Consult. We Co-Create.",
        offerings: [
            "Startup Advisory & Angel Network",
            "Market Entry Strategy & Localization",
            "Venture Studio Partnerships",
            "Brand Architecture & Story Crafting"
        ],
        description: "We back ideas, guide operators, and shape ventures—from sketchpad to scale."
    }
]

function Business() {
    const [selectedVertical, setSelectedVertical] = useState(null);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen  flex items-center justify-center text-center text-white">
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
                        How we help you grow
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
                            Core Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Explore our strategic divisions engineered for maximum impact.
                        </motion.p>
                    </div>

                    {/* Verticals Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {services.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                viewport={{ once: true }}
                                key={index}
                                className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                                onMouseEnter={() => setSelectedVertical(index)}
                                onMouseLeave={() => setSelectedVertical(null)}
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                    {item.title}
                                </h2>
                                <ul>
                                    {item.offerings.map((offering, index) => (
                                        <li key={index} className="flex items-start mb-2">
                                            <span className="text-[#4EAADA] mr-2">✓</span>
                                            <span className="text-gray-700">{offering}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-gray-700">{item.description}</p>
                            </motion.div>
                        ))}
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