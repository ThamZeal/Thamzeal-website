'use client'

import { React, useState, useEffect } from 'react'
import Button from '../components/button';
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/banners/transport-logistics-products.jpg",
    "/banners/aerial-view-business-team.jpg",
    "/banners/man-using-tablet-work-connect-with-others.jpg",
    "/banners/group-diverse-people-having-business-meeting_53876-25060.jpg"
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
]

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
    { title: "Tech IT Solutions (Collaboration with Xyberai LLC)", desc: "Pioneering digital products and applications for transformative solutions." },
    { title: "E-commerce & Retail", desc: "Creating seamless online shopping experiences for customers worldwide." },
    { title: "Import & Export", desc: "Providing essential utility solutions for everyday convenience." },
    { title: "F&B Chain", desc: "Open to exciting partnerships and collaborations in various industries." },
    { title: "AI-Driven Innovations", desc: "Pioneering digital products and applications for transformative solutions." },
]



function page() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section className="relative h-screen -mt-28 flex items-center justify-center text-center text-white">
                {/* Background Carousel */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-12 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Innovate. Elevate. Transform.
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        ThamZeal International is shaping the future with cutting-edge technology and digital solutions.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <Button type='primary' title='Know more' />
                        <Button type='Secondary' title="Let's talk about your business ?" />
                    </div>
                    
                </div>
            </section>
            <section className="text-white bg-black py-16">
                <div className="container relative flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

                    {/* Left Text Section */}
                    <div className="w-full md:w-1/2 text-left">
                        <h1 className="text-4xl md:text-5xl font-bold pb-5">
                            About ThamZeal International
                        </h1>
                        <p className="text-gray-300 leading-relaxed">
                            ThamZeal International is an emerging innovation-driven startup officially registered in January 2025 and operational since 2024. Their mission is to develop and sell their own digital products, applications, and utility solutions. Similar to Google, they aim to be a product-first company creating transformative products across multiple industries including technology, e-commerce, utilities, and F&B chains in the future.
                        </p>
                        <div className="mt-8">
                            <Button type='primary' title='Know more' />
                        </div>
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
                        <h1 className="text-4xl md:text-5xl font-bold ">
                            Brand Divisions
                        </h1>
                        <p>Explore our diverse brand divisions and exciting collaboration opportunities.</p>
                    </div>
                    

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

                        {/* Cards */}
                        {brand_divisions.map((item, index) => (
                            <div key={index} className="bg-white hover:scale-105 hover:bg-blue-200 transition-all duration-300 border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h2>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                        <a href="" className="bg-[#065C9B] hover:scale-105 text-2xl p-8 rounded-2xl shadow-lg text-white text-center flex justify-center items-center hover:bg-[#1E85C2] transition-all duration-300"> know more</a>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="w-full bg-gradient-to-r from-[#4047A7] to-[#4EAADA] py-16 h-auto">
                <div className='max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-center items-start md:items-center gap-4'>
                    <h1 className="text-white text-2xl">Looking to grow your business with our expert support?</h1>
                    <Button type='secondary' title="Let's talk business !!"></Button>
                </div>
                
            </section>

            <section className="w-full bg-gray-50 py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

                    {/* Section Heading */}
                    <div className="text-gray-900 text-left mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">
                            Explore Our Blog
                        </h1>
                        <p>Explore our diverse brand divisions and exciting collaboration opportunities.</p>
                    </div>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Blog Cards */}
                        {blogs.map((post, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <img className="w-full h-56 object-cover" src={post.img} alt={post.title} />
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
                                    <p className="text-gray-600 mt-2">{post.desc}</p>
                                    <p className="text-slate-400 text-lg italic mt-3">{post.date}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* testimonials */}

            <section className="w-full bg-black py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-center items-start md:items-center gap-8">
                    {/* Heading */}
                    <h1 className="text-white text-4xl md:text-5xl font-bold">
                        See what our customers have to say.
                    </h1>

                    {/* Review Card */}
                    <div className="relative w-full max-w-lg">
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
                                    <h3 className="font-semibold text-lg">{reviews[index].name}</h3>
                                    <p className="text-gray-700">{reviews[index].text}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* partnerships */}

            <section className="w-full bg-gray-50 py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

                    {/* Section Heading */}
                    <div className="text-gray-900 text-left mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">
                            Partnering with
                        </h1>
                        <p>Explore our diverse brand divisions and exciting collaboration opportunities.</p>
                    </div>

                    {/* Partner Logo */}
                    <div className="mt-12 flex justify-center">
                        
                            <img
                                src="/images/xyberai.jpeg"
                                alt="XyberAI Logo"
                                className="h-50 w-auto border border-black rounded-2xl"
                            />
                        
                    </div>
                </div>
            </section>



                
            
        </>
    )
}

export default page