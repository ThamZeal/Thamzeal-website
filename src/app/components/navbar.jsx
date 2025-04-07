'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Button from './button';

const nav_links = ["home", "think", "thrive", "transform", "zeal"];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="container absolute flex justify-center p-4 max-w-full top-5 z-50">
            <div className="container drop-shadow-sm flex flex-row-reverse md:flex-row bg-white justify-end md:justify-between items-center max-w-[1400px] mx-auto py-4 rounded-2xl px-4 sm:px-6 md:px-8 lg:px-12">
                <Link href="/" className="text-xl font-bold text-black flex items-center space-x-2">
                    <Image
                        src="/logo.svg"
                        width={84}
                        height={0}
                        alt="ThamZeal Logo"
                        className="h-5 md:h-10 w-auto"
                    />
                    <span className="text-lg hidden md:block">
                        ThamZeal <br /> International
                    </span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {nav_links.map((item) => {
                        const href = item === 'home' ? '/' : `/${item}`;
                        const isActive = pathname === href;

                        return (
                            <li key={item}>
                                <Link
                                    href={href}
                                    className={`relative transition-all duration-300 ${isActive ? 'text-[#065C9B]' : 'text-black hover:text-[#065C9B]'
                                        }`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 bottom-0 w-full h-[2px] bg-[#065C9B]"
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop Enquire Button */}
                <div className='hidden md:block'>
                    <Button type='primary' href='/contact' title='Enquire now' />
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu with Animation from Left */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden text-black fixed top-0 left-0 w-3/4 h-full bg-white z-50 p-6 flex flex-col items-start space-y-6 shadow-lg"
                    >
                        <button className="self-end mb-4" onClick={() => setIsOpen(false)}>
                            <X size={28} />
                        </button>
                        <ul className="flex flex-col space-y-4 w-full">
                            {nav_links.map((item) => {
                                const href = item === 'home' ? '/' : `/${item}`;
                                const isActive = pathname === href;

                                return (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <Link
                                            href={href}
                                            className={`block text-lg transition-all duration-300 ${isActive ? 'text-[#065C9B]' : 'hover:text-gray-400'
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        {/* Mobile Enquire Button */}
                        <Button type='primary' href='/contact' title='Enquire now' />
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
}
