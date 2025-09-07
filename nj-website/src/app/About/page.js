'use client'

import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-800">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-8 text-red-600">
                    About Ninja Junction
                </h1>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <p className="text-lg">
                            Welcome to Ninja Junction, where gaming excellence meets community. 
                            Founded in 2023, we're passionate about creating an immersive gaming 
                            experience for players of all skill levels.
                        </p>
                        <p className="text-lg">
                            Our mission is to provide a platform where gamers can connect, 
                            compete, and grow together. Whether you're a casual player or an 
                            aspiring pro, Ninja Junction is your destination for epic gaming moments.
                        </p>
                    </div>
                    
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                        <Image
                            src="/about-ninja.jpg"
                            alt="Ninja Junction Gaming"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-200 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-red-600">Our Vision</h3>
                        <p>To become the premier destination for competitive gaming and community engagement.</p>
                    </div>
                    
                    <div className="p-6 bg-gray-200 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-red-600">Community</h3>
                        <p>Join thousands of players worldwide in our growing gaming community.</p>
                    </div>
                    
                    <div className="p-6 bg-gray-200 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-red-600">Excellence</h3>
                        <p>Experience top-tier gaming with our state-of-the-art platform and events.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
