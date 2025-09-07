'use client';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';

const events = [
    {
        id: 1,
        title: 'Hackathon 2025',
        description: 'Coming Soon...',
        image: '/images/hackathon.jpg',
        status: 'Unavailable'
    },
    {
        id: 2,
        title: 'AI Workshop',
        description: 'Coming Soon...',
        image: '/images/ai_workshop.jpg',
        status: 'Unavailable'
    },
    {
        id: 3,
        title: 'Web Dev Bootcamp',
        description: 'Coming Soon...',
        image: '/images/webdev.jpg',
        status: 'Unavailable'
    }
];

export default function Events() {
    return (
        <main className="bg-slate-950 text-white font-sans min-h-screen">
            <Navbar />
            <section className="pt-24 pb-16 px-6 bg-slate-950">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-blue-400 mb-10" id="events">
                        Upcoming Events
                    </h2>

                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                            >
                                <div className="relative w-full h-48">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                                    <p>{event.description}</p>
                                    <button 
                                        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                        disabled={event.status === 'Unavailable'}
                                    >
                                        {event.status}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
