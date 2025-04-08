// components/Loader.tsx
'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Show loader briefly on route change
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust duration here

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <AnimatePresence>
            {loading && <Load />}
        </AnimatePresence>
    );
};

const Load = () => {
    return (
        <motion.div
            className="fixed inset-0 bg-[#0B0F19] flex items-center justify-center z-[9999]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex flex-col space-y-5 items-center'>
                <img className='w-60' src="logo.svg" alt="" />
                <p className="text-white">ThamZeal International</p>
                <div className="w-5 h-5 border-1 border-white border-t-transparent rounded-full animate-spin" />
            </div>
        </motion.div>
    );
};

export default Loader;
