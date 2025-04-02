import React from 'react'
import Link from 'next/link'


function page() {
    return (
        <>
            <section className="relative h-screen flex items-center justify-center text-center text-black">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-banner.jpg')" }}>
                    <div className="absolute inset-0 bg-white bg-opacity-50"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-12 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Innovate. Elevate. Transform.
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        ThamZeal International is shaping the future with cutting-edge technology and digital solutions.
                    </p>
                    <a
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
            <section className="text-white bg-black py-16">
                <div className="container relative flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

                    {/* Left Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold pb-5">
                            About <br /> ThamZeal International
                        </h1>
                        <p className="text-gray-300 leading-relaxed">
                            ThamZeal International is an emerging innovation-driven startup officially registered in January 2025 and operational since 2024. Their mission is to develop and sell their own digital products, applications, and utility solutions. Similar to Google, they aim to be a product-first company creating transformative products across multiple industries including technology, e-commerce, utilities, and F&B chains in the future.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="inline-block bg-blue-700 text-white rounded-full px-6 py-3 hover:bg-blue-600 transition">
                                Know More
                            </a>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <img
                            className="rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg"
                            src="https://imageio.forbes.com/specials-images/imageserve/641474e41be43e91f6c324b7/Nothing-empowers-you-more-than-owning-your-own-small-business/960x0.jpg?height=462&width=711&fit=bounds"
                            alt="ThamZeal"
                        />
                    </div>

                </div>
            </section>

            <section className="w-full bg-white py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

                    {/* Section Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10">
                        Brand Divisions
                    </h1>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Cards */}
                        {[
                            { title: "Tech Innovation", desc: "Pioneering digital products and applications for transformative solutions." },
                            { title: "E-commerce Ventures", desc: "Creating seamless online shopping experiences for customers worldwide." },
                            { title: "Utility Solutions", desc: "Providing essential utility solutions for everyday convenience." },
                            { title: "Future Collaborations", desc: "Open to exciting partnerships and collaborations in various industries." },
                            { title: "Tech Innovation", desc: "Pioneering digital products and applications for transformative solutions." },
                            { title: "Tech Innovation", desc: "Pioneering digital products and applications for transformative solutions." },
                        ].map((item, index) => (
                            <div key={index} className="bg-blue-200 p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h2>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-50 py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

                    {/* Section Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10">
                        Explore Our Blog
                    </h1>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Blog Cards */}
                        {[
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
                        ].map((post, index) => (
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

            <footer className="bg-black text-white py-10">
                <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left Section - Logo & About */}
                        <div>
                            <h2 className="text-2xl font-bold">ThamZeal</h2>
                            <p className="mt-3 text-white">
                                Innovation-driven startup, creating transformative products across multiple industries.
                            </p>
                        </div>

                        {/* Middle Section - Navigation Links */}
                        <div className="flex flex-col space-y-3">
                            <h3 className="text-lg font-semibold">Quick Links</h3>
                            <Link href="/" className="text-white hover:text-blue-600">Home</Link>
                            <Link href="/about" className="text-white hover:text-blue-600">About Us</Link>
                            <Link href="/services" className="text-white hover:text-blue-600">Services</Link>
                            <Link href="/blog" className="text-white hover:text-blue-600">Blog</Link>
                            <Link href="/contact" className="text-white hover:text-blue-600">Contact</Link>
                        </div>

                        {/* Right Section - Contact Form */}
                        <div>
                            <h3 className="text-lg font-semibold">Contact Us</h3>
                            <form className="mt-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-2 mb-2 border rounded-md"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-2 mb-2 border rounded-md"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full p-2 border rounded-md"
                                ></textarea>
                                <button className="mt-3 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Section - Social Media & Copyright */}
                    <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-gray-600">
                        <p>© {new Date().getFullYear()} ThamZeal. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <Link href="https://facebook.com" className="hover:text-blue-600">Facebook</Link>
                            <Link href="https://twitter.com" className="hover:text-blue-600">Twitter</Link>
                            <Link href="https://linkedin.com" className="hover:text-blue-600">LinkedIn</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default page