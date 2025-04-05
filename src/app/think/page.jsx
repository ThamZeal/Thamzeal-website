"use client";

import { useState, useEffect } from "react";
import Button from "../components/button";
import { motion, AnimatePresence } from "framer-motion";



const what_we_do = [
    {
        title:"Retail & Commerce",
        description: "Reimagining customer journeys across eCommerce, brick-and-mortar, and global trade pipelines."
    },
    {
        title:"Food Chain Ventures",
        description: "Innovating how people experience food—from delivery ecosystems to hybrid kitchens."
    },
    {
        title:"Service Engines",
        description:"Powering businesses with next-gen B2B tools, platforms, and systems."
    },
    {
        title:"Technology Labs",
        description:"Creating AI, automation, and ambient tech solutions in a Google-style studio model."
    },
    {
        title:"Careers Division",
        description:"Fueling industries with talent pipelines, founder incubation, and career accelerators."
    },
    {
        title:"R&D Division",
        description:"Operating in stealth to test and build future tech in AI, robotics, behavioral mapping, and beyond."
    }
]

const coreValues = [
    {
        title: "Problem-First Thinking",
        description:
            "We start with real challenges—not market noise",
    },
    {
        title: "Silent Excellence",
        description:
            "We scale quietly, letting impact speak louder than promotion. ",
    },
    {
        title: "Human-Led Design",
        description:
            "Everything we build is made to serve people—not just systems.",
    },
    {
        title: "Radical Integrity",
        description:
            "We operate with ethical intent, sustainable methods, and long-term vision.",
    },
    {
        title: "Collective Growth",
        description:
            "Our team, partners, and users grow with us—not behind us.",
    },
];

function About() {
    
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
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold pb-5"
                        >
                            Our Story : About ThamZeal International
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-gray-300 leading-relaxed"
                        >
                            In a world moving faster than ever—where solutions exist but the
                            journey to find them feels broken—Thamzeal was born.<br></br><br></br> Our founder
                            faced a problem. Not just the lack of answers, but the space
                            between the problem and its solution—the delay, the disconnection,
                            the noise. This gap wasn’t unique to one sector. It showed up in
                            retail. In food. In services. In tech. In talent.<br></br><br></br> That’s when we
                            realized: the future doesn't wait. It needs builders who don’t
                            just react, but anticipate. So we created Thamzeal—not as a
                            traditional company, but as a mission-driven engine to identify
                            the gaps before they show, and build what the world doesn’t know
                            it needs yet.<br></br><br></br> From challenges came conviction. And from
                            conviction, a group—a growing movement of thinkers, creators, and
                            doers—committed to shaping the next wave of products, platforms,
                            and possibilities. We’re not here to follow trends.<br></br><br></br> We’re here to
                            craft what comes after them. And we want to grow with everyone who
                            believes the future should be intentional, not accidental.
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
                            At ThamZeal International, we believe in building a smarter,
                            sustainable future through innovation, collaboration, and
                            purpose-driven action.
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
                            <h2 className="text-2xl font-semibold text-[#065C9B] mb-3">
                                🌟 Mission
                            </h2>
                            <p className="text-gray-700">
                                To build meaningful companies, experiences, and tools that don’t just function—they shift industries, elevate people, and reimagine the everyday.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold text-[#065C9B] mb-3">
                                🚀 Vision
                            </h2>
                            <p className="text-gray-700">
                                To quietly shape the future—by designing solutions that bridge the gap between today’s challenges and tomorrow’s possibilities. We strive to create value that is not just seen but felt—deeply, seamlessly, and sustainably.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold text-[#065C9B] mb-3">
                                📈 Vision 2030
                            </h2>
                            <p className="text-gray-700">
                                By 2030, ThamZeal International aims to establish a powerful
                                global presence with multiple brand divisions, AI-integrated
                                solutions, and a strong impact across industries including
                                marketing, design, software, and sustainability.
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
                                transition={{ delay: 0.2 + i * 0.1 }}
                                viewport={{ once: true }}
                                key={i}
                                className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {val.title}
                                </h3>
                                <p className="text-gray-700 mt-2">{val.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            

            {/* Who we are */}
            <section className="text-white bg-black py-16 pt-38">
                <div className="container relative flex flex-col md:flex-row items-center justify-center w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* left Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg"
                            src="/banners/group-diverse-people-having-business-meeting_53876-25060.webp"
                            alt="ThamZeal"
                        />
                    </div>

                    {/* right Text Section */}
                    <div className="w-full md:w-1/2 text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold pb-5"
                        >
                            Who We Are
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-gray-300 leading-relaxed"
                        >
                            We’re a venture ecosystem and holding group reshaping the core of multiple industries through bold experimentation and high-functioning products. Each of our verticals is engineered to solve a deep need—often before it becomes obvious.
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
                </div>
            </section>
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
                            What We Do
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            We serve visionaries, disruptors, and everyday users—anyone ready to experience what’s next, before it becomes the norm. 
                        </motion.p>
                    </div>
                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {what_we_do.map((val, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                viewport={{ once: true }}
                                key={i}
                                className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {val.title}
                                </h3>
                                <p className="text-gray-700 mt-2">{val.description}</p>
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
