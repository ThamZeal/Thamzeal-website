'use client';

import { useState } from "react";
import Button from "../components/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


const brand_divisions = [
    {
        title: "Tech IT Solutions (Collaboration with Xyberai)",
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

const innovation_projects = [
    {
        name: "Project EmberNest",
        status: "Ongoing",
        description: "Experience-centered event tech that goes beyond logistics into emotional precision."
    },
    {
        name: "Project InnerOrbit",
        status: "Ongoing",
        description: "Private ecosystems for synced communities and self-evolving digital habitats."
    },
    {
        name: "Project Qibra",
        status: "Incubation",
        description: "Direction meets design through purposeful spaces. Not physical. Not virtual. Something hybrid."
    },
    {
        name: "Project NexusStream",
        status: "Incubation",
        description: "Quietly merging platforms, influence, and discovery into a new form of relevance."
    },
    {
        name: "Project W1",
        status: "Experimental",
        description: "An identity-less communication platform born from pure, unfiltered expression."
    },
    {
        name: "Project DeltaPulse",
        status: "Experimental",
        description: "Tech interfaces redesigned to feel emotional, cross-boundary, and fluid."
    }
];

function TransformStream() {
    const [expandedDivision, setExpandedDivision] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);


    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center text-white">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={"/banners/man-using-tablet-work-connect-with-others.webp"}
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
                        How we create change
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
                        <Button type="primary" title="Explore Projects" />
                        <Button type="Secondary" title="Partner With Us" />
                    </motion.div>
                </div>
            </section>

            {/* Innovation Universe */}
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
                            Innovation Universe
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Codename Projects (Layer 1 Disclosure)
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-gray-400 mt-2"
                        >
                            These projects represent only glimpses—each with hidden layers, active prototypes, and product-first ambitions.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {innovation_projects.map((project, index) => (
                            <motion.div
                                onClick={() => setSelectedProject(project)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                viewport={{ once: true }}
                                key={index}
                                className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-[#4EAADA] transition-all duration-300"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-xl font-bold text-[#4EAADA]">{project.name}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Ongoing' ? 'bg-green-900 text-green-300' :
                                        project.status === 'Incubation' ? 'bg-yellow-900 text-yellow-300' :
                                            'bg-purple-900 text-purple-300'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                                <p className="text-gray-400">{project.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <AnimatePresence>
                        {selectedProject && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                            >
                                <motion.div
                                    initial={{ scale: 0.9, y: 50 }}
                                    animate={{ scale: 1, y: 0 }}
                                    exit={{ scale: 0.9, y: 50 }}
                                    className="bg-gray-900 rounded-2xl max-w-lg w-full p-6 relative border border-gray-700"
                                >
                                    <button
                                        className="absolute top-3 right-3 text-white text-2xl"
                                        onClick={() => setSelectedProject(null)}
                                    >
                                        &times;
                                    </button>

                                    <img
                                        src={selectedProject.image || "/placeholder.jpg"}
                                        alt={selectedProject.name}
                                        className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-800"
                                    />

                                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="text-2xl font-bold text-[#4EAADA]">
                                            {selectedProject.name}
                                        </h2>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${selectedProject.status === 'Ongoing'
                                            ? 'bg-green-900 text-green-300'
                                            : selectedProject.status === 'Incubation'
                                                ? 'bg-yellow-900 text-yellow-300'
                                                : 'bg-purple-900 text-purple-300'
                                            }`}>
                                            {selectedProject.status}
                                        </span>
                                    </div>

                                    <p className="text-gray-400">{selectedProject.details || selectedProject.description}</p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-gray-500 mt-8 text-center italic"
                    >
                        &gt; We don't reveal full details. Codenames are living ideas.
                    </motion.p>
                </div>
            </section>

            {/* R&D Section */}
            <section className="w-full bg-gradient-to-r from-[#111] to-[#222] py-16 text-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/2"
                        >
                            <h2 className="text-4xl font-bold mb-6">R&D – Future Before Feedback</h2>
                            <p className="text-gray-300 mb-6">
                                Our R&D isn't an afterthought—it's the engine room.
                            </p>
                            <p className="text-gray-300 mb-4">We focus on:</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-3 text-xl">•</span>
                                    <span className="text-lg">Predictive Infrastructure</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-3 text-xl">•</span>
                                    <span className="text-lg">Autonomous Tools</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-3 text-xl">•</span>
                                    <span className="text-lg">Deep Learning + Minimal Interfaces</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#4EAADA] mr-3 text-xl">•</span>
                                    <span className="text-lg">Ethical AI and Mind-Tech Intersections</span>
                                </li>
                            </ul>
                            <p className="text-gray-300">
                                These innovations fuel our internal ventures or power white-label products for the world.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/2 flex justify-center"
                        >
                            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden">
                                <img
                                    src="/images/res-and-dev.webp"
                                    alt="R&D Division"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <Button type="primary" title="Explore R&D" />
                                </div>
                            </div>
                        </motion.div>
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

export default TransformStream;