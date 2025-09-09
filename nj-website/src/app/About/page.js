'use client'

import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-800">
            <div className="container mx-auto px-4 py-16 pt-32">
                <h1 className="text-4xl font-bold text-center mb-8 text-primary">
                    About Us
                </h1>
                
                <div className="grid md:grid-cols-2 gap-8 items-center font-sans">
                    <div className="space-y-6">
                        <p className="text-lg">
                            Welcome to Ninja Junction - your ultimate collaboration platform for students! 
                            Launched in 2025, we're dedicated to connecting students across different 
                            disciplines, making it easier than ever to find project partners and share ideas.
                        </p>
                        <p className="text-lg">
                            Think of us as your digital meeting point where innovation meets collaboration. 
                            Whether you're looking for team members for your next project or wanting to 
                            share your expertise, Ninja Junction is your go-to platform for meaningful 
                            academic connections.
                        </p>
                    </div>
                    
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                        <Image
                            src="./logo.svg"
                            alt="Ninja Junction Collaboration"
                            fill
                            className="object-fit rounded-md"
                        />
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="p-6 border border-primary rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-primary">Connect</h3>
                        <p>Find and connect with like-minded students across different disciplines.</p>
                    </div>
                    
                    <div className="p-6 border border-primary rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-primary">Collaborate</h3>
                        <p>Work together on exciting projects and share innovative ideas.</p>
                    </div>
                    
                    <div className="p-6 border border-primary rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-primary">Create</h3>
                        <p>Turn your ideas into reality with the perfect team!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
