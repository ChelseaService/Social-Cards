import { Star } from 'lucide-react'
import type { Slide3 } from '../slides.config'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKV_placeholder.mp4'

export default function CardThree({ data }: { data: Slide3 }) {
  return (
    <div
      className="relative overflow-hidden flex flex-col"
      style={{ width: 384, height: 384, background: '#fff', borderRadius: 12 }}
    >
      <video src={VIDEO_URL} className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ paddingTop: 140 }} autoPlay loop muted playsInline />
      <div className="absolute left-0 right-0 z-10 pointer-events-none" style={{ top: 140, height: 120, background: 'linear-gradient(to bottom, white 0%, transparent 100%)' }} />

      <div className="relative z-20 flex flex-col h-full">
        <div className="flex-1 flex flex-col items-center justify-start pt-10 text-center px-5">
          <div className="flex items-center gap-1.5 mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <Star className="w-3 h-3 fill-black text-black" />
            <span className="font-inter font-medium text-black" style={{ fontSize: 8 }}>{data.logo}</span>
          </div>

          <h2 className="font-inter font-normal leading-[1.08] tracking-tight mb-2.5 animate-fade-in-up" style={{ fontSize: 30, animationDelay: '0.2s', opacity: 0 }}>
            {data.headline[0]}<br />
            {data.headline[1]}<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #000, #6b7280, #9ca3af)' }}>
              {data.headline[2]}
            </span>
          </h2>

          <p className="font-inter text-gray-500 leading-relaxed animate-fade-in-up" style={{ fontSize: 9, maxWidth: 240, animationDelay: '0.3s', opacity: 0 }}>
            {data.body}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 pb-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <span className="rounded-full px-2.5 py-0.5 font-inter font-medium text-white backdrop-blur-md border border-white/20" style={{ fontSize: 7, background: 'rgba(255,255,255,0.15)' }}>
            {data.partnerText}
          </span>
          <div className="flex items-center gap-5">
            {data.brands.map((brand) => (
              <span key={brand} className="text-base italic text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
