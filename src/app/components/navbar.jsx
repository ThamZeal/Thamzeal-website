'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" bg-white text-black p-4 shadow-md sticky top-0 z-50">
            <div className="container flex justify-between items-center w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Link href="/" className="text-xl font-bold text-black flex">
                    <img src="logo.svg" width={84} alt="" /> <p>ThamZeal International</p>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
                    <li><Link href="/services" className="hover:text-gray-400">Services</Link></li>
                    <li><Link href="/blog" className="hover:text-gray-400">Blog</Link></li>
                    <li><Link href="/careers" className="hover:text-gray-400">Careers</Link></li>
                    <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
                </ul>

                <a href="" className='sm:hidden md:block bg-blue-700 text-white rounded-full px-5 py-2'>Enquire Now</a>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white text-black absolute w-full left-0 top-16 shadow-lg p-4">
                    <ul className="flex flex-col space-y-4">
                        <li><Link href="/about" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link href="/services" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</Link></li>
                        <li><Link href="/blog" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Blog</Link></li>
                        <li><Link href="/careers" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Careers</Link></li>
                        <li><Link href="/contact" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
