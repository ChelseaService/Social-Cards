const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKV_placeholder.mp4'

export default function CardFour() {
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-[1]" />

      {/* Content — pinned to bottom */}
      <div className="relative z-10 flex flex-col h-full justify-end px-6 pb-7">
        <h2
          className="font-instrument text-white leading-[0.95] tracking-tight animate-fade-rise"
          style={{ fontSize: 32 }}
        >
          Focus in a
          <br />
          Distracted World
        </h2>

        <p
          className="font-inter text-white/70 leading-relaxed mt-3 animate-fade-rise-delay"
          style={{ fontSize: 8, maxWidth: 220 }}
        >
          Designing tools for deep thinkers, bold creators, and quiet rebels. Digital spaces for
          sharp focus and inspired work.
        </p>

        <p
          className="font-instrument text-white/25 tracking-tight mt-4 animate-fade-rise-delay-2"
          style={{ fontSize: 10 }}
        >
          Velorah<sup style={{ fontSize: 5 }}>®</sup>
        </p>
      </div>
    </div>
  )
}
