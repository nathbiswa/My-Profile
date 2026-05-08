"use client";

export default function HolographicFog() {
    return (
        <div className="absolute inset-0 z-0">
            {/* 🌫️ Fog Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-blue-500/10 blur-3xl opacity-40" />

            {/* ✨ Light streaks */}
            <div className="absolute w-full h-full opacity-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.2), transparent 50%), radial-gradient(circle at 70% 70%, rgba(59,130,246,0.2), transparent 50%)"
                }}
            />
        </div>
    );
}