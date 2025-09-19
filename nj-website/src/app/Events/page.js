'use client';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import events from '../../../public/events';
import { motion } from 'framer-motion';
import Events from '@/Components/Event/Event';

export default function EventsPage() {
    return (
        <>
            <Events />
        </>
    );
}