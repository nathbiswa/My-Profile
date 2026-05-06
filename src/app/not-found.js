"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 text-center">

            {/* Animated 404 Text */}
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-8xl font-extrabold"
            >
                404
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-300 mt-4"
            >
                Oops! Page not found
            </motion.p>

            {/* Floating animation card */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl"
            >
                The page you are looking for doesn’t exist.
            </motion.div>

            {/* Button */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="mt-8"
            >
                <Link
                    href="/"
                    className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
                >
                    Go Home
                </Link>
            </motion.div>

        </div>
    );
}