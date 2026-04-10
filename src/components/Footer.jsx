import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-slate-500 font-medium">© 2026 Zeel Kundariya. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://leetcode.com/u/Zeelkundariya/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#FFA116] transition-colors text-sm font-bold">LeetCode</a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Terms of Service</a>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-primary transition-all magnetic-btn">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
