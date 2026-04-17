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

          {/* Front of Card: Clean & Professional */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] glass-card p-10 flex flex-col justify-between border border-white/5 overflow-hidden transform-style-3d shadow-2xl">
            <div className="holo-grid absolute inset-0 pointer-events-none opacity-20"></div>

            <div className="relative z-10 space-y-6">
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

            <div className="relative z-10 flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest animate-pulse">
              <span>Hover to Flip</span>
              <Eye className="w-4 h-4" />
            </div>
          </div>

          {/* Back of Card: Professional 5-Image Story gallery */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[2.5rem] overflow-hidden bg-[#0b1120] border border-white/10 transform-style-3d cursor-pointer group/back"
               onClick={() => onClick && onClick(index)}>
            
            <div className="card-gallery absolute inset-0">
              {/* Invisible Hover Segments (Full Height) */}
              <div className="hover-segment seg-1 absolute top-0 left-0 w-[20%] h-full z-40"></div>
              <div className="hover-segment seg-2 absolute top-0 left-[20%] w-[20%] h-full z-40"></div>
              <div className="hover-segment seg-3 absolute top-0 left-[40%] w-[20%] h-full z-40"></div>
              <div className="hover-segment seg-4 absolute top-0 left-[60%] w-[20%] h-full z-40"></div>
              <div className="hover-segment seg-5 absolute top-0 left-[80%] w-[20%] h-full z-40"></div>
              
              {/* Story-Style Top Navigation Bars (Must be AFTER segments for ~ selector) */}
              <div className="gallery-nav absolute top-4 left-4 right-4 z-50 flex gap-1.5 px-2 pointer-events-none">
                <div className="nav-line nav-1 h-[2px] flex-1 bg-white/20 rounded-full transition-all duration-300"></div>
                <div className="nav-line nav-2 h-[2px] flex-1 bg-white/20 rounded-full transition-all duration-300"></div>
                <div className="nav-line nav-3 h-[2px] flex-1 bg-white/20 rounded-full transition-all duration-300"></div>
                <div className="nav-line nav-4 h-[2px] flex-1 bg-white/20 rounded-full transition-all duration-300"></div>
                <div className="nav-line nav-5 h-[2px] flex-1 bg-white/20 rounded-full transition-all duration-300"></div>
              </div>

              {project.galleryImgs.map((img, i) => (
                <img key={i} src={img} 
                  className={`gallery-img img-${i+1} absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
                  alt={`${project.title} ${i+1}`} 
                />
              ))}
              
              {/* Premium Overlay Hint - Now at the bottom to stay out of the way */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/back:opacity-100 transition-opacity flex items-end justify-center z-20 pointer-events-none pb-8">
                <div className="px-5 py-2 bg-primary/20 backdrop-blur-xl rounded-full border border-white/20 text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  Click for Full Details
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default function Projects({ projects, onProjectClick }) {
  const categories = ["Games", "Clones", "Full Stack", "Frontend"];
  
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
            Portfolio <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-slate-400">Categorized excellence in development.</p>
        </div>

        {categories.map((cat) => {
          const filteredProjects = projects.filter(p => p.category === cat);
          
          return (
            <div key={cat} className="mb-20" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-widest">{cat}</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {filteredProjects.map((project, i) => (
                    <ProjectCard 
                      key={project.title} 
                      project={project} 
                      index={i} 
                      onClick={() => onProjectClick(projects.indexOf(project))} 
                    />
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center border-2 border-dashed border-white/5 rounded-3xl">
                  <p className="text-slate-500 font-medium italic">Project entries coming soon to this category...</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  )
}
