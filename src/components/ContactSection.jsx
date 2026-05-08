"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);
    const successRef = useRef(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // success | error

    // 🧠 input handler
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // 🧪 validation
    const validate = () => {
        if (!form.name || !form.email || !form.message) {
            return "All fields are required";
        }
        if (!form.email.includes("@")) {
            return "Invalid email format";
        }
        return null;
    };

    // 🚀 submit handler (future API / BetterAuth hook ready)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const err = validate();
        if (err) {
            setStatus("error");
            return;
        }

        setLoading(true);
        setStatus(null);

        // ⏳ simulate backend (replace with API / email service)
        setTimeout(() => {
            setLoading(false);
            setStatus("success");

            gsap.fromTo(
                successRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
            );

            setTimeout(() => {
                setStatus(null);
            }, 2000);

            setForm({ name: "", email: "", message: "" });
        }, 1200);
    };

    useEffect(() => {
        gsap.from(cardRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
    }, []);

    return (
        <section id="contact"
            ref={sectionRef}
            className="relative py-28 px-6 md:px-20 text-white overflow-hidden
            bg-gradient-to-br from-[#020617] via-[#1e1b4b] to-[#0f172a]"
        >

            {/* 🌌 Background Glow */}
            <div className="absolute top-[-160px] left-[-160px] w-[450px] h-[450px] bg-purple-500 blur-[180px] opacity-20 rounded-full"></div>
            <div className="absolute bottom-[-160px] right-[-160px] w-[450px] h-[450px] bg-blue-500 blur-[180px] opacity-20 rounded-full"></div>

            {/* TITLE */}
            <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Let’s Build Something Legendary 🚀
                </h2>
                <p className="text-gray-300 mt-4 max-w-xl mx-auto">
                    This form is ready for real backend integration (BetterAuth / API / Email service).
                </p>
            </div>

            {/* FORM CARD */}
            <div className="max-w-3xl mx-auto">

                <form
                    ref={cardRef}
                    onSubmit={handleSubmit}
                    className="relative p-8 rounded-2xl
                    bg-white/5 backdrop-blur-md border border-white/10
                    space-y-6"
                >

                    {/* SUCCESS OVERLAY */}
                    {status === "success" && (
                        <div
                            ref={successRef}
                            className="absolute inset-0 flex items-center justify-center
                            bg-green-500/20 backdrop-blur-md rounded-2xl"
                        >
                            <p className="text-xl font-bold text-green-300">
                                Message Sent Successfully 🎉
                            </p>
                        </div>
                    )}

                    {/* ERROR */}
                    {status === "error" && (
                        <p className="text-red-400 text-sm">
                            Please fill all fields correctly.
                        </p>
                    )}

                    {/* NAME */}
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-4 rounded-lg bg-white/5 border border-white/10
                        outline-none focus:border-purple-500 transition"
                    />

                    {/* EMAIL */}
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-4 rounded-lg bg-white/5 border border-white/10
                        outline-none focus:border-blue-500 transition"
                    />

                    {/* MESSAGE */}
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Your Message"
                        className="w-full p-4 rounded-lg bg-white/5 border border-white/10
                        outline-none focus:border-purple-500 transition"
                    />

                    {/* BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-lg font-semibold
                        bg-gradient-to-r from-purple-500 to-blue-500
                        hover:scale-[1.03] transition shadow-lg disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message ✨"}
                    </button>

                </form>

            </div>

        </section>
    );
}