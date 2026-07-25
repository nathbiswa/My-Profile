"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
    {
        icon: FaEnvelope,
        label: "Email",
        value: "biswanathroybn29@gmail.com",
        href: "mailto:biswanathroybn29@gmail.com",
        color: "text-purple-400",
        bg: "bg-purple-500/10 border-purple-400/20",
    },
    {
        icon: FaPhone,
        label: "Phone",
        value: "+880 1813-319409",
        href: "tel:+8801813319409",
        color: "text-blue-400",
        bg: "bg-blue-500/10 border-blue-400/20",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: "+880 1306-192070",
        href: "https://wa.me/8801306192070",
        color: "text-green-400",
        bg: "bg-green-500/10 border-green-400/20",
    },
];

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/nathbiswa/", label: "GitHub", color: "hover:text-gray-300" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/bishwa-nath-roy", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaFacebook, href: "https://web.facebook.com/BishwaNathRoy29", label: "Facebook", color: "hover:text-blue-500" },
];

export default function ContactSection() {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);
    const infoRef = useRef(null);
    const successRef = useRef(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // success | error

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        if (!form.name || !form.email || !form.message) {
            return "All fields are required";
        }
        if (!form.email.includes("@")) {
            return "Invalid email format";
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const err = validate();
        if (err) {
            setStatus("error");
            return;
        }

        setLoading(true);
        setStatus(null);

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
        gsap.from(infoRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            x: -60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
        });

        gsap.from(cardRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            x: 60,
            opacity: 0,
            duration: 0.9,
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
            <div className="absolute top-[-160px] left-[-160px] w-[450px] h-[450px] bg-purple-500 blur-[180px] opacity-20 rounded-full" />
            <div className="absolute bottom-[-160px] right-[-160px] w-[450px] h-[450px] bg-blue-500 blur-[180px] opacity-20 rounded-full" />

            {/* TITLE */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Let's Work Together 🚀
                </h2>
                <p className="text-gray-300 mt-4 max-w-xl mx-auto">
                    Have a project in mind or want to connect? Reach out directly or drop me a message.
                </p>
            </div>

            {/* TWO-COLUMN LAYOUT */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

                {/* LEFT — CONTACT INFO */}
                <div ref={infoRef} className="space-y-6">

                    <h3 className="text-xl font-semibold text-purple-300 mb-2">
                        📬 Contact Information
                    </h3>

                    {/* Info Cards */}
                    {contactInfo.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={i}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={`flex items-center gap-4 p-4 rounded-xl border backdrop-blur-md
                                ${item.bg} hover:scale-[1.02] transition group`}
                            >
                                <div className={`text-2xl ${item.color}`}>
                                    <Icon />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                                    <p className={`font-medium ${item.color}`}>{item.value}</p>
                                </div>
                            </a>
                        );
                    })}

                    {/* Social Links */}
                    <div className="pt-4">
                        <p className="text-sm text-gray-500 mb-4">Also find me on</p>
                        <div className="flex gap-4 text-2xl">
                            {socialLinks.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className={`text-gray-400 ${s.color} hover:scale-125 transition`}
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* RIGHT — CONTACT FORM */}
                <form
                    ref={cardRef}
                    onSubmit={handleSubmit}
                    className="relative p-8 rounded-2xl
                    bg-white/5 backdrop-blur-md border border-white/10
                    space-y-5"
                >
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                        ✉️ Send a Message
                    </h3>

                    {/* SUCCESS OVERLAY */}
                    {status === "success" && (
                        <div
                            ref={successRef}
                            className="absolute inset-0 flex items-center justify-center
                            bg-green-500/20 backdrop-blur-md rounded-2xl z-10"
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
                        outline-none focus:border-purple-500 transition placeholder:text-gray-600"
                    />

                    {/* EMAIL */}
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-4 rounded-lg bg-white/5 border border-white/10
                        outline-none focus:border-blue-500 transition placeholder:text-gray-600"
                    />

                    {/* MESSAGE */}
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Your Message"
                        className="w-full p-4 rounded-lg bg-white/5 border border-white/10
                        outline-none focus:border-purple-500 transition placeholder:text-gray-600"
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