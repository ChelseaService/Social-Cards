import { Sparkles, Zap, ArrowRight } from 'lucide-react'
import type { Slide1 } from '../slides.config'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKV_placeholder.mp4'

export default function CardOne({ data }: { data: Slide1 }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden p-7 flex flex-col justify-between"
      style={{ width: 384, height: 384, background: '#000', borderRadius: 12 }}
    >
      <video
        src={VIDEO_URL}
        className="absolute top-0 right-0 object-cover pointer-events-none"
        style={{ height: '75%', transform: 'scaleX(-1)' }}
        autoPlay loop muted playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-center gap-1.5 mb-3">
          <Sparkles className="w-4 h-4" style={{ color: data.accentColor }} />
          <span className="font-condiment text-sm tracking-wide" style={{ color: data.accentColor }}>
            {data.eyebrow}
          </span>
        </div>
        <h1 className="font-grotesk text-white uppercase tracking-tight leading-[1.05]" style={{ fontSize: 32 }}>
          {data.headline[0]}<br />
          {data.headline[1]}<br />
          <span style={{ color: data.accentColor }}>{data.headline[2]}</span>
        </h1>
      </div>

      <div className="relative z-10">
        <p className="font-mono text-white/60 leading-relaxed mb-4" style={{ fontSize: 10 }}>
          {data.body}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: data.accentColor + '33' }}>
              <Zap className="w-3.5 h-3.5" style={{ color: data.accentColor }} />
            </div>
            <span className="font-mono text-white/40 uppercase tracking-widest" style={{ fontSize: 8 }}>
              {data.badge}
            </span>
          </div>
          <button className="flex items-center gap-1.5 bg-white/10 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
            <span className="font-grotesk text-white uppercase tracking-wide" style={{ fontSize: 10 }}>{data.cta}</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
