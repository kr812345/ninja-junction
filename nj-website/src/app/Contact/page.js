import { motion } from 'framer-motion'
import React from 'react'

const Contact = () => {
    return (
        <div className="container mx-auto pt-40 py-8 relative not-sm:pt-32 not-sm:px-4 overflow-clip">
            {/* Decorative circles */}
            <div className="absolute top-20 right-20 left-1/2 w-[400px] h-[400px] bg-primary/40 rounded-full -z-10 blur-xl"></div>

            <h1 className="text-3xl font-bold mb-6 relative">
                Contact Us
                <div className="absolute w-20 h-1 bg-primary bottom-0 left-0 mt-2"></div>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 not-sm:flex not-sm:flex-col-reverse">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
                    <h2 className="text-xl font-semibold mb-4 text-primary">Get in Touch</h2>
                    <div className="space-y-4">
                        <p>
                            <strong>Address:</strong><br />
                            123 Ninja Street<br />
                            City, State 12345
                        </p>
                        <p>
                            <strong>Email:</strong><br />
                            info@ninjajunction.com
                        </p>
                        <p>
                            <strong>Phone:</strong><br />
                            (555) 123-4567
                        </p>
                        <p>
                            <strong>Hours:</strong><br />
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 4:00 PM<br />
                            Sunday: Closed
                        </p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
                    <h2 className="text-xl font-semibold mb-4 text-primary">Send us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-2 border rounded h-32"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
