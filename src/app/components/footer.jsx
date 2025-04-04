import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
      <footer className="bg-black text-white py-10">
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Left Section - Logo & About */}
                  <div>
                      <Link href="/" className="text-xl font-bold text-white flex items-center space-x-2">
                          <img src="logo.svg" width={84} alt="ThamZeal Logo" className="h-10 w-auto" />
                          <span className="text-lg">ThamZeal <br></br> International</span>
                      </Link>
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
  )
}

export default Footer