"use client";

import { React, useState, useEffect } from "react";
import Button from "../components/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const images = [
    "/banners/group-diverse-people-having-business-meeting_53876-25060.webp",
    "/banners/transport-logistics-products.webp",
    "/banners/aerial-view-business-team.webp",
    "/banners/man-using-tablet-work-connect-with-others.webp",
];

const blogs = [
    {
        title: "Transformative Products in Technology",
        desc: "Learn about our cutting-edge digital products and solutions that are reshaping the tech industry.",
        date: "September 15, 2025",
        img: "https://imageio.forbes.com/specials-images/imageserve/641474e41be43e91f6c324b7/Nothing-empowers-you-more-than-owning-your-own-small-business/960x0.jpg?height=462&width=711&fit=bounds",
    },
    {
        title: "Evolving Trends in E-Commerce",
        desc: "Discover the latest innovations and strategies revolutionizing the online shopping experience.",
        date: "October 10, 2025",
        img: "https://imageio.forbes.com/specials-images/imageserve/641474e41be43e91f6c324b7/Nothing-empowers-you-more-than-owning-your-own-small-business/960x0.jpg?height=462&width=711&fit=bounds",
    },
    {
        title: "Utility Solutions for Everyday Convenience",
        desc: "How our utility solutions are making life easier and more efficient for consumers worldwide.",
        date: "November 5, 2025",
        img: "https://imageio.forbes.com/specials-images/imageserve/641474e41be43e91f6c324b7/Nothing-empowers-you-more-than-owning-your-own-small-business/960x0.jpg?height=462&width=711&fit=bounds",
    },
];

const reviews = [
    {
        id: 1,
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Their service is outstanding! Helped our business grow exponentially.",
    },
    {
        id: 2,
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        text: "Exceptional support and great results. Highly recommended!",
    },
    {
        id: 3,
        name: "Mark Johnson",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        text: "Absolutely fantastic! The team is professional and skilled.",
    },
];

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

function page() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => setLoading(true);
        const end = () => setLoading(false);

        router.events?.on("routeChangeStart", start);
        router.events?.on("routeChangeComplete", end);
        router.events?.on("routeChangeError", end);

        return () => {
            router.events?.off("routeChangeStart", start);
            router.events?.off("routeChangeComplete", end);
            router.events?.off("routeChangeError", end);
        };
    }, [router]);
    
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const [currentImage, setCurrentImage] = useState(0);
    const [prevImage, setPrevImage] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevImage(currentImage);
            setCurrentImage((prev) => (prev + 1) % images.length);
            setFade(true);
            setTimeout(() => setFade(false), 1000); // match transition duration
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImage, images.length]);


    return (
        <>
            <section className="relative h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden">
                {/* Background Carousel using next/image */}
                <motion.div
                    key={images[prevImage]}
                    className="absolute inset-0"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: fade ? 0 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={images[prevImage]}
                        alt="Previous"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Current Image (fading in) */}
                <motion.div
                    key={images[currentImage] + "-current"}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={images[currentImage]}
                        alt="Current"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

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
                        Innovate. Elevate. Transform.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl mb-6"
                    >
                        ThamZeal International is shaping the future with cutting-edge
                        technology and digital solutions.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-center items-center gap-4"
                    >
                        <Button type="primary" href='/thrive' title="Know more" />
                        <Button type="secondary" href='/contact' title="Let's talk about your business ?" />
                    </motion.div>
                </div>
            </section>
            <section className="text-white bg-black py-16">
                <div className="container relative flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Left Text Section */}
                    <div className="w-full md:w-1/2 text-left">
                        <motion.h1 initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }} className="text-4xl md:text-5xl font-bold pb-5">
                            About ThamZeal International
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }} className="text-gray-300 leading-relaxed">
                            ThamZeal International is an emerging innovation-driven startup
                            officially registered in January 2025 and operational since 2024.
                            Their mission is to develop and sell their own digital products,
                            applications, and utility solutions. Similar to Google, they aim
                            to be a product-first company creating transformative products
                            across multiple industries including technology, e-commerce,
                            utilities, and F&B chains in the future.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }} className="mt-8">
                            <Button type="primary" href='/think' title="Know more" />
                        </motion.div>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <img
                            className="rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg"
                            src="/images/about.jpg"
                            alt="ThamZeal"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Section Heading */}
                    <div className="text-gray-900 text-left mb-10">
                        <motion.h1 initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }} className="text-4xl md:text-5xl font-bold ">Brand Divisions</motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}>
                            Explore our diverse brand divisions and exciting collaboration
                            opportunities.
                        </motion.p>
                    </div>

                    {/* Responsive Grid */}
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
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            href="/thrive"
                            className="bg-[#065C9B] hover:scale-105 text-2xl p-8 rounded-2xl shadow-lg text-white text-center flex justify-center items-center hover:bg-[#1E85C2] transition-all duration-300"
                        >
                            {" "}
                            know more
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="w-full bg-gradient-to-r from-[#4047A7] to-[#4EAADA] py-16 h-auto">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }} className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-center items-start md:items-center gap-4">
                    <h1 className="text-white text-2xl">
                        Looking to grow your business with our expert support?
                    </h1>
                    <Button type="secondary" href='/contact' title="Let's talk business !!"></Button>
                </motion.div>
            </section>

            

            {/* testimonials */}

            {/* <section className="w-full bg-black py-16"> */}
                {/* <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-center items-start md:items-center gap-8"> */}
                    {/* Heading */}
                    {/* <motion.h1 initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }} className="text-white text-4xl md:text-5xl font-bold">
                        See what our customers have to say.
                    </motion.h1> */}

                    {/* Review Card */}
                    {/* <div className="relative w-full max-w-lg">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={reviews[index].id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4"
                            >
                                <img
                                    src={reviews[index].image}
                                    alt={reviews[index].name}
                                    className="w-14 h-14 rounded-full"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">
                                        {reviews[index].name}
                                    </h3>
                                    <p className="text-gray-700">{reviews[index].text}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section> */}

            {/* partnerships */}

            <section className="w-full bg-gray-50 py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Section Heading */}
                    <div className="text-gray-900 text-left mb-10">
                        <motion.h1 initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-3">
                            Partnering with
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}>
                            Explore our diverse brand divisions and exciting collaboration
                            opportunities.
                        </motion.p>
                    </div>

                    {/* Partner Logo */}
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }} className="mt-12 flex justify-center">
                        <img
                            src="/images/xyberai.jpeg"
                            alt="XyberAI Logo"
                            className="h-50 w-auto border border-black rounded-2xl"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default page;
