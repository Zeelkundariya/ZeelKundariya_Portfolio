import { useRef } from 'react'
import { ScrollText, Eye } from 'lucide-react'
import { YoutubeIcon } from './BrandIcons'

function ProjectCard({ project, index, onClick }) {
  const auraRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!auraRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    auraRef.current.style.left = (e.clientX - rect.left) + 'px'
    auraRef.current.style.top = (e.clientY - rect.top) + 'px'
    auraRef.current.style.opacity = '1'
  }

  const handleMouseLeave = () => {
    if (auraRef.current) auraRef.current.style.opacity = '0'
  }

  return (
    <div className="project-container liquid-image-container h-auto md:h-[450px]"
         data-aos="zoom-in" data-aos-delay={index * 100}
         onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="project-card h-[400px] md:h-full">
        {/* Dynamic Cursor Aura */}
        <div ref={auraRef} className="project-aura" style={{'--aura-color': project.auraColor}}></div>
        <div className="scanning-bar" style={{'--aura-color': project.scanColor}}></div>

        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] glass-card p-10 flex flex-col justify-between border border-white/5 overflow-hidden transform-style-3d shadow-2xl">
          <div className="holo-grid absolute inset-0 pointer-events-none opacity-20"></div>

          <div className="relative z-10 space-y-6">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i}
                  className={`px-4 py-1.5 text-[10px] rounded-lg bg-${project.tagColors[i]?.bg || 'primary'}/10 text-${project.tagColors[i]?.text || 'primary'} border border-${project.tagColors[i]?.bg || 'primary'}/20 font-black uppercase tracking-[0.15em]`}>
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{project.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">{project.desc}</p>
            </div>
          </div>

          <div className="relative z-10 flex items-center pt-6">
            <a href={project.repo} target="_blank" rel="noreferrer"
               className="text-white hover:text-primary text-sm font-bold flex items-center gap-3 transition-all group/cta">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/cta:bg-primary/20 group-hover/cta:border-primary/50 transition-all">
                <ScrollText className="w-5 h-5 text-white/70 group-hover/cta:text-primary transition-colors" />
              </div>
              <span className="tracking-wide">Details</span>
            </a>
          </div>
        </div>

        {/* Back */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-slate-800 border-2 border-${project.borderColor}/30 transform-style-3d text-center p-0`}>
          <div className="scanning-bar" style={{'--aura-color': project.scanColor}}></div>
          <div className="card-gallery group/view">
            <div className="hover-segment seg-1"></div>
            <div className="hover-segment seg-2"></div>
            <div className="hover-segment seg-3"></div>
            <div className="hover-segment seg-4"></div>
            <div className="hover-segment seg-5"></div>
            <div className="gallery-nav">
              <div className="nav-dot nav-1"></div>
              <div className="nav-dot nav-2"></div>
              <div className="nav-dot nav-3"></div>
              <div className="nav-dot nav-4"></div>
              <div className="nav-dot nav-5"></div>
            </div>
            {project.galleryImgs.map((img, i) => (
              <img key={i} src={img} className={`gallery-img img-${i+1}`} alt={`${project.title} ${i+1}`} />
            ))}
            <div className="absolute inset-0 z-[15] pointer-events-none flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="px-8 py-3 bg-primary/20 backdrop-blur-xl rounded-full border-2 border-white/30 shadow-2xl scale-90 pointer-events-auto cursor-pointer"
                   onClick={() => onClick && onClick(index)}>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Eye className="text-primary w-5 h-5" /> View Details
                </h3>
              </div>
              <a href="https://www.youtube.com/@ZeelKundariya" target="_blank" rel="noreferrer"
                 className="px-6 py-2 bg-red-500/20 backdrop-blur-xl rounded-full border-2 border-white/30 shadow-2xl scale-90 pointer-events-auto hover:bg-red-500/40 transition-all flex items-center gap-2 text-white text-xs font-bold">
                <YoutubeIcon className="w-4 h-4 text-red-500" /> Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ projects, onProjectClick }) {
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400">Some of my best work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} onClick={onProjectClick} />
          ))}
        </div>
      </div>
    </section>
  )
}
