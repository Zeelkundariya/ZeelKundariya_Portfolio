import { useState } from 'react'
import { Award, Trophy, Presentation, Sparkles, Cloud, Brain, BarChart3, TrendingUp, Binary, ShoppingCart, Building2, Code2 } from 'lucide-react'
import { GithubIcon, FigmaIcon } from './BrandIcons'

const certificates = [
  // HACKATHONS (Offline)
  { 
    category: 'hackathon', 
    type: 'offline', 
    title: '1st Runner-up', 
    desc: 'RepoReboot event at i.Fest\'25. Organized by IEEE SB DAIICT.', 
    img: '/reporeboot.jpg', 
    galleryImgs: ['/reporeboot.jpg', '/Zeelkundariyawinner.jpg.jpeg', '/runner_up_1.jpg', '/runner_up_2.jpg'],
    icon: <Award className="w-8 h-8" />, 
    borderColor: '#cbd5e1', 
    bgColor: '#94a3b8', 
    btnClass: 'bg-slate-300 text-black hover:bg-white', 
    btnText: 'View Award', 
    backLabel: 'RepoReboot 2025', 
    backIcon: <Award className="w-5 h-5" style={{color:'#cbd5e1'}} /> 
  },
  { 
    category: 'hackathon', 
    type: 'offline', 
    title: '3rd Runner-up', 
    desc: 'Hack Innovate 2026 AI/OR Hackathon by Adani Institute (AIDTM).', 
    img: '/hackinnovate.png', 
    galleryImgs: ['/hackinnovate.png', '/runner_up_3rd_2.jpg', '/runner_up_3rd_3.jpg', '/runner_up_3rd_4.jpg'],
    icon: <Trophy className="w-8 h-8" />, 
    borderColor: '#d97706', 
    bgColor: '#d97706', 
    btnClass: 'bg-amber-600 text-white hover:bg-amber-500', 
    btnText: 'View Certificate', 
    backLabel: 'Hack Innovate 2026', 
    backIcon: <Trophy className="w-5 h-5" style={{color:'#f59e0b'}} /> 
  },
  { 
    category: 'hackathon', 
    type: 'offline', 
    title: 'Tech Expo 2026', 
    desc: 'Exhibited "Expenses Management" project at Parul University.', 
    img: '/techexpo.png', 
    galleryImgs: ['/techexpo.png', '/tech_expo_2.jpg', '/tech_expo_3.jpg', '/tech_expo_4.jpg'],
    icon: <Presentation className="w-8 h-8" />, 
    borderColor: '#ef4444', 
    bgColor: '#f87171', 
    btnClass: 'bg-red-500 text-white hover:bg-red-400', 
    btnText: 'View Credential', 
    backLabel: 'Participation', 
    backIcon: <Award className="w-5 h-5" style={{color:'#f87171'}} /> 
  },
  { 
    category: 'hackathon', 
    type: 'offline', 
    title: 'GitHub Portfolio Analyzer', 
    desc: 'Project innovation award for automated recruitment analytics at Hack the Spring\'26, GEC Gandhinagar.', 
    img: '/Zeel kundariya GitHub_Portfolio_Analyzer.png', 
    galleryImgs: ['/Zeel kundariya GitHub_Portfolio_Analyzer.png', '/github_analyzer_offline_2.jpg', '/github_analyzer_offline_3.jpg', '/github_analyzer_offline_4.jpg'],
    icon: <BarChart3 className="w-8 h-8" />, 
    borderColor: '#a855f7', 
    bgColor: '#c084fc', 
    btnClass: 'bg-purple-500 text-white hover:bg-purple-400', 
    btnText: 'View Credential', 
    backLabel: 'Hack the Spring', 
    backIcon: <GithubIcon className="w-5 h-5" style={{color:'#c084fc'}} /> 
  },
  // ONLINE HACKATHONS
  { category: 'hackathon', type: 'online', title: 'Emotion-Aware Encryption', desc: 'Successfully participated in the Emotion-Aware Encryption Hackathon.', img: '/Zeel Kundariya Emotion-Aware_Encryption_Hackathon.png', icon: <Brain className="w-8 h-8" />, borderColor: '#ec4899', bgColor: '#f472b6', btnClass: 'bg-pink-500 text-white hover:bg-pink-400', btnText: 'View Award', backLabel: 'Security/AI', backIcon: <Award className="w-5 h-5" style={{color:'#f472b6'}} /> },
  { category: 'hackathon', type: 'online', title: 'Code Matrix: Genesis', desc: 'Certificate of Excellence for participation in Codematrix: genesis Hackathon by GDG DR AITD, Kanpur.', img: '/code_matrix_certificate.jpg', icon: <Binary className="w-8 h-8" />, borderColor: '#06b6d4', bgColor: '#22d3ee', btnClass: 'bg-cyan-500 text-white hover:bg-cyan-400', btnText: 'View Award', backLabel: 'GDG Hackathon', backIcon: <Binary className="w-5 h-5" style={{color:'#22d3ee'}} /> },
  // ONLINE COURSES
  { category: 'online', type: 'online', title: 'Generative AI Mastermind', desc: 'Mastered key concepts in GenAI and Prompt Engineering.', img: '/genai.png', icon: <Sparkles className="w-8 h-8" />, borderColor: '#22c55e', bgColor: '#4ade80', btnClass: 'bg-green-500 text-white hover:bg-green-400', btnText: 'View Credential', backLabel: 'Completion', backIcon: <Award className="w-5 h-5" style={{color:'#4ade80'}} /> },
  { category: 'online', type: 'online', title: 'GitHub Copilot Fundamentals', desc: 'AI-assisted coding proficiency with Microsoft & Simplilearn.', img: '/githubcopilot.png', icon: <GithubIcon className="w-8 h-8" />, borderColor: '#3b82f6', bgColor: '#60a5fa', btnClass: 'bg-blue-500 text-white hover:bg-blue-400', btnText: 'View Credential', backLabel: 'Fundamentals', backIcon: <Code2 className="w-5 h-5" style={{color:'#60a5fa'}} /> },
  { category: 'online', type: 'online', title: 'Innovating with Google Cloud AI', desc: 'Demonstrated initiative and commitment to deepening skills in AI-assisted coding.', img: '/googlecloudai.png', icon: <Cloud className="w-8 h-8" />, borderColor: '#0ea5e9', bgColor: '#38bdf8', btnClass: 'bg-sky-500 text-white hover:bg-sky-400', btnText: 'View Credential', backLabel: 'SkillUp', backIcon: <Cloud className="w-5 h-5" style={{color:'#38bdf8'}} /> },
  { category: 'online', type: 'online', title: 'Web Analytics', desc: 'Mastered web traffic analysis and data-driven insights.', img: '/webanalytics.png', icon: <TrendingUp className="w-8 h-8" />, borderColor: '#f97316', bgColor: '#fb923c', btnClass: 'bg-orange-500 text-white hover:bg-orange-400', btnText: 'View Credential', backLabel: 'Data Insights', backIcon: <TrendingUp className="w-5 h-5" style={{color:'#fb923c'}} /> },
  { category: 'online', type: 'online', title: 'AI Shopping Ads', desc: 'Certification in AI-driven advertising and consumer analytics.', img: '/tech_generic_2_1775060512166.png', icon: <ShoppingCart className="w-8 h-8" />, borderColor: '#10b981', bgColor: '#34d399', btnClass: 'bg-emerald-500 text-white hover:bg-emerald-400', btnText: 'View PDF', backLabel: 'Google AI', backIcon: <Sparkles className="w-5 h-5" style={{color:'#34d399'}} /> },
  { category: 'online', type: 'online', title: 'Figma UI/UX Design', desc: 'Proficiency in modern interface design and prototyping tools.', img: '/tech_generic_4_1775060561865.png', icon: <FigmaIcon className="w-8 h-8" />, borderColor: '#fb923c', bgColor: '#fb923c', btnClass: 'bg-orange-500 text-white hover:bg-orange-400', btnText: 'View PDF', backLabel: 'Design', backIcon: <FigmaIcon className="w-5 h-5" style={{color:'#fb923c'}} /> },
  { category: 'online', type: 'online', title: 'Google Gemini Mastery', desc: 'Mastered the foundations of Google\'s most capable AI model.', img: '/tech_generic_5_1775060584725.png', icon: <Sparkles className="w-8 h-8" />, borderColor: '#60a5fa', bgColor: '#60a5fa', btnClass: 'bg-blue-500 text-white hover:bg-blue-400', btnText: 'View PDF', backLabel: 'Generative AI', backIcon: <Sparkles className="w-5 h-5" style={{color:'#60a5fa'}} /> },
  
  // OFFLINE COURSES/SPECS
  { 
    category: 'offline', 
    type: 'offline', 
    title: 'Tata Professional Series', 
    desc: 'Enterprise-grade certification in technical and professional skills.', 
    img: '/tech_generic_6_1775060604458.png', 
    galleryImgs: ['/tech_generic_6_1775060604458.png', '/tech_generic_1_1775060487362.png', '/tech_generic_2_1775060512166.png', '/tech_generic_3_1775060544286.png'],
    icon: <Building2 className="w-8 h-8" />, 
    borderColor: '#64748b', 
    bgColor: '#94a3b8', 
    btnClass: 'bg-slate-600 text-white hover:bg-slate-500', 
    btnText: 'View PDF', 
    backLabel: 'Professional', 
    backIcon: <Award className="w-5 h-5" style={{color:'#94a3b8'}} /> 
  },
  { 
    category: 'offline', 
    type: 'offline', 
    title: 'Coding Specialization', 
    desc: 'Certified specialization in data structures and advanced coding logic.', 
    img: '/tech_generic_3_1775060544286.png', 
    galleryImgs: ['/tech_generic_3_1775060544286.png', '/tech_generic_4_1775060561865.png', '/tech_generic_5_1775060584725.png', '/tech_generic_6_1775060604458.png'],
    icon: <Code2 className="w-8 h-8" />, 
    borderColor: '#ef4444', 
    bgColor: '#f87171', 
    btnClass: 'bg-red-500 text-white hover:bg-red-400', 
    btnText: 'View PDF', 
    backLabel: 'Expertise', 
    backIcon: <Trophy className="w-5 h-5" style={{color:'#f87171'}} /> 
  },
]

function CertificateCard({ cert, i }) {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className="certificate-card group perspective-1000 h-[400px] md:h-[450px] cursor-pointer" data-aos="fade-up" data-aos-delay={i * 100}>
      <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl rounded-2xl">
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-slate-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center glass-card"
             style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: `${cert.borderColor}80` }}>
          <div className="p-3 rounded-full mb-4" style={{ background: `${cert.bgColor}33`, color: cert.bgColor }}>
            {cert.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
          <p className="text-slate-300 mb-6 line-clamp-2">{cert.desc}</p>
          <a href={cert.img} target="_blank" rel="noreferrer" className={`px-6 py-2 rounded-full ${cert.btnClass} font-bold transition-colors inline-block`}>{cert.btnText}</a>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-slate-800"
             style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: `${cert.borderColor}4D` }}>
          
          {cert.galleryImgs ? (
            <div className="w-full h-full relative group/gallery overflow-hidden">
              {/* Hover Segments */}
              <div className="absolute inset-0 z-50 flex">
                {cert.galleryImgs.map((_, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveImg(idx)}
                    className="flex-1 h-full cursor-pointer"
                  />
                ))}
              </div>

              {/* Gallery Nav Dots */}
              <div className="absolute top-4 left-4 right-4 z-[60] flex gap-1.5">
                {cert.galleryImgs.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${activeImg === idx ? 'bg-white shadow-[0_0_10px_white]' : 'bg-white/20'}`}
                  />
                ))}
              </div>

              {/* Photos */}
              {cert.galleryImgs.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === idx ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-110'}`} 
                  alt={`${cert.title} ${idx+1}`} 
                />
              ))}

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[70]">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  {cert.backIcon} {cert.backLabel}
                </h3>
              </div>
            </div>
          ) : (
            <>
              <img src={cert.img} className="w-full h-full object-cover" alt={cert.title} />
              <div className="holo-overlay"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  {cert.backIcon} {cert.backLabel}
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  const [filter, setFilter] = useState('all')
  const [subFilter, setSubFilter] = useState('all')
  const [expanded, setExpanded] = useState(false)

  const filtered = certificates.filter(c => {
    if (filter === 'all') return true
    if (filter === 'course') return c.category === 'online' || c.category === 'offline'
    if (filter === 'hackathon') {
      if (c.category !== 'hackathon') return false
      if (subFilter === 'all') return true
      return c.type === subFilter
    }
    return true
  })
  
  const visible = expanded ? filtered : filtered.slice(0, 4)

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display uppercase tracking-tight">Awards & <span className="text-gradient">Certificates</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8 font-medium">Recognition of my dedication and technical expertise across multiple domains.</p>
          
          {/* Main Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { id: 'all', label: 'All Achievements' },
              { id: 'hackathon', label: 'Hackathons' },
              { id: 'course', label: 'Courses' }
            ].map(f => (
              <button key={f.id} onClick={() => { setFilter(f.id); setSubFilter('all'); setExpanded(false) }}
                className={`filter-btn ${filter === f.id ? 'active' : ''} px-8 py-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-primary transition-all font-bold text-sm shadow-xl`}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Sub-Filters (Only for Hackathons) */}
          <div className={`flex justify-center gap-3 transition-all duration-500 overflow-hidden ${filter === 'hackathon' ? 'max-h-20 opacity-100 mb-12' : 'max-h-0 opacity-0 mb-0'}`}>
            {[
              { id: 'all', label: 'All Hackathons' },
              { id: 'offline', label: 'Offline' },
              { id: 'online', label: 'Online' }
            ].map(sf => (
              <button key={sf.id} onClick={() => { setSubFilter(sf.id); setExpanded(false) }}
                className={`px-5 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${subFilter === sf.id ? 'bg-primary text-white' : 'bg-slate-800 text-slate-500 hover:text-white'}`}>
                {sf.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visible.map((cert, i) => (
            <CertificateCard key={i} cert={cert} i={i} />
          ))}
        </div>

        {filtered.length > 4 && (
          <div className="mt-16 text-center">
            <button onClick={() => setExpanded(!expanded)}
              className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
              {expanded ? 'View Less' : 'View More Certificates'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
