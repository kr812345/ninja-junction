'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className=" h-screen flex items-center pb-12 md:pt-32 md:pb-20">
            <div className="max-w-[85%] mx-auto sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="flex flex-col space-y-1 sm:text-center md:max-w-2xl lg:col-span-6 lg:text-left">
                        <h1 className="text-6xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block text-7xl">Collaborate.</span>
                            <span className=" text-7xl">Contribute. Create.</span>
                            <span className="block gradient-text text-7xl">Innovate Together.</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            The ultimate platform for students to find collaborators, share ideas, and work on projects
                            together. Connect with like-minded peers across disciplines.
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                                <Link href="/Signup"
                                    className="gradient-bg font-semibold text-white bg-(--primary) px-9 py-3 rounded-md text-base hover:bg-opacity-90 transition w-full sm:w-auto text-center">
                                    Get Started
                                </Link>
                                <Link href="/Projects"
                                    className=" text-(--primary) px-6 py-3 rounded-md text-base font-medium border border-(--primary) hover:bg-gray-50 transition  sm:w-auto text-center">
                                    Explore Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 relative lg:mt-0 lg:col-span-6 flex justify-center">
                        <div className="relative mx-auto bg-(--primary) w-[80%] rounded-lg shadow-lg overflow-hidden">
                            <div className="gradient-bg h-full w-full p-2">
                                <div className="bg-white rounded-t-lg p-4">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                <Image
                                    src="./hero.svg"
                                    alt="Diverse group of students collaborating on a project in a modern university workspace"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-b-lg"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded- w-32 h-32 z-0"></div>
                            <div className="absolute -top-8 -right-8 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded- w-32 h-32 z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
