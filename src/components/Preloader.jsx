import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('preloader-active')
    const preloader = preloaderRef.current
    const namePath = preloader?.querySelector('.name-path')
    const nameEcho = preloader?.querySelector('.name-path-echo')
    const loaderWrapper = preloader?.querySelector('.loader-wrapper')
    const laser = preloader?.querySelector('.loader-laser')
    const flash = document.getElementById('screen-flash')
    const svg = preloader?.querySelector('.loader-name-svg')

    // Generate stardust
    const starContainer = preloader?.querySelector('#stardust-container')
    if (starContainer) {
      for (let i = 0; i < 25; i++) {
        const star = document.createElement('div')
        star.className = 'stardust'
        const size = Math.random() * 2 + 1
        star.style.width = `${size}px`
        star.style.height = `${size}px`
        star.style.top = `${Math.random() * 100}%`
        star.style.left = `${Math.random() * 100}%`
        star.style.setProperty('--delay', `${Math.random() * 5}s`)
        star.style.setProperty('--duration', `${Math.random() * 3 + 3}s`)
        starContainer.appendChild(star)
      }
    }

    if (!namePath) {
      // If SVG text not found, skip preloader
      if (preloader) preloader.style.display = 'none'
      document.body.classList.remove('preloader-active')
      document.body.style.overflow = 'auto'
      onComplete?.()
      return
    }

    window.preloaderState = { laserX: -1, isWarping: false }

    // Fallback: force-complete preloader after 8 seconds
    const fallbackTimer = setTimeout(() => {
      if (preloader && preloader.style.display !== 'none') {
        preloader.style.display = 'none'
        document.body.classList.remove('preloader-active')
        document.body.style.overflow = 'auto'
        window.preloaderState.isWarping = false
        onComplete?.()
      }
    }, 8000)

    const tl = gsap.timeline()

    tl.to(loaderWrapper, { x: 5, duration: 0.05, repeat: 5, yoyo: true, ease: "power1.inOut" })

    tl.set(laser, { opacity: 1 })
    tl.to([namePath, nameEcho], {
      strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut", stagger: 0.05,
      onUpdate: function () {
        const progress = this.progress()
        window.preloaderState.laserX = progress
        if (Math.random() > 0.3) {
          const p = document.createElement('div')
          p.className = 'trail-particle'
          loaderWrapper.appendChild(p)
          const rect = laser.getBoundingClientRect()
          const laserX = rect.left + (rect.width * progress) / 2
          const laserY = rect.top + rect.height / 2
          gsap.set(p, { left: laserX, top: laserY + (Math.random() - 0.5) * 100 })
          gsap.to(p, { x: (Math.random() - 0.5) * 100, y: (Math.random() - 1) * 200, opacity: 0, scale: 0, duration: 1, onComplete: () => p.remove() })
        }
      }
    })
    tl.to(laser, { left: "100%", duration: 1.6, ease: "power2.inOut" }, "<")

    tl.to([namePath, nameEcho], {
      fill: (i) => i === 0 ? "url(#name-gradient)" : "transparent",
      strokeWidth: "0px", duration: 0.4, ease: "expo.out",
      onStart: () => { namePath.classList.add('filled'); nameEcho.classList.add('filled') }
    })
    tl.to(laser, { opacity: 0, duration: 0.2 }, "-=0.2")

    // Removed pulses and scaling for a "perfect" stable entry

    tl.add(() => {
      window.preloaderState.isWarping = true
      
      // The "Bomb" Animation: Colorful High-Fidelity Burst
      const colors = ['#8b5cf6', '#ec4899', '#6366f1', '#fff']
      const container = loaderWrapper

      for (let i = 0; i < 200; i++) {
        const p = document.createElement('div')
        p.className = 'bomb-particle'
        p.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: 50%;
          left: 50%;
          top: 50%;
          z-index: 100;
          box-shadow: 0 0 10px currentColor;
        `
        container.appendChild(p)

        const angle = Math.random() * Math.PI * 2
        const velocity = 5 + Math.random() * 15
        const dist = 500 + Math.random() * 1000

        gsap.to(p, {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          opacity: 0,
          scale: 0.5,
          duration: 1.5 + Math.random(),
          ease: "power4.out",
          onComplete: () => p.remove()
        })
      }
    })

    tl.to(preloader, {
      opacity: 0, duration: 0.8, ease: "power2.out",
      onComplete: () => {
        clearTimeout(fallbackTimer)
        preloader.style.display = 'none'
        document.body.classList.remove('preloader-active')
        document.body.style.overflow = 'auto'
        window.preloaderState.isWarping = false
        window.preloaderState.laserX = -100
        onComplete?.()
      }
    })
  }, [onComplete])

  return (
    <>
      <div id="preloader" ref={preloaderRef}>
        <div id="stardust-container" style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:2}}></div>
        <div className="loader-aurora aurora-1"></div>
        <div className="loader-aurora aurora-2"></div>
        <div className="loader-wrapper">
          <div className="loader-svg-wrapper">
            <svg className="loader-name-svg" viewBox="0 0 1200 250" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="name-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" className="name-path">Zeel Kundariya</text>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" className="name-path-echo" dx="3" dy="3">Zeel Kundariya</text>
            </svg>
            <div className="loader-laser"></div>
          </div>
        </div>
      </div>
    </>
  )
}
