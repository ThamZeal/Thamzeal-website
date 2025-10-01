'use client';

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../components/button";
import Image from "next/image";
import { ChevronDown, ChevronUp } from 'lucide-react';
import SuccessMetricsSection from "../components/SuccessMetricsSection";
import { getProjects, Project } from "../../sanity/lib/data";

// Category mapping for display labels
const categoryLabels = {
    ongoing: "Ongoing Projects",
    incubation: "Coming Soon / Incubation",
    future: "Future Concepts"
};



function TransformStream() {
    const [expandedDivision, setExpandedDivision] = useState(null);
    const [openProject, setOpenProject] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [innovationSections, setInnovationSections] = useState([]);

    // Fetch projects from CMS
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const fetchedProjects = await getProjects();
                setProjects(fetchedProjects);

                // Group projects by category
                const grouped = Object.entries(categoryLabels).map(([key, label]) => ({
                    label,
                    projects: fetchedProjects
                        .filter(project => project.category === key)
                        .sort((a, b) => a.order - b.order)
                })).filter(section => section.projects.length > 0);

                setInnovationSections(grouped);
            } catch (error) {
                console.error('Error fetching projects:', error);
                // Fallback to empty sections
                setInnovationSections([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const toggle = (sectionIndex, projectIndex) => {
        const key = `${sectionIndex}-${projectIndex}`;
        setOpenProject(openProject === key ? null : key);
    };
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
                        <Button type="primary" href='#project' title="Explore Projects" />
                        <Button type="Secondary" href='#collab' title="Partner With Us" />
                    </motion.div>
                </div>
            </section>

            {/* Innovation Universe */}
            <section className="w-full bg-black text-white py-16" id='project'>
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

                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4EAADA]"></div>
                        </div>
                    ) : innovationSections.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-400">No projects available at the moment.</p>
                            <p className="text-gray-500 text-sm mt-2">Check back soon for exciting updates!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {innovationSections.flatMap((section, sectionIndex) =>
                                section.projects.map((project, projectIndex) => {
                                    const isOpen = openProject === `${sectionIndex}-${projectIndex}`;
                                    const status = section.label;
                                    const statusColor =
                                        status === "Ongoing Projects"
                                            ? "bg-green-900 text-green-300"
                                            : status.includes("Incubation")
                                                ? "bg-yellow-900 text-yellow-300"
                                                : "bg-purple-900 text-purple-300";

                                    return (
                                        <motion.div
                                            key={project.codename}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * projectIndex }}
                                            viewport={{ once: true }}
                                            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-[#4EAADA] transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-[#4EAADA]">{project.codename}</h3>
                                                    <span className={`mt-1 inline-block px-3 py-1 text-xs font-medium rounded-full ${statusColor}`}>
                                                        {status}
                                                    </span>
                                                </div>
                                                <button onClick={() => toggle(sectionIndex, projectIndex)} className="text-[#4EAADA]">
                                                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                                </button>
                                            </div>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        className="mt-2 border-t border-gray-800 pt-4 text-sm text-gray-300"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <p className="text-gray-400 mb-2">{project.teaser}</p>
                                                        <p className="text-gray-400">{project.guessIt}</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })
                            )}
                        </div>
                    )}
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
            <SuccessMetricsSection />

            {/* Collaboration Opportunities */}
            <section className="w-full bg-black text-white py-16" id='collab'>
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
                            {/* <div className="mt-6">
                                <Button type="primary" title="Business Partnerships" />
                            </div> */}
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
                            {/* <div className="mt-6">
                                <Button type="primary" title="Innovation Programs" />
                            </div> */}
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
                    <Button type="secondary" href='/contact' title="Schedule a Meeting" />
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



export default TransformStream;