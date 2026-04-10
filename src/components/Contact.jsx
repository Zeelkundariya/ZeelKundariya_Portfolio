import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetCodeIcon } from './BrandIcons'

export default function Contact() {
  const [formData, setFormData] = useState({ from_name: '', reply_to: '', message: '' })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus('')

    try {
      const res = await fetch('https://formspree.io/f/mjgpdrve', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ from_name: '', reply_to: '', message: '' })
        if (window.triggerPowerSurge) window.triggerPowerSurge()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
      setTimeout(() => setStatus(''), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display uppercase tracking-tighter">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">Have a question or want to work together? Let's initialize a connection.</p>
        </div>

        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <div className="signature-console">
            <div className="console-scanner"></div>
            <div className="grid md:grid-cols-2 gap-12 relative z-10 p-4 md:p-10">
              {/* Left: Contact Info */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-black text-white mb-4 italic tracking-tight">Let's Connect</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">I'm currently available for new opportunities and collaborations. I'll get back to you within 24 hours.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg border border-primary/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-widest leading-none mb-1">Email</p>
                      <p className="text-white font-black text-lg">zeelkundariya13@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-lg border border-secondary/20">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-widest leading-none mb-1">Location</p>
                      <p className="text-white font-black text-lg">Gujarat, India</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-800/50">
                  <p className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-6">Social Network</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/Zeelkundariya" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-primary transition-all group">
                      <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/zeel-kundariya-bb18b5382" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-primary transition-all group">
                      <LinkedinIcon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </a>
                    <a href="https://leetcode.com/u/Zeelkundariya/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-[#FFA116] transition-all group">
                      <LeetCodeIcon className="w-5 h-5 text-slate-400 group-hover:text-[#FFA116]" />
                    </a>
                    <a href="https://x.com/ZeelKundariya" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-primary transition-all group">
                      <TwitterIcon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Full Name</label>
                  <input type="text" value={formData.from_name} onChange={e => setFormData({...formData, from_name: e.target.value})}
                    placeholder="Enter your full name" required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-primary transition-all font-display font-medium" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Email Address</label>
                  <input type="email" value={formData.reply_to} onChange={e => setFormData({...formData, reply_to: e.target.value})}
                    placeholder="your.email@address.com" required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-primary transition-all font-display font-medium" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Your Message</label>
                  <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    rows="5" placeholder="Describe your project, inquiry, or how we can collaborate..." required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-primary transition-all font-display font-medium resize-none"></textarea>
                </div>
                <button type="submit" disabled={sending}
                  className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-xl hover:shadow-[0_10px_40px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-3 group text-sm tracking-[0.2em] mt-4">
                  {sending ? 'SENDING...' : 'SEND MESSAGE'} <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                {status && (
                  <div className="text-center text-sm font-bold mt-4">
                    {status === 'success' && <span className="text-green-500">✅ Message sent successfully! I will reach out soon.</span>}
                    {status === 'error' && <span className="text-red-500">❌ Oops! Something went wrong. Please try again.</span>}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
