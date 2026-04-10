import { X, Award, ExternalLink, FileText } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

export default function WinnerModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className={`fixed inset-0 z-[2000000] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
         onClick={onClose}>
      <div className={`relative w-full max-w-4xl bg-[#0b1120] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.2)] flex flex-col md:flex-row transition-all duration-500 transform ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-12 opacity-0'}`}
           onClick={e => e.stopPropagation()}>

        {/* Left Side: Achievement Visual */}
        <div className="md:w-[45%] bg-slate-900 p-8 flex flex-col items-center text-white relative border-r border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>

          <div className="text-center mb-6 relative z-10">
            <h5 className="text-[10px] font-bold font-display uppercase tracking-[0.3em] text-primary mb-2">IEEE SB DAIICT Presents</h5>
            <h3 className="text-2xl font-black font-display leading-tight tracking-tight mb-1 text-white">Repo Reboot Hackathon</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Innovation & Optimization Sprint '25</p>
          </div>

          <div className="relative w-full mb-8 group relative z-10">
            <h2 className="text-2xl font-black text-center mb-4 tracking-tighter text-gradient">TEAM REPO REBOOTERS</h2>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/10 transform transition-all duration-500 group-hover:scale-[1.03] group-hover:border-primary/50 bg-slate-800">
              <img src="/Zeelkundariyawinner.jpg.jpeg" alt="Repo Rebooster Winners" className="w-full h-auto object-contain max-h-[350px]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-primary/20 via-transparent to-white/10"></div>
            </div>
          </div>

          <div className="w-full py-3 bg-white/5 border border-white/10 text-white text-center font-bold text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl backdrop-blur-md relative z-10">
            <span className="text-slate-400">Status:</span> 1st Runner-up
          </div>
        </div>

        {/* Right Side: Project Details */}
        <div className="md:w-[55%] p-8 md:p-12 flex flex-col justify-between relative bg-slate-900/50">
          <button onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-slate-500 hover:text-white transition-all z-10">
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-black text-[10px] tracking-widest uppercase">
              🏆 Hackathon Winner
            </div>

            <div>
              <h2 className="text-3xl font-black text-white leading-tight mb-2">Repo Reboot '25</h2>
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-primary"></div>
                <span className="text-xl font-bold text-primary">Repo Rebooters</span>
              </div>
            </div>

            <div className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
              <span className="text-2xl">🥈</span>
              <span className="text-base font-bold text-white tracking-tight">2nd Rank (1st Runner-up)</span>
            </div>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
              Built <span className="text-white font-bold">Rupiya.app</span> — a high-performance system designed for repo optimization and workflow automation. Successfully tackled complex problem statements to secure the <span className="text-primary font-bold">Runner-up position</span>.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center gap-2">
                <Award className="w-3 h-3 text-orange-400" />
                <span className="text-[10px] font-black text-orange-400 uppercase">DA-IICT</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-2">
                <GithubIcon className="w-3 h-3 text-indigo-400" />
                <span className="text-[10px] font-black text-indigo-400 uppercase">Open Source</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <a href="https://github.com/Zeelkundariya/Royal_Rebooter" target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-primary hover:bg-primary-hover text-white font-black text-[10px] uppercase tracking-widest transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 group">
              GitHub Repo
              <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://drive.google.com/file/d/10kkVx9FaLl6tNsVXo0M71TVrDrD1IYKW/view?usp=sharing" target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black text-[10px] uppercase tracking-widest transition-all transform hover:-translate-y-1 group">
              Problem Statements
              <FileText className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
