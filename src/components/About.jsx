import { Code, Palette, Download, Code2 } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Blob */}
      <div className="blob w-[500px] h-[500px] bg-primary/10 rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full separator-grow shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            data-aos="zoom-in"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group" data-aos="fade-right">
            {/* Floating Image Container */}
            <div className="animate-float relative">
              {/* Rotating Ring */}
              <div className="absolute -inset-12 border border-dashed border-slate-700/30 rounded-full animate-spin-very-slow pointer-events-none hidden md:block"></div>

              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden glass-card shadow-2xl border border-white/5">
                <img src="/profile.jpeg" alt="Zeel Kundariya"
                  className="w-full h-[400px] md:h-[550px] object-cover object-top opacity-90 transition-transform duration-1000 group-hover:scale-110" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-4 glass px-6 py-5 rounded-2xl flex items-center gap-5 animate-float shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10"
                style={{ animationDuration: '4s' }}>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-inner">
                  <Code2 className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-black">Developer</p>
                  <p className="text-white font-bold text-xl leading-tight">Full Stack</p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="mt-12 md:mt-0 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.2]" data-aos="fade-left" data-aos-delay="100">
              <span className="text-secondary">Passionate</span> about creating <br className="hidden md:block" />
              <span className="px-4 bg-primary/20 border-l-4 border-primary inline-block mt-2">impactful digital experiences</span>.
            </h3>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed font-medium" data-aos="fade-left" data-aos-delay="200">
              Hello! I'm Zeel, a computer science student and <span className="text-white font-bold decoration-secondary/30 decoration-2 underline underline-offset-4">full-stack developer</span> based in India.
              I have a strong foundation in both <span className="text-white font-bold">frontend</span> and <span className="text-white font-bold">backend</span> development.
              I enjoy turning <span className="px-2 bg-slate-800 text-white rounded">complex ideas</span> into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed font-medium" data-aos="fade-left" data-aos-delay="300">
              My journey in tech started with curiosity and has grown into a relentless pursuit of excellence.
              When I'm not coding, you can find me exploring <span className="text-white font-bold">new technologies</span>, participating in hackathons, or gaming.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
                data-aos="zoom-in" data-aos-delay="400">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Code className="text-primary w-5 h-5 group-hover:animate-spin-slow" /> Development
                </h4>
                <p className="text-sm text-slate-400">High quality code with modern practices.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/20 cursor-pointer group"
                data-aos="zoom-in" data-aos-delay="500">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Palette className="text-secondary w-5 h-5 group-hover:animate-wiggle" /> Design
                </h4>
                <p className="text-sm text-slate-400">User-centric and beautiful interfaces.</p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="600">
              <a href="/resume.html" download
                className="inline-flex items-center text-primary font-bold hover:text-white transition-colors group magnetic-btn">
                Download Resume <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
