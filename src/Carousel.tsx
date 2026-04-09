import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Download } from 'lucide-react'
import { slides } from './slides.config'
import CardOne from './cards/CardOne'
import CardTwo from './cards/CardTwo'
import CardThree from './cards/CardThree'
import CardFour from './cards/CardFour'
import CardFive from './cards/CardFive'
import CardSix from './cards/CardSix'
import type { SlideConfig } from './slides.config'

const CARD_SIZE = 384

function SlideRenderer({ slide }: { slide: SlideConfig }) {
  switch (slide.template) {
    case 'one':   return <CardOne data={slide} />
    case 'two':   return <CardTwo data={slide} />
    case 'three': return <CardThree data={slide} />
    case 'four':  return <CardFour data={slide} />
    case 'five':  return <CardFive data={slide} />
    case 'six':   return <CardSix data={slide} />
  }
}

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [scale, setScale] = useState(1)
  const [downloading, setDownloading] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)

  useEffect(() => {
    const update = () => setScale(Math.min(1, (window.innerWidth - 48) / CARD_SIZE))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(slides.length - 1, c + 1))

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
  }

  const download = useCallback(async () => {
    if (!cardRef.current || downloading) return
    setDownloading(true)
    try {
      const { toPng } = await import('html-to-image')
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 1080 / CARD_SIZE,
        cacheBust: true,
      })
      const a = document.createElement('a')
      a.href = dataUrl
      a.download = `slide-${current + 1}.png`
      a.click()
    } catch (err) {
      console.error('Download failed:', err)
    } finally {
      setDownloading(false)
    }
  }, [current, downloading])

  return (
    <div className="flex flex-col items-center min-h-screen py-10 gap-6" style={{ background: '#0a0a0a' }}>

      {/* Slide counter */}
      <p className="font-inter text-white/30 text-sm tracking-widest">
        {current + 1} / {slides.length}
      </p>

      {/* Card — swipeable */}
      <div
        style={{ width: CARD_SIZE * scale, height: CARD_SIZE * scale, position: 'relative', flexShrink: 0 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={cardRef}
          style={{ width: CARD_SIZE, height: CARD_SIZE, transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
          <SlideRenderer slide={slides[current]} />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === current ? 'white' : 'rgba(255,255,255,0.2)',
              transition: 'all 0.2s ease',
            }}
          />
        ))}
      </div>

      {/* Prev / Next */}
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
          style={{ background: 'rgba(255,255,255,0.08)', opacity: current === 0 ? 0.3 : 1 }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button
          onClick={download}
          disabled={downloading}
          className="flex items-center gap-2 rounded-full px-5 py-2.5 font-inter text-sm font-medium transition-opacity"
          style={{ background: 'white', color: '#000', opacity: downloading ? 0.6 : 1 }}
        >
          <Download className="w-4 h-4" />
          {downloading ? 'Saving…' : 'Download 1080px'}
        </button>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
          style={{ background: 'rgba(255,255,255,0.08)', opacity: current === slides.length - 1 ? 0.3 : 1 }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Hint */}
      <p className="font-inter text-white/20 text-xs">Swipe to browse · tap Download to save as PNG</p>
    </div>
  )
}
