import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async';




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
  { title: "Expense Management", desc: "Advanced OCR financial workflow automation.", img: "/expense_management_cover.png", tags: ['FinTech', 'OCR'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/expense_management_cover.png", "/expense_management_1_1775060321664.png", "/tech_generic_1_1775060487362.png", "/tech_generic_2_1775060512166.png", "/tech_generic_3_1775060544286.png"], auraColor: "rgba(168, 85, 247, 0.3)", scanColor: "#a855f7", borderColor: "primary", tagColors: [{ bg: "pink-500", text: "pink-500" }, { bg: "purple-500", text: "purple-500" }], hoverColor: "primary" },
  { title: "Adaptive Learning", desc: "AI curriculum adaptation via metrics.", img: "/adaptive_learning_cover.png", tags: ['EdTech', 'AI/ML'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/adaptive_learning_cover.png", "/adaptive_learning_1_1775060342759.png", "/tech_generic_4_1775060561865.png", "/tech_generic_5_1775060584725.png", "/tech_generic_6_1775060604458.png"], auraColor: "rgba(59, 130, 246, 0.3)", scanColor: "#3b82f6", borderColor: "secondary", tagColors: [{ bg: "green-500", text: "green-500" }, { bg: "blue-500", text: "blue-500" }], hoverColor: "secondary" },
  { title: "RepoReboot", desc: "DevOps orchestration & optimization for enterprise-scale infrastructure management.", img: "/reporeboot_cover.png", tags: ['DevOps', 'Automation'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/reporeboot_cover.png", "/reporeboot_1_1775060362622.png", "/tech_generic_1_1775060487362.png", "/tech_generic_4_1775060561865.png", "/tech_generic_3_1775060544286.png"], auraColor: "rgba(20, 184, 166, 0.3)", scanColor: "#14b8a6", borderColor: "teal-500", tagColors: [{ bg: "teal-500", text: "teal-500" }, { bg: "indigo-500", text: "indigo-500" }], hoverColor: "teal-400" },
  { title: "AIDTM Hackathon", desc: "AI logistics routing solution developed for global supply chain optimization challenges.", img: "/hackathon_innovation_cover.png", tags: ['Hackathon', 'Innovation'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/hackathon_innovation_cover.png", "/hackathon_innovation_1_1775060464146.png", "/tech_generic_1_1775060487362.png", "/tech_generic_2_1775060512166.png", "/tech_generic_6_1775060604458.png"], auraColor: "rgba(236, 72, 153, 0.3)", scanColor: "#ec4899", borderColor: "pink-500", tagColors: [{ bg: "pink-500", text: "pink-500" }, { bg: "orange-500", text: "orange-500" }], hoverColor: "pink-500" },
  { title: "GitHub Analyzer", desc: "Recruiter-friendly profile analytics, transforming complex developer data into actionable hiring insights.", img: "/github_analyzer_cover.png", tags: ['GitHub', 'HR Tech'], live: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", repo: "https://github.com/Zeelkundariya/Hackathon-projects-all.git", demo: "https://www.youtube.com/@ZeelKundariya", galleryImgs: ["/github_analyzer_cover.png", "/github_portfolio_analyzer_1_1775060421953.png", "/tech_generic_1_1775060487362.png", "/tech_generic_2_1775060512166.png", "/tech_generic_3_1775060544286.png"], auraColor: "rgba(99, 102, 241, 0.3)", scanColor: "#6366f1", borderColor: "indigo-500", tagColors: [{ bg: "indigo-500", text: "indigo-500" }, { bg: "purple-500", text: "purple-500" }], hoverColor: "indigo-400" },
]

function App() {
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

  // Scroll progress + ghost text parallax + journey progress
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollTop / scrollHeight) * 100

      const progressEl = document.getElementById('scroll-progress')
      if (progressEl) progressEl.style.width = scrolled + '%'

      const ghostText = document.getElementById('ghost-text')
      if (ghostText) ghostText.style.transform = `rotate(-5deg) translateX(${scrollTop * 0.3}px)`

      // Journey progress
      const journeyProgress = document.getElementById('journey-progress')
      const experienceSection = document.getElementById('experience')
      if (journeyProgress && experienceSection) {
        const rect = experienceSection.getBoundingClientRect()
        const sectionHeight = experienceSection.offsetHeight
        const scrollPos = -rect.top
        const progress = Math.max(0, Math.min(100, (scrollPos / (sectionHeight - 400)) * 100))
        journeyProgress.style.height = progress + '%'
      }

      // Milestone activation
      document.querySelectorAll('.milestone-node').forEach(node => {
        const nodeRect = node.getBoundingClientRect()
        if (nodeRect.top < window.innerHeight * 0.7) {
          node.classList.add('active')
        } else {
          node.classList.remove('active')
        }
      })

      // Navbar shadow
      const navbar = document.getElementById('navbar')
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('shadow-[0_10px_30px_rgba(0,0,0,0.5)]', 'bg-dark/80')
          navbar.classList.remove('bg-transparent')
        } else {
          navbar.classList.remove('shadow-[0_10px_30px_rgba(0,0,0,0.5)]', 'bg-dark/80')
          navbar.classList.add('bg-transparent')
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Clean URL Scroll Tracker (Intersection Observer)
  useEffect(() => {
    if (!preloaderDone) return

    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certificates', 'contact']
    const observerOptions = {
      root: null,
      threshold: 0.5,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const cleanPath = sectionId === 'hero' ? '/' : `/${sectionId}`
          
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

    let mouseX = 0, mouseY = 0, lastMouseX = 0, lastMouseY = 0, mouseVelX = 0, mouseVelY = 0, surgeTimer = 0

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
    document.addEventListener('mousemove', onMouseMove)

    window.triggerPowerSurge = () => { surgeTimer = 1.0 }
    document.addEventListener('mousedown', window.triggerPowerSurge)

    let scrollProgress = 0
    const onScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress = window.scrollY / totalScroll
    }
    window.addEventListener('scroll', onScroll)

    let animId
    function animate() {
      animId = requestAnimationFrame(animate)
      const positions = particlesGeometry.attributes.position.array
      const linePositions = []
      const isWarping = window.preloaderState?.isWarping || false

      mouseVelX *= 0.95
      mouseVelY *= 0.95
      if (surgeTimer > 0) surgeTimer -= 0.05

      for (let i = 0; i < particlesCount; i++) {
        let speedMult = isWarping ? 15 : 1
        const dxMouse = positions[i * 3] - lastMouseX
        const dyMouse = positions[i * 3 + 1] - (-lastMouseY)
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

        if (distMouse < 10) {
          const force = (10 - distMouse) * 0.02 * (Math.abs(mouseVelX) + Math.abs(mouseVelY))
          positions[i * 3] -= dxMouse * force
          positions[i * 3 + 1] -= dyMouse * force
          positions[i * 3] += Math.sin(Date.now() * 0.001 + i) * 0.05
        }

        positions[i * 3] += particlesVelocities[i * 3] * speedMult
        positions[i * 3 + 1] += particlesVelocities[i * 3 + 1] * speedMult
        positions[i * 3 + 2] += (particlesVelocities[i * 3 + 2] + (isWarping ? 0.5 : 0)) * speedMult

        if (Math.abs(positions[i * 3]) > 35) positions[i * 3] *= -0.9
        if (Math.abs(positions[i * 3 + 1]) > 35) positions[i * 3 + 1] *= -0.9
        if (Math.abs(positions[i * 3 + 2]) > 35) positions[i * 3 + 2] = (Math.random() - 0.5) * 60

        for (let j = i + 1; j < particlesCount; j++) {
          const dx = positions[i * 3] - positions[j * 3]
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
          if (dist < (isWarping ? 15 : 8)) {
            linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
            linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2])
          }
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true
      linesGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3))
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
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
      renderer.dispose()
    }
  }, [])

  // Data Streams (Matrix Rain)
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

    const interval = setInterval(() => {
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
    }, 50)

    return () => clearInterval(interval)
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
    <div className="font-sans antialiased text-slate-300 selection:bg-secondary selection:text-white overflow-x-hidden bg-transparent">
      <Helmet>
        <title>Zeel Kundariya | Full-Stack Developer & UI/UX Specialist</title>
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
      {/* Three.js Background */}
      <canvas id="bg-canvas" ref={bgCanvasRef}></canvas>
      <canvas id="data-streams-canvas" ref={dataStreamsRef}></canvas>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Preloader */}
      <Preloader onComplete={handlePreloaderDone} />

      {/* Ghost Text */}
      <div className="ghost-text-container">
        <div className="ghost-text" id="ghost-text">ZEEL</div>
      </div>

      {/* Scroll Progress */}
      <div id="scroll-progress"></div>

      {/* Background Decoration */}
      <div className="fixed inset-0 z-[-5] bg-dark overflow-hidden">
        <div id="particles-js" className="absolute inset-0 z-0 pointer-events-none"></div>
        <div className="blob w-96 h-96 bg-primary/20 rounded-full -top-20 -left-20 mix-blend-screen opacity-50"></div>
        <div className="blob w-96 h-96 bg-secondary/20 rounded-full -bottom-20 -right-20 mix-blend-screen opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content Reveal Wrapper */}
      <div className={`transition-all duration-1000 ${preloaderDone ? 'opacity-100' : 'opacity-0 scale-[0.98]'}`}>
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Journey />
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
  )
}

export default App
