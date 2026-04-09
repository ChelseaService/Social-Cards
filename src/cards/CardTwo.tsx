const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKV_placeholder.mp4'

export default function CardTwo() {
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
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between p-7">
        {/* Top section */}
        <div>
          {/* Pill badge */}
          <div className="liquid-glass rounded-lg px-3 py-1.5 inline-flex items-center gap-2 mb-5 animate-fade-rise">
            <span
              className="bg-white text-black rounded-md font-medium px-1.5 py-0.5"
              style={{ fontSize: 7 }}
            >
              New
            </span>
            <span className="font-inter font-medium text-white/60" style={{ fontSize: 7 }}>
              Say Hello to Corewave v3.2
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-inter font-medium text-white leading-[1.05] animate-fade-rise-delay"
            style={{ fontSize: 36, letterSpacing: '-1.5px' }}
          >
            Your Insights.
            <br />
            One Clear{' '}
            <span className="font-instrument font-normal italic text-white/80">Overview.</span>
          </h2>

          {/* Paragraph */}
          <p
            className="font-inter leading-relaxed mt-3 opacity-90 animate-fade-rise-delay-2"
            style={{ fontSize: 8.5, color: '#d4d8e8', maxWidth: 240 }}
          >
            Neuralyn helps teams track metrics, goals, and progress with precision.
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex items-center gap-2 animate-fade-rise-delay-2">
          <span
            className="font-inter text-white/30 font-semibold tracking-tight"
            style={{ fontSize: 9 }}
          >
            Neuralyn
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
          <span
            className="font-inter text-white/20 tracking-widest uppercase"
            style={{ fontSize: 7 }}
          >
            Analytics
          </span>
        </div>
      </div>
    </div>
  )
}
