import { Sparkles } from 'lucide-react'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKV_placeholder.mp4'

export default function CardSix() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 384, height: 384, background: '#000', borderRadius: 12 }}
    >
      {/* Background video */}
      <video
        src={VIDEO_URL}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between p-6">
        {/* Top row */}
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-white/50" />
          <span
            className="font-poppins font-medium text-white/50 uppercase"
            style={{ fontSize: 9, letterSpacing: '0.2em' }}
          >
            AI-Powered Floral Design
          </span>
        </div>

        {/* Bottom section */}
        <div>
          {/* Heading */}
          <h2
            className="font-poppins font-medium text-white leading-[0.95] animate-fade-rise"
            style={{ fontSize: 38, letterSpacing: '-0.05em' }}
          >
            Innovating the
            <br />
            <em className="font-source-serif font-medium italic text-white/80">spirit of</em>{' '}
            bloom
          </h2>

          <p
            className="font-poppins text-white/50 leading-relaxed mt-3 animate-fade-rise-delay"
            style={{ fontSize: 8, maxWidth: 200 }}
          >
            Where artificial intelligence meets nature's artistry. Sculpting living compositions
            beyond imagination.
          </p>

          {/* Pills */}
          <div className="flex items-center gap-2 mt-4 animate-fade-rise-delay-2">
            {['AI Generation', '3D Structures'].map((label) => (
              <span
                key={label}
                className="liquid-glass rounded-full px-3 py-1 font-poppins text-white/80"
                style={{ fontSize: 7 }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
