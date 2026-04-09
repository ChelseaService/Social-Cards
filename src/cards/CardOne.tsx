import { Sparkles, Zap, ArrowRight } from 'lucide-react'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKV_placeholder.mp4'

export default function CardOne() {
  return (
    <div
      className="relative rounded-xl overflow-hidden p-7 flex flex-col justify-between"
      style={{ width: 384, height: 384, background: '#000', borderRadius: 12 }}
    >
      {/* Background video — top-right, 75% height, flipped horizontally */}
      <video
        src={VIDEO_URL}
        className="absolute top-0 right-0 object-cover pointer-events-none"
        style={{ height: '75%', transform: 'scaleX(-1)' }}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Top content */}
      <div className="relative z-10">
        <div className="flex items-center gap-1.5 mb-3">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-condiment text-amber-400 text-sm tracking-wide">
            The Future Is Now
          </span>
        </div>
        <h1
          className="font-grotesk text-white uppercase tracking-tight leading-[1.05]"
          style={{ fontSize: 32 }}
        >
          Simplify
          <br />
          Your Work
          <br />
          <span className="text-amber-400">With AI</span>
        </h1>
      </div>

      {/* Bottom content */}
      <div className="relative z-10">
        <p className="font-mono text-white/60 leading-relaxed mb-4" style={{ fontSize: 10 }}>
          Automate repetitive tasks, generate content in seconds, and let intelligent tools handle
          the heavy lifting — so you can focus on what truly matters.
        </p>

        <div className="flex items-center justify-between">
          {/* Left: AI Powered badge */}
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-amber-400/20 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <span
              className="font-mono text-white/40 uppercase tracking-widest"
              style={{ fontSize: 8 }}
            >
              AI Powered
            </span>
          </div>

          {/* Right: Learn More pill */}
          <button className="flex items-center gap-1.5 bg-white/10 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
            <span
              className="font-grotesk text-white uppercase tracking-wide"
              style={{ fontSize: 10 }}
            >
              Learn More
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
