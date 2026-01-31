"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const routes = ["/", "/Projects", "/Events", "/Contact", "/About"];
  const currentIndex = routes.indexOf(pathname);

  return (
    // <AnimatePresence mode="wait">
    //   <motion.div
    //     key={pathname}
    //     initial={{ x: "100%", opacity: 0 }}
    //     animate={{ x: "0%", opacity: 1 }}
    //     exit={{ x: "-100%", opacity: 0 }}
    //     transition={{ duration: 0.5, ease: "easeInOut" }}
    //     drag="y"
    //     dragConstraints={{ left: 0, right: 0 }}
    //     dragElastic={0.1}
    //     onDragEnd={(event, info) => {
    //       if (info.offset.y < 0 && currentIndex < routes.length - 1) {
    //         router.push(routes[currentIndex + 1]);
    //       } else if (info.offset.y > 0 && currentIndex > 0) {
    //         router.push(routes[currentIndex - 1]);
    //       }
    //     }}
    //     className="h-screen w-screen"
    //   >
       <>
       {children}
       </> 
    //   </motion.div>
    // </AnimatePresence>
  );
}
