import { useState, useEffect } from 'react'
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { GithubIcon, YoutubeIcon } from './BrandIcons'

export default function ProjectModal({ data, onClose }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  // Reset index when data changes
  useEffect(() => {
    setActiveImgIndex(0)
  }, [data])

  if (!data) return null

  const images = data.galleryImgs || [data.img]

  const nextImg = () => setActiveImgIndex((prev) => (prev + 1) % images.length)
  const prevImg = () => setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className={`fixed inset-0 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 z-[2000000] transition-all duration-500`}
         onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`relative w-full max-w-6xl bg-[#0b1120] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 transform scale-100 opacity-100`}>
        {/* Close Button */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md">
          <X className="w-5 h-5" />
        </button>

        {/* Image / Gallery Side */}
        <div className="w-full md:w-[55%] flex flex-col bg-black/20">
          <div className="relative flex-grow h-[300px] md:h-auto group">
            <img src={images[activeImgIndex]} alt={data.title} className="w-full h-full object-contain transition-all duration-500" />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="p-4 flex gap-3 overflow-x-auto no-scrollbar border-t border-white/5 bg-black/40">
              {images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImgIndex(i)}
                  className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${activeImgIndex === i ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-contain bg-black/50" alt="thumbnail" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Side */}
        <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col border-l border-white/5 bg-gradient-to-br from-slate-900/50 to-dark">
          <div className="flex flex-wrap gap-2 mb-6">
            {data.tags?.map((tag, i) => (
              <span key={i} className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg bg-primary/10 text-primary border border-primary/20">{tag}</span>
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight">{data.title}</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">{data.desc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
            {data.live && data.live !== '#' && (
              <a href={data.live} target="_blank" rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-black text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-3 active:scale-95">
                <ExternalLink className="w-5 h-5" /> Live Demo
              </a>
            )}
            <a href={data.repo} target="_blank" rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95">
              <GithubIcon className="w-5 h-5" /> Source
            </a>
            {data.demo && (
              <a href={data.demo} target="_blank" rel="noreferrer"
                className="sm:col-span-2 px-8 py-4 rounded-2xl border border-red-500/50 text-white font-black text-sm uppercase tracking-widest hover:bg-red-500/20 transition-all flex items-center justify-center gap-3 active:scale-95">
                <YoutubeIcon className="w-5 h-5 text-red-500" /> Watch Presentation
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
