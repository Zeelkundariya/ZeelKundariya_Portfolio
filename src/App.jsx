import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet';




import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WinnerModal from './components/WinnerModal'
import CommandPalette from './components/CommandPalette'
import ProjectModal from './components/ProjectModal'


gsap.registerPlugin(ScrollTrigger)

const projectData = [
  { title: "LedgerCore", category: "Full Stack", desc: "Enterprise-grade financial workflow automation with multi-role dashboards and real-time analytics.", img: "/ledgercore_1.jpg", tags: ['FinTech', 'Full Stack', 'Admin'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/ledgercore_1.jpg", "/ledgercore_2.jpg", "/ledgercore_3.jpg", "/ledgercore_4.jpg", "/ledgercore_1.jpg"], auraColor: "rgba(34, 197, 94, 0.3)", scanColor: "#22c55e", borderColor: "green-500", tagColors: [{ bg: "green-500", text: "green-500" }, { bg: "emerald-500", text: "emerald-500" }], hoverColor: "green-500" },
  { title: "Adaptive AI", category: "Full Stack", desc: "Intelligent curriculum adaptation engine (LearnSmart AI) with real-time emotion detection and study planning.", img: "/learnsmart_1.png", tags: ['EdTech', 'AI', 'React'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/learnsmart_1.png", "/learnsmart_2.png", "/learnsmart_3.png", "/learnsmart_4.png", "/learnsmart_5.png"], auraColor: "rgba(132, 204, 22, 0.3)", scanColor: "#84cc16", borderColor: "lime-500", tagColors: [{ bg: "lime-500", text: "lime-500" }, { bg: "green-500", text: "green-500" }], hoverColor: "lime-500" },
  { title: "RepoReboot", category: "Full Stack", desc: "AI-driven agricultural ecosystem (Rupiya.app) empowering farmers with crop diagnosis and soil analytics.", img: "/rupiya_1.png", tags: ['AgriTech', 'AI', 'Full Stack'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/rupiya_1.png", "/rupiya_2.png", "/rupiya_3.png", "/rupiya_4.png", "/rupiya_5.png"], auraColor: "rgba(20, 184, 166, 0.3)", scanColor: "#14b8a6", borderColor: "teal-500", tagColors: [{ bg: "teal-500", text: "teal-500" }, { bg: "emerald-500", text: "emerald-500" }], hoverColor: "teal-400" },
  { title: "Logistics AI", category: "Full Stack", desc: "Global supply chain optimization solution with real-time predictive routing.", img: "/logistics_1.png", tags: ['Logistics', 'AI', 'Optimization'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/logistics_1.png", "/logistics_2.png", "/logistics_3.png", "/logistics_4.png", "/logistics_5.png"], auraColor: "rgba(16, 185, 129, 0.3)", scanColor: "#10b981", borderColor: "emerald-500", tagColors: [{ bg: "emerald-500", text: "emerald-500" }, { bg: "green-500", text: "green-500" }], hoverColor: "emerald-400" },
  { title: "GitHub Analyzer", category: "Full Stack", desc: "Advanced developer profile analytics transforming raw commits into hiring intelligence.", img: "/github_analyzer_1.png", tags: ['GitHub', 'Analytics', 'Next.js'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/github_analyzer_1.png", "/github_analyzer_2.png", "/github_analyzer_3.png", "/github_analyzer_4.png", "/github_analyzer_5.png"], auraColor: "rgba(34, 197, 94, 0.3)", scanColor: "#22c55e", borderColor: "green-400", tagColors: [{ bg: "green-400", text: "green-400" }, { bg: "teal-500", text: "teal-500" }], hoverColor: "green-300" },
  { title: "Google Meet Redesign", category: "Frontend", desc: "A sophisticated redesign of the Google Meet experience, featuring intelligent participant grids, real-time AI translation, engagement analytics, and seamless breakout room management.", img: "/google_meet_1.png", tags: ['Google Meet', 'UI Redesign', 'AI Translation'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/google_meet_1.png", "/google_meet_2.png", "/google_meet_3.png", "/google_meet_4.png", "/google_meet_5.png"], auraColor: "rgba(16, 185, 129, 0.3)", scanColor: "#10b981", borderColor: "emerald-500", tagColors: [{ bg: "emerald-500", text: "emerald-500" }, { bg: "cyan-500", text: "cyan-500" }], hoverColor: "emerald-400" },
]

function App() {
  // Initialize activeSection from URL on first load
  const [activeSection, setActiveSection] = useState(() => {
    const path = window.location.pathname.replace('/', '')
    return path || 'hero'
  })
  const [preloaderDone, setPreloaderDone] = useState(false)
  const [winnerModalOpen, setWinnerModalOpen] = useState(false)
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const [projectModalData, setProjectModalData] = useState(null)
  const bgCanvasRef = useRef(null)
  const dataStreamsRef = useRef(null)

  // Initialize and refresh AOS after preloader completes
  useEffect(() => {
    if (preloaderDone) {
      const timer = setTimeout(() => {
        AOS.init({ duration: 800, once: true, offset: 100, easing: 'ease-out-cubic' })
        AOS.refresh()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [preloaderDone])

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setCmdPaletteOpen(prev => !prev)
      }
      if (e.key === 'Escape') {
        setCmdPaletteOpen(false)
        setWinnerModalOpen(false)
        setProjectModalData(null)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Refs for performance-critical elements to avoid getElementById in loops
  const scrollProgressRef = useRef(null)
  const ghostTextRef = useRef(null)
  const journeyProgressRef = useRef(null)
  const navbarRef = useRef(null)

  // Combined Throttled Scroll Handler
  const milestoneNodesRef = useRef([])

  useEffect(() => {
    milestoneNodesRef.current = Array.from(document.querySelectorAll('.milestone-node'))
  }, [preloaderDone])

  useEffect(() => {
    let ticking = false
    const experienceSection = document.getElementById('experience')
    
    const updateScrollMetrics = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / scrollHeight) * 100

      // 1. Scroll Progress
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = scrolled + '%'
      }

      // 2. Ghost Text Parallax
      if (ghostTextRef.current) {
        ghostTextRef.current.style.transform = `rotate(-5deg) translateX(${scrollTop * 0.3}px)`
      }

      // 3. Journey Progress
      if (journeyProgressRef.current && experienceSection) {
        const rect = experienceSection.getBoundingClientRect()
        const sectionHeight = experienceSection.offsetHeight
        const scrollPos = -rect.top
        const progress = Math.max(0, Math.min(100, (scrollPos / (sectionHeight - 400)) * 100))
        journeyProgressRef.current.style.height = progress + '%'
      }

      // 4. Milestone activation (using cached nodes)
      milestoneNodesRef.current.forEach(node => {
        if (!node.classList.contains('active')) {
          const rect = node.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.8) {
            node.classList.add('active')
          }
        }
      })

      // 5. Navbar shadow / transition
      if (navbarRef.current) {
        if (scrollTop > 20) {
          navbarRef.current.classList.add('shadow-[0_10px_30px_rgba(0,0,0,0.5)]', 'bg-dark/80')
          navbarRef.current.classList.remove('bg-transparent')
        } else {
          navbarRef.current.classList.remove('shadow-[0_10px_30px_rgba(0,0,0,0.5)]', 'bg-dark/80')
          navbarRef.current.classList.add('bg-transparent')
        }
      }

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollMetrics)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Clean URL Scroll Tracker (Intersection Observer)
  useEffect(() => {
    if (!preloaderDone) return

    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certificates', 'contact']
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Detect when section is in the middle of the screen
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const cleanPath = sectionId === 'hero' ? '/' : `/${sectionId}`
          
          setActiveSection(sectionId)

          // Only update if current path is different to avoid history bloat
          if (window.location.pathname !== cleanPath) {
            window.history.replaceState(null, '', cleanPath)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [preloaderDone])

  // Sync state with back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '')
      setActiveSection(path || 'hero')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Handle Initial Load Deep Linking (e.g., /about -> scroll to about)
  useEffect(() => {
    if (preloaderDone) {
      const path = window.location.pathname.replace('/', '')
      if (path && document.getElementById(path)) {
        setTimeout(() => {
          document.getElementById(path).scrollIntoView({ behavior: 'smooth' })
        }, 1000)
      }
    }
  }, [preloaderDone])

  // Three.js Neural Network Background
  useEffect(() => {
    const canvas = bgCanvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 15

    const particlesCount = 150
    const particlesPositions = new Float32Array(particlesCount * 3)
    const particlesVelocities = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      particlesPositions[i * 3] = (Math.random() - 0.5) * 40
      particlesPositions[i * 3 + 1] = (Math.random() - 0.5) * 40
      particlesPositions[i * 3 + 2] = (Math.random() - 0.5) * 40
      particlesVelocities[i * 3] = (Math.random() - 0.5) * 0.05
      particlesVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.05
      particlesVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.05
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3))
    const particlesMaterial = new THREE.PointsMaterial({ size: 0.25, color: '#6366f1', transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    const linesGeometry = new THREE.BufferGeometry()
    const linesMaterial = new THREE.LineBasicMaterial({ color: '#6366f1', transparent: true, opacity: 0.2 })
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(linesMesh)

    // Combined input handler for Three.js
    let ticking = false
    let mouseX = 0, mouseY = 0, lastMouseX = 0, lastMouseY = 0, mouseVelX = 0, mouseVelY = 0, surgeTimer = 0
    let scrollProgress = 0

    const onMouseMove = (e) => {
      const nextX = (e.clientX / window.innerWidth - 0.5) * 40
      const nextY = (e.clientY / window.innerHeight - 0.5) * 40
      mouseVelX = nextX - lastMouseX
      mouseVelY = nextY - lastMouseY
      lastMouseX = nextX
      lastMouseY = nextY
      mouseX = (e.clientX / window.innerWidth - 0.5) * 10
      mouseY = (e.clientY / window.innerHeight - 0.5) * 10
    }

    const triggerPowerSurge = () => { surgeTimer = 1.0 }

    const onThreeScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress = window.scrollY / totalScroll
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mousedown', triggerPowerSurge, { passive: true })
    window.addEventListener('scroll', onThreeScroll, { passive: true })

    // Pre-allocate line positions for performance
    const maxLines = particlesCount * 8
    const linePositionsArr = new Float32Array(maxLines * 6) 
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositionsArr, 3))

    let animId
    function animate() {
      animId = requestAnimationFrame(animate)
      const positions = particlesGeometry.attributes.position.array
      const isWarping = window.preloaderState?.isWarping || false
      let lineIdx = 0

      mouseVelX *= 0.95
      mouseVelY *= 0.95
      if (surgeTimer > 0) surgeTimer -= 0.05

      for (let i = 0; i < particlesCount; i++) {
        let speedMult = isWarping ? 15 : 1
        const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2
        
        const dxMouse = positions[ix] - lastMouseX
        const dyMouse = positions[iy] - (-lastMouseY)
        const distSqMouse = dxMouse * dxMouse + dyMouse * dyMouse

        if (distSqMouse < 100) {
          const distMouse = Math.sqrt(distSqMouse)
          const force = (10 - distMouse) * 0.02 * (Math.abs(mouseVelX) + Math.abs(mouseVelY))
          positions[ix] -= dxMouse * force
          positions[iy] -= dyMouse * force
          positions[ix] += Math.sin(Date.now() * 0.001 + i) * 0.05
        }

        positions[ix] += particlesVelocities[ix] * speedMult
        positions[iy] += particlesVelocities[iy] * speedMult
        positions[iz] += (particlesVelocities[iz] + (isWarping ? 0.5 : 0)) * speedMult

        if (Math.abs(positions[ix]) > 35) positions[ix] *= -0.9
        if (Math.abs(positions[iy]) > 35) positions[iy] *= -0.9
        if (Math.abs(positions[iz]) > 35) positions[iz] = (Math.random() - 0.5) * 60

        for (let j = i + 1; j < particlesCount; j++) {
          const jx = j * 3, jy = j * 3 + 1, jz = j * 3 + 2
          const dx = positions[ix] - positions[jx]
          const dy = positions[iy] - positions[jy]
          const dz = positions[iz] - positions[jz]
          const distSq = dx * dx + dy * dy + dz * dz
          
          if (distSq < (isWarping ? 200 : 64) && lineIdx < maxLines * 6) {
            linePositionsArr[lineIdx++] = positions[ix]
            linePositionsArr[lineIdx++] = positions[iy]
            linePositionsArr[lineIdx++] = positions[iz]
            linePositionsArr[lineIdx++] = positions[jx]
            linePositionsArr[lineIdx++] = positions[jy]
            linePositionsArr[lineIdx++] = positions[jz]
          }
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true
      linesGeometry.attributes.position.needsUpdate = true
      linesGeometry.setDrawRange(0, lineIdx / 3)

      linesMaterial.opacity = 0.2 + (surgeTimer * 0.5)
      linesMaterial.color.setHSL(0.66, 0.8, 0.5 + (surgeTimer * 0.3))

      const targetZ = 15 - (scrollProgress * 25)
      camera.position.z += (targetZ - camera.position.z) * 0.05

      if (isWarping) {
        camera.position.z -= 0.8
        if (camera.position.z < -20) camera.position.z = 15
        renderer.domElement.style.filter = 'blur(10px) brightness(2)'
      } else {
        renderer.domElement.style.filter = 'none'
      }
      scene.rotation.y += (mouseX * 0.05 - scene.rotation.y) * 0.05
      scene.rotation.x += (mouseY * 0.05 - scene.rotation.x) * 0.05
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', triggerPowerSurge)
      window.removeEventListener('scroll', onThreeScroll)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  // Data Streams (Matrix Rain) - Optimized with requestAnimationFrame and lower capped FPS
  useEffect(() => {
    const streamCanvas = dataStreamsRef.current
    if (!streamCanvas) return
    const sctx = streamCanvas.getContext('2d')
    let sw = streamCanvas.width = window.innerWidth
    let sh = streamCanvas.height = window.innerHeight
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*"
    const fSize = 14
    const cols = sw / fSize
    const drps = []
    for (let i = 0; i < cols; i++) drps[i] = 1

    let frameId
    let lastTime = 0
    const fps = 20 
    const interval = 1000 / fps

    const draw = (time) => {
      frameId = requestAnimationFrame(draw)
      if (time - lastTime < interval) return
      lastTime = time

      sctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
      sctx.fillRect(0, 0, sw, sh)
      sctx.fillStyle = '#6366f1'
      sctx.font = fSize + 'px monospace'
      for (let i = 0; i < drps.length; i++) {
        const t = chars.charAt(Math.floor(Math.random() * chars.length))
        sctx.fillText(t, i * fSize, drps[i] * fSize)
        if (drps[i] * fSize > sh && Math.random() > 0.975) drps[i] = 0
        drps[i]++
      }
    }
    frameId = requestAnimationFrame(draw)

    const onResize = () => {
      sw = streamCanvas.width = window.innerWidth
      sh = streamCanvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Particles.js (loaded via CDN in index.html)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#6366f1", "#ec4899", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 4, random: true },
            line_linked: { enable: true, distance: 150, color: "#64748b", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
          },
          interactivity: {
            detect_on: "window",
            events: { onhover: { enable: true, mode: ["grab", "bubble"] }, onclick: { enable: true, mode: "repulse" } },
            modes: { grab: { distance: 180, line_linked: { opacity: 0.8 } }, bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8, speed: 3 }, repulse: { distance: 200, duration: 0.4 } }
          },
          retina_detect: true
        })
      }
    }
    document.body.appendChild(script)
    return () => { if (document.body.contains(script)) document.body.removeChild(script) }
  }, [])

  const winnerModalShownRef = useRef(false)

  const showWinnerModalOnce = () => {
    if (!winnerModalShownRef.current) {
      winnerModalShownRef.current = true
      setWinnerModalOpen(true)
    }
  }

  const handlePreloaderDone = () => {
    setPreloaderDone(true)
    // Delay modal slightly to allow entrance animations to finish
    setTimeout(showWinnerModalOnce, 800)
  }

  // Automatic fallback trigger for the modal (if preloader stuck)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!preloaderDone) {
        showWinnerModalOnce()
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [preloaderDone])

  const openProjectModal = (index) => {
    setProjectModalData(projectData[index])
  }

  return (
    <>
      <Helmet defer={false}>
        <title>
          {activeSection === 'hero' ? 'Zeel Kundariya | Full-Stack Developer' : 
           `Zeel | ${activeSection === 'experience' ? 'Professional Journey' : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}`}
        </title>
        <meta name="description" content="Portfolio of Zeel Kundariya, a Full-Stack Developer based in Gandhinagar. Explore projects in React, Node.js, AI Logistics, and OCR-based Financial Automation." />
        <meta name="keywords" content="Zeel Kundariya, Full Stack Developer, React.js, Node.js, UI/UX Designer, Gandhinagar, Portfolio, Web Development, AIDTM Hackathon, Smart Expense Management" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeel-kundariya-portfolio.vercel.app/" />
        <meta property="og:title" content="Zeel Kundariya | Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Specializing in building high-performance, AI-integrated web applications with premium UI/UX design." />
        <meta property="og:image" content="https://zeel-kundariya-portfolio.vercel.app/profile.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zeel-kundariya-portfolio.vercel.app/" />
        <meta property="twitter:title" content="Zeel Kundariya | Full-Stack Developer Portfolio" />
        <meta property="twitter:description" content="Building the future of web with React, Node.js, and AI." />
        <meta property="twitter:image" content="https://zeel-kundariya-portfolio.vercel.app/profile.jpeg" />

        <link rel="canonical" href="https://zeel-kundariya-portfolio.vercel.app/" />
      </Helmet>

      <div className="font-sans antialiased text-slate-300 selection:bg-secondary selection:text-white overflow-x-hidden bg-transparent">
        {/* Three.js Background */}
        <canvas id="bg-canvas" ref={bgCanvasRef}></canvas>
        <canvas id="data-streams-canvas" ref={dataStreamsRef}></canvas>

        {/* Custom Cursor */}
        <CustomCursor />
 
        {/* Preloader */}
        <Preloader onComplete={handlePreloaderDone} />
 
        {/* Ghost Text */}
        <div className="ghost-text-container">
          <div className="ghost-text" ref={ghostTextRef}>ZEEL</div>
        </div>
 
        {/* Scroll Progress */}
        <div id="scroll-progress" ref={scrollProgressRef}></div>
 
        {/* Background Decoration */}
        <div className="fixed inset-0 z-[-5] bg-dark overflow-hidden">
          <div id="particles-js" className="absolute inset-0 z-0 pointer-events-none"></div>
          <div className="blob w-96 h-96 bg-primary/20 rounded-full -top-20 -left-20 mix-blend-screen opacity-50"></div>
          <div className="blob w-96 h-96 bg-secondary/20 rounded-full -bottom-20 -right-20 mix-blend-screen opacity-50" style={{ animationDelay: '2s' }}></div>
        </div>
 
        {/* Main Content Reveal Wrapper */}
        <div className={`transition-opacity duration-1000 ${preloaderDone ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar ref={navbarRef} />
 
          <main>
            <Hero />
            <About />
            <Skills />
            <Journey progressRef={journeyProgressRef} />
            <Projects projects={projectData} onProjectClick={openProjectModal} />
            <Certificates />
            <Contact />
            <Footer />
          </main>
        </div>

        {/* Modals */}
        <WinnerModal isOpen={winnerModalOpen} onClose={() => setWinnerModalOpen(false)} />
        <CommandPalette isOpen={cmdPaletteOpen} onClose={() => setCmdPaletteOpen(false)} />
        <ProjectModal data={projectModalData} onClose={() => setProjectModalData(null)} />

        {/* SVG Filters */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="liquid-filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" seed="1" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" id="liquid-map" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  )
}

export default App
