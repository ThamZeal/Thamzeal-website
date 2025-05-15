import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="w-full max-w-[1400px] mx-auto px-8 sm:px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section - Logo & About */}
                    <div>
                        <Link href="/" className="text-xl font-bold text-white flex items-center space-x-2">
                            <img src="logo.svg" width={84} alt="ThamZeal Logo" className="h-10 w-auto" />
                            <span className="text-lg hidden">ThamZeal <br /> International</span>
                        </Link>
                        <p className="mt-3 text-white text-3xl">The Way Around</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <Link href="/" className="hover:text-blue-600">Home</Link>
                                <Link href="/think" className="hover:text-blue-600">Think</Link>
                                <Link href="/thrive" className="hover:text-blue-600">Thrive</Link>
                                <Link href="/transform" className="hover:text-blue-600">Transform</Link>
                                <Link href="/zeal" className="hover:text-blue-600">Zeal</Link>
                                <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                            </div>
                        </div>

                        {/* Right Section - Social Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
                            <div className="flex flex-col space-y-2">
                                <Link href="https://www.instagram.com/thamzeal.international/" className="hover:text-blue-600">Instagram</Link>
                                <Link href="https://www.linkedin.com/company/thamzeal-international-llp" className="hover:text-blue-600">LinkedIn</Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section - Copyright */}
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center text-gray-600 text-sm">
                    <p className="text-center sm:text-right w-full sm:w-auto">
                        © {new Date().getFullYear()} ThamZeal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
