import type { Slide4 } from '../slides.config'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKV_placeholder.mp4'

export default function CardFour({ data }: { data: Slide4 }) {
  const lines = data.headline.split('\n')
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 384, height: 384, background: '#000', borderRadius: 12 }}
    >
      <video src={VIDEO_URL} className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-[1]" />

      <div className="relative z-10 flex flex-col h-full justify-end px-6 pb-7">
        <h2 className="font-instrument text-white leading-[0.95] tracking-tight animate-fade-rise" style={{ fontSize: 32 }}>
          {lines.map((line, i) => <span key={i}>{line}{i < lines.length - 1 && <br />}</span>)}
        </h2>
        <p className="font-inter text-white/70 leading-relaxed mt-3 animate-fade-rise-delay" style={{ fontSize: 8, maxWidth: 220 }}>
          {data.body}
        </p>
        <p className="font-instrument text-white/25 tracking-tight mt-4 animate-fade-rise-delay-2" style={{ fontSize: 10 }}>
          {data.brand}
        </p>
      </div>
    </div>
  )
}
