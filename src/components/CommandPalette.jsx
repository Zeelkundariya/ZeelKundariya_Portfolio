import { useState, useEffect, useRef } from 'react'
import { Search, User, Code, Briefcase, Mail, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const commands = [
  { section: 'Navigation', items: [
    { icon: <User className="w-5 h-5 text-primary" />, label: 'Go to About', action: 'scroll:#about' },
    { icon: <Code className="w-5 h-5 text-secondary" />, label: 'Go to Skills', action: 'scroll:#skills' },
    { icon: <Briefcase className="w-5 h-5 text-teal-400" />, label: 'Go to Projects', action: 'scroll:#projects' },
    { icon: <Mail className="w-5 h-5 text-pink-400" />, label: 'Contact Me', action: 'scroll:#contact' },
  ]},
  { section: 'Actions', items: [
    { icon: <Download className="w-5 h-5 text-green-400" />, label: 'Download Resume', action: 'link:resume.html' },
    { icon: <GithubIcon className="w-5 h-5 text-slate-300" />, label: 'View GitHub', action: 'link:https://github.com/Zeelkundariya' },
    { icon: <LinkedinIcon className="w-5 h-5 text-blue-400" />, label: 'View LinkedIn', action: 'link:https://www.linkedin.com/in/zeel-kundariya-bb18b5382' },
  ]},
]

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)

  const allItems = commands.flatMap(s => s.items)
  const filtered = allItems.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex(prev => (prev + 1) % filtered.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex(prev => (prev - 1 + filtered.length) % filtered.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        executeCommand(filtered[activeIndex])
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, filtered, activeIndex])

  const executeCommand = (item) => {
    if (!item) return
    onClose()
    const action = item.action
    if (action.startsWith('scroll:')) {
      const targetId = action.split(':')[1]
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
    } else if (action.startsWith('link:')) {
      const url = action.split('link:')[1]
      if (url.includes('.html')) {
        const a = document.createElement('a')
        a.href = url
        a.download = 'resume.html'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      } else {
        window.open(url, '_blank')
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className={`fixed inset-0 z-[2000000] bg-slate-950/80 backdrop-blur-xl flex items-start justify-center pt-[15vh] transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
         onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`w-full max-w-xl mx-4 bg-[#0b1120] border border-white/10 rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-8'}`}>
        <div className="flex items-center px-4 border-b border-slate-800">
          <Search className="w-5 h-5 text-slate-400" />
          <input ref={inputRef} type="text" value={query} onChange={e => { setQuery(e.target.value); setActiveIndex(0) }}
            className="w-full px-4 py-4 bg-transparent text-white focus:outline-none placeholder-slate-500 text-lg"
            placeholder="Type a command or search..." autoComplete="off" />
          <div className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400 font-medium cursor-pointer" onClick={onClose}>ESC</div>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {commands.map((section, si) => {
            const sectionItems = section.items.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
            if (sectionItems.length === 0) return null
            return (
              <div key={si}>
                <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mt-2">{section.section}</div>
                {sectionItems.map((item, ii) => {
                  const globalIndex = filtered.indexOf(item)
                  return (
                    <div key={ii}
                      className={`cmd-item px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-slate-800/50 ${globalIndex === activeIndex ? 'active' : ''}`}
                      onMouseEnter={() => setActiveIndex(globalIndex)}
                      onClick={() => executeCommand(item)}>
                      {item.icon}
                      <span className="text-slate-200">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
