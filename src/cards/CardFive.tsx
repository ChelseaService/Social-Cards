import { useRef, useEffect } from 'react'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKV_placeholder.mp4'
const FADE_DURATION = 0.5

export default function CardFive() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // rAF loop: fade in at start, fade out at end
    const tick = () => {
      if (!video.duration) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }
      const t = video.currentTime
      const d = video.duration

      if (t < FADE_DURATION) {
        video.style.opacity = String(t / FADE_DURATION)
      } else if (t > d - FADE_DURATION) {
        video.style.opacity = String((d - t) / FADE_DURATION)
      } else {
        video.style.opacity = '1'
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    // On ended: fade out, brief pause, then restart
    const handleEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {/* autoplay may be blocked */})
      }, 100)
    }

    video.addEventListener('ended', handleEnded)

    return () => {
      cancelAnimationFrame(rafRef.current)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 384, height: 384, background: '#fff', borderRadius: 12 }}
    >
      {/* Video container — starts below 140px */}
      <div className="absolute left-0 right-0 bottom-0" style={{ top: 140 }}>
        <video
          ref={videoRef}
          src={VIDEO_URL}
          className="w-full h-full object-cover"
          style={{ opacity: 0 }}
          autoPlay
          muted
          playsInline
          // no loop — handled manually
        />
      </div>

      {/* Complex white overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, white 0%, white 20%, transparent 45%, transparent 65%, white 90%, white 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <h2
          className="font-instrument leading-[0.95] text-black animate-fade-rise"
          style={{ fontSize: 34, letterSpacing: '-0.8px' }}
        >
          Beyond <em>silence,</em>
          <br />
          <span style={{ color: '#6F6F6F' }}>
            we build <em>the eternal.</em>
          </span>
        </h2>

        <p
          className="font-inter leading-relaxed mt-3 animate-fade-rise-delay"
          style={{ fontSize: 8, color: '#6F6F6F', maxWidth: 230 }}
        >
          Platforms for deep thinkers and fearless makers. Digital havens for focused work and pure
          creative flow.
        </p>

        <p
          className="font-instrument tracking-tight mt-5 animate-fade-rise-delay-2"
          style={{ fontSize: 10, color: 'rgba(0,0,0,0.3)' }}
        >
          Aethera<sup style={{ fontSize: 5 }}>®</sup>
        </p>
      </div>
    </div>
  )
}
