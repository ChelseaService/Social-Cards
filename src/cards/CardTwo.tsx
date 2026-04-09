import type { Slide2 } from '../slides.config'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKV_placeholder.mp4'

export default function CardTwo({ data }: { data: Slide2 }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 384, height: 384, background: '#000', borderRadius: 12 }}
    >
      <video src={VIDEO_URL} className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80 z-[1]" />

      <div className="relative z-10 flex flex-col h-full justify-between p-7">
        <div>
          <div className="liquid-glass rounded-lg px-3 py-1.5 inline-flex items-center gap-2 mb-5 animate-fade-rise">
            <span className="bg-white text-black rounded-md font-medium px-1.5 py-0.5" style={{ fontSize: 7 }}>
              {data.pillLabel}
            </span>
            <span className="font-inter font-medium text-white/60" style={{ fontSize: 7 }}>{data.pillText}</span>
          </div>

          <h2 className="font-inter font-medium text-white leading-[1.05] animate-fade-rise-delay" style={{ fontSize: 36, letterSpacing: '-1.5px' }}>
            {data.headline.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
            <span className="font-instrument font-normal italic text-white/80">{data.headlineSuffix}</span>
          </h2>

          <p className="font-inter leading-relaxed mt-3 opacity-90 animate-fade-rise-delay-2" style={{ fontSize: 8.5, color: '#d4d8e8', maxWidth: 240 }}>
            {data.body}
          </p>
        </div>

        <div className="flex items-center gap-2 animate-fade-rise-delay-2">
          <span className="font-inter text-white/30 font-semibold tracking-tight" style={{ fontSize: 9 }}>{data.brand}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
          <span className="font-inter text-white/20 tracking-widest uppercase" style={{ fontSize: 7 }}>{data.category}</span>
        </div>
      </div>
    </div>
  )
}
