import { useState, useEffect } from "react";
import axios from "axios";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false); // ✅ NEW

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
        const res = await axios.post("https://newsletter-api-aimm.onrender.com/api/subscribe", {
            email,
        });

        if (res.data.exists) {
            setStatus("⚠️ You are already subscribed!");
        } else {
            setStatus("✅ You're subscribed!");
            setEmail("");
        }

    } catch (err) {
        if (err.response?.status === 400) {
            setStatus("❌ Please enter a valid email");
        } else {
            setStatus("❌ Something went wrong. Try again.");
        }
    } finally {
        setLoading(false);
    }
};


useEffect(() => {
    if (status) {
        const timer = setTimeout(() => setStatus(""), 4000);
        return () => clearTimeout(timer);
    }
}, [status]);

    return (
        <section className="bg-slate-950 py-20 px-4 pt-36">
            <div className="max-w-6xl mx-auto">

                <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-lg bg-white/5">

                    {/* LEFT SIDE */}
                    <div className="p-10 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Stay Updated 🚀
                        </h2>

                        <p className="text-gray-400 mb-6">
                            Join our newsletter to receive exclusive updates, offers, and upcoming events.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={loading} // ✅ disable input
                                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                            />

                            <button
                                type="submit"
                                disabled={loading} // ✅ disable button
                                className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-400 transition font-semibold shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {loading ? (
                                    <>
                                        {/* Spinner */}
                                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        Subscribing...
                                    </>
                                ) : (
                                    "Subscribe"
                                )}
                            </button>
                        </form>

                        {/* Status */}
{status && (
    <p
        className={`mt-4 text-sm font-medium ${
            status.includes("✅")
                ? "text-green-400"
                : status.includes("⚠️")
                ? "text-yellow-400"
                : "text-red-400"
        }`}
    >
        {status}
    </p>
)}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-500 flex items-center justify-center p-10">

                        <div className="text-center text-white">
                            <h3 className="text-2xl font-semibold mb-3">
                                ✨ Monthly Insights
                            </h3>
                            <p className="text-gray-200">
                                Get curated content, insider news, and updates delivered straight to your inbox.
                            </p>
                        </div>

                        <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}