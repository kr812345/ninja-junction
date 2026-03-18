'use client'
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollNavigator({children}) {
    const pathname = usePathname();
    const router = useRouter();

    const routes = ['/', '/Events', '/Collaborations', '/About', '/Contact'];

    useEffect(()=>{
        const handleScroll = (e) => {
            const currentIndex = routes.indexOf(pathname);
            
            if (e.deltaY > 0 && currentIndex < routes.length - 1) {
                router.push(routes[currentIndex + 1]);
            } else if (e.deltaY < 0 && currentIndex > 0) {
                router.push(routes[currentIndex - 1]);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[pathname, router]);

    return <>{children}</>
}