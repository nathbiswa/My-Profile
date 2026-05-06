"use client";

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 px-6 md:px-20">
            <div className="max-w-3xl mx-auto text-center">

                <h2 className="text-3xl font-bold mb-6">
                    Contact Me
                </h2>

                <p className="text-gray-600 mb-10">
                    Feel free to reach out for any project or collaboration.
                </p>

                <form className="space-y-4">

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border p-3 rounded-lg outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border p-3 rounded-lg outline-none"
                    />

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full border p-3 rounded-lg outline-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </section>
    );
}