'use client';

import { useState } from "react";
import Button from "../components/button";
import { motion } from "framer-motion";

// Contact information
const contactInfo = [
    {
        title: "Email",
        details: "info@thamzeal.com",
        icon: "📧"
    },
    {
        title: "Phone",
        details: "+91 9876543210",
        icon: "📞"
    },
    {
        title: "Address",
        details: "ThamZeal Towers, Tech Park, Bangalore, India - 560001",
        icon: "📍"
    }
];

// FAQ items
const faqItems = [
    {
        question: "What services does ThamZeal International offer?",
        answer: "ThamZeal International offers a wide range of digital solutions including custom software development, e-commerce platforms, AI-driven applications, and business collaboration opportunities across multiple industries."
    },
    {
        question: "How can I partner with ThamZeal International?",
        answer: "You can initiate a partnership by filling out our contact form or reaching out directly via email. Our team will evaluate collaboration opportunities and get back to you within 48 hours."
    },
    {
        question: "Do you provide support for your products?",
        answer: "Yes, we offer comprehensive support for all our products and services. Our dedicated support team is available during business hours to address any issues or questions."
    },
    {
        question: "What makes ThamZeal different from other tech companies?",
        answer: "ThamZeal distinguishes itself through our innovation-first approach, diverse brand divisions, and commitment to transformative solutions across multiple industries. We focus on creating products that genuinely improve user experiences and business outcomes."
    }
];

function ContactUs() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
        subject: "General Inquiry"
    });
    const [formStatus, setFormStatus] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setFormStatus("submitting");

        // Mock API call
        setTimeout(() => {
            setFormStatus("success");
            setFormData({
                name: "",
                email: "",
                company: "",
                message: "",
                subject: "General Inquiry"
            });
        }, 1500);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center text-white">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/banners/into-success-group-young-freelancers-office-have-conversation-smiling.webp')` }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-12 max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl mb-6"
                    >
                        Have questions or want to collaborate? We're here to help you navigate the future of technology.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row justify-center items-center gap-4"
                    >

                        <Button type="primary" href="#contact-form" title="Contact Now" />

                        <Button type="Secondary" href="#faqs" title="View FAQs" />

                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="w-full bg-white py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Left Side - Contact Information */}
                        <div className="w-full md:w-1/3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Information</h1>
                                <p className="text-gray-600 mb-8">Reach out to us directly or fill out the form to get in touch with our team.</p>
                            </motion.div>

                            <div className="space-y-8">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="text-3xl">{item.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                            <p className="text-gray-600">{item.details}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                                className="mt-12"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-[#065C9B] hover:text-[#4EAADA] transition-colors text-2xl">
                                        <span className="sr-only">LinkedIn</span>
                                        <span>🔗</span>
                                    </a>
                                    <a href="#" className="text-[#065C9B] hover:text-[#4EAADA] transition-colors text-2xl">
                                        <span className="sr-only">Twitter</span>
                                        <span>📱</span>
                                    </a>
                                    <a href="#" className="text-[#065C9B] hover:text-[#4EAADA] transition-colors text-2xl">
                                        <span className="sr-only">Instagram</span>
                                        <span>📷</span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="w-full md:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-white border-2 border-black hover:border-[#065C9B] p-8 rounded-2xl shadow-lg"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                                {formStatus === "success" ? (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                                        <strong className="font-bold">Thank you!</strong>
                                        <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you soon.</span>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065C9B] focus:border-[#065C9B] transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065C9B] focus:border-[#065C9B] transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065C9B] focus:border-[#065C9B] transition-all"
                                                    placeholder="Company Name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065C9B] focus:border-[#065C9B] transition-all"
                                                >
                                                    <option value="General Inquiry">General Inquiry</option>
                                                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                                                    <option value="Career Inquiry">Career Inquiry</option>
                                                    <option value="Support Request">Support Request</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows="5"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065C9B] focus:border-[#065C9B] transition-all"
                                                placeholder="How can we help you?"
                                            ></textarea>
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={formStatus === "submitting"}
                                                className="px-6 py-3 bg-[#065C9B] hover:bg-[#4EAADA] text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                                            >
                                                {formStatus === "submitting" ? "Sending..." : "Send Message"}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full bg-gray-50 py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-left mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visit Our Office</h1>
                        <p className="text-gray-600">Find us at our headquarters in the heart of Bangalore's tech district.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white border-2 border-black hover:border-[#065C9B] p-4 rounded-2xl shadow-lg overflow-hidden"
                    >
                        {/* This would be replaced with an actual map implementation */}
                        <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                            <p className="text-gray-600 text-lg">Map placeholder - Google Maps would be integrated here</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="w-full bg-white py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-left mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
                        <p className="text-gray-600">Find answers to common questions about our services and company.</p>
                    </motion.div>

                    <div className="space-y-6">
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                viewport={{ once: true }}
                                className="bg-white border-2 border-black hover:border-[#065C9B] rounded-2xl shadow-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                >
                                    <span className="text-xl font-semibold text-gray-900">{item.question}</span>
                                    <span className="text-2xl">{activeIndex === index ? '−' : '+'}</span>
                                </button>
                                {activeIndex === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600">{item.answer}</p>
                                    </div>
                                )}
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
                        Ready to transform your business with innovative technology?
                    </h2>
                        <Button type="secondary" href="#contact-form"  title="Get Started Today" />
                </motion.div>
            </section>
        </>
    );
}

export default ContactUs;