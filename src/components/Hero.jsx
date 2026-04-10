import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    // Simple typed effect
    const strings = ['Web Developer', 'UI/UX Designer', 'Computer Engineer', 'Problem Solver']
    let strIdx = 0, charIdx = 0, deleting = false
    const el = typedRef.current
    if (!el) return
    let timeoutId

    const type = () => {
      const current = strings[strIdx]
      if (!deleting) {
        charIdx++
        el.textContent = current.slice(0, charIdx)
        if (charIdx >= current.length) {
          deleting = true
          timeoutId = setTimeout(type, 2000)
          return
        }
        timeoutId = setTimeout(type, 50)
      } else {
        charIdx--
        el.textContent = current.slice(0, charIdx)
        if (charIdx <= 0) {
          deleting = false
          strIdx = (strIdx + 1) % strings.length
          timeoutId = setTimeout(type, 300)
          return
        }
        timeoutId = setTimeout(type, 30)
      }
    }
    type()
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-x-hidden">
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center justify-items-center">
        <div className="order-2 md:order-1 text-center md:text-left w-full flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 mx-auto md:mx-0 shadow-inner" data-aos="fade-down" data-aos-delay="0">
            <span className="text-secondary animate-wiggle">👋</span>
            <span className="text-slate-300 font-semibold text-xs md:text-sm tracking-wide uppercase">Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] font-display" data-aos="fade-up" data-aos-delay="100">
            Hi, I'm <br />
            <span className="text-gradient inline-block mt-2 font-black italic tracking-tight" style={{ filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.3))' }}>
              Zeel Kundariya
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-400 mb-8 font-medium">
            I am a <span ref={typedRef} className="text-white font-bold decoration-primary decoration-4">Web Developer</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 mb-12 leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="300">
            I design and build <span className="text-white">responsive</span>, <span className="text-white">user-friendly</span>, and <span className="text-white">performant</span> web applications. Turning complex problems into elegant, beautiful solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center" data-aos="fade-up" data-aos-delay="400">
            <a href="#projects" className="group w-full sm:w-auto px-10 py-4 bg-white text-dark font-black rounded-full hover:bg-slate-100 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 magnetic-btn text-lg">
              View Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-slate-700 text-white font-bold hover:bg-slate-800 hover:border-slate-500 transition-all flex items-center justify-center magnetic-btn text-lg">
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-slate-400" data-aos="fade-up" data-aos-delay="500">
            <a href="https://github.com/Zeelkundariya" target="_blank" rel="noreferrer" className="hover:text-primary hover:scale-110 transition-all magnetic-btn">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/zeel-kundariya-bb18b5382" target="_blank" rel="noreferrer" className="hover:text-primary hover:scale-110 transition-all magnetic-btn">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="https://x.com/ZeelKundariya" target="_blank" rel="noreferrer" className="hover:text-primary hover:scale-110 transition-all magnetic-btn">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/Zeelkundariya/" target="_blank" rel="noreferrer" className="hover:text-[#FFA116] hover:scale-110 transition-all magnetic-btn group" title="LeetCode">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-slate-400 group-hover:text-[#FFA116] transition-colors">
                <path d="M16.105 18.567l.598-1.554a6.376 6.376 0 1 1-11.474-6.587l3.334-3.33a3.3 3.3 0 1 1 4.667 4.668l-2.254 2.253a6.376 6.376 0 0 1 5.184 2.585zm-1.636-5.87l-.17-.171a1.301 1.301 0 1 0-1.837-1.838l-2.254 2.253a6.376 6.376 0 0 0 5.184 2.586l-.598 1.553a6.376 6.376 0 1 1-11.474-6.587l3.334-3.33a3.3 3.3 0 0 1 4.666 4.666l-.66-.666a1.3 1.3 0 1 0-1.838-1.838z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center mb-4 md:mb-0 w-full" data-aos="zoom-in" data-aos-duration="1200">
          <div className="relative w-full max-w-[320px] aspect-[4/5] md:max-w-[440px] md:aspect-square animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden glass-card shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <img src="/profile.jpeg" alt="Zeel Kundariya" className="w-full h-full object-cover object-top opacity-90 transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-6 left-6 z-20 glass px-5 py-4 rounded-2xl flex items-center gap-4 animate-float shadow-xl border border-white/10" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shadow-inner">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Developer</p>
                  <p className="text-white font-bold text-lg leading-tight tracking-tight">Full Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="text-primary w-5 h-5" />
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  )
}
