import { X, ExternalLink } from 'lucide-react'
import { GithubIcon, YoutubeIcon } from './BrandIcons'

export default function ProjectModal({ data, onClose }) {
  if (!data) return null

  return (
    <div className={`fixed inset-0 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 z-[2000000] transition-all duration-500 ${data ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
         onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`relative w-full max-w-5xl bg-[#0b1120] border border-white/10 rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row transition-all duration-500 transform ${data ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        {/* Close Button */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md">
          <X className="w-5 h-5" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 md:hidden"></div>
          <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {data.tags?.map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-medium">{tag}</span>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">{data.title}</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow">{data.desc}</p>

          <div className="flex flex-wrap gap-4 mt-auto">
            {data.live && data.live !== '#' && (
              <a href={data.live} target="_blank" rel="noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            <a href={data.repo} target="_blank" rel="noreferrer"
              className="px-6 py-3 rounded-full border border-slate-600 text-white font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
              <GithubIcon className="w-4 h-4" /> Source Code
            </a>
            {data.demo && (
              <a href={data.demo} target="_blank" rel="noreferrer"
                className="px-6 py-3 rounded-full border border-red-500/50 text-white font-medium hover:bg-red-500/20 transition-colors flex items-center gap-2">
                <YoutubeIcon className="w-4 h-4 text-red-500" /> YouTube Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
