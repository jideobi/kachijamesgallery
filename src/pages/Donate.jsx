import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Donation() {
  const [amount, setAmount] = useState(25);
  const presets = [10, 25, 50, 100];

  return (
    <div className="py-48 bg-gradient-to-br from-black via-gray-400 to-black text-white p-6 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Left Section */}
        <div className="space-y-6 ">
          <div className="flex items-center gap-3 text-purple-100">
            <Sparkles />
            <span className="uppercase tracking-widest text-sm">
              Support the Gallery
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fuel Creativity. <br /> Empower Art.
          </h1>

          <p className="text-gray-300">
            Your donation helps the Kachi James Gallery nurture emerging
            artists, host exhibitions, and keep creativity accessible to
            everyone. Every contribution becomes part of a living story.
          </p>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-flex items-center gap-2 text-pink-400"
          >
            <Heart /> Made with love for art
          </motion.div>
        </div>

        {/* Donation Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 space-y-6">
          <h2 className="text-xl font-semibold">Choose your impact</h2>

          <div className="grid grid-cols-4 gap-3">
            {presets.map((value) => (
              <button
                key={value}
                onClick={() => setAmount(value)}
                className={`rounded-xl p-2 border transition ${
                  amount === value
                    ? "bg-black border-black"
                    : "bg-black/40 border-white/20 hover:bg-white/10"
                }`}
              >
                ${value}
              </button>
            ))}
          </div>

          <div>
            <label className="text-sm text-gray-300">Custom amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/20 focus:outline-none"
            />
          </div>

          <button className="w-full text-lg rounded-xl bg-gradient-to-r from-pink-500 to-purple-200 hover:opacity-90 p-3 font-semibold">
            Donate ${amount}
          </button>

          <p className="text-xs text-black/60 text-center">
            Secure donations — thank you for supporting creativity ✨
          </p>
        </div>
      </motion.div>
    </div>
  );
}
