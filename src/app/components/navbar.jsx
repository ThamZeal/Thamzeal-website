'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './button';

const nav_links = ["about", "business", "contact"]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="container flex justify-center p-4 max-w-full sticky top-5 z-50">
            <div className="container drop-shadow-sm flex bg-white justify-between items-center max-w-[1400px] mx-auto py-4 rounded-2xl px-4 sm:px-6 md:px-8 lg:px-12">
                <Link href="/" className="text-xl font-bold text-black flex items-center space-x-2">
                    <img src="logo.svg" width={84} alt="ThamZeal Logo" className="h-10 w-auto" />
                    <span className="text-lg">ThamZeal <br></br> International</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {nav_links.map((item) => (
                        <li key={item}>
                            <Link
                                href={`/${item}`}
                                className="relative text-black hover:text-[#065C9B] transition-all duration-300"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                <motion.div
                                    className="absolute left-0 w-full h-[2px] bg-gray-400 scale-x-0 origin-left"
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Enquire Button */}
                <div className='hidden md:block'>
                    <Button type='primary' title='Enquire now' />
                </div>
                {/* Mobile Menu Button */}
                <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu with Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden text-black fixed top-0 right-0 w-3/4 h-full bg-white z-50 p-6 flex flex-col items-start space-y-6 shadow-lg"
                    >
                        <button className="self-end mb-4" onClick={() => setIsOpen(false)}>
                            <X size={28} />
                        </button>
                        <ul className="flex flex-col space-y-4 w-full">
                            {nav_links.map((item) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href={`/${item}`}
                                        className="block text-lg hover:text-gray-400 transition-all duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Mobile Enquire Button */}
                        <Button type='primary' title='Enquire now' />

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
