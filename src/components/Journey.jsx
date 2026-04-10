export default function Journey() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-display tracking-tight">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg font-medium">
            A timeline of my education and professional experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto pl-12 md:pl-0">
          {/* Vertical Journey Line */}
          <div className="journey-line-container !left-6 md:!left-1/2">
            <div className="journey-line-progress" id="journey-progress"></div>
          </div>

          <div className="space-y-24">
            {/* Milestone 1 */}
            <div className="milestone-node relative flex flex-col md:items-center group active" data-aos="fade-up">
              <div className="absolute left-[-34px] md:left-1/2 md:transform md:-translate-x-1/2 top-4 w-6 h-6 bg-dark border-4 border-primary rounded-full z-30 shadow-[0_0_20px_rgba(99,102,241,0.5)] node-dot transition-all duration-500"></div>
              <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                <div className="glass-card p-8 rounded-3xl border border-white/5 group-hover:border-primary/50 transition-all duration-500">
                  <span className="text-primary font-black tracking-widest text-xs uppercase mb-2 block">2021 – 2023</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Metas Adventist International School, Vyara</h3>
                  <p className="text-slate-400 font-medium leading-relaxed uppercase tracking-widest text-[10px]">School Secondary Education</p>
                </div>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="milestone-node relative flex flex-col md:items-center group" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute left-[-34px] md:left-1/2 md:transform md:-translate-x-1/2 top-4 w-6 h-6 bg-dark border-4 border-slate-700 rounded-full z-30 node-dot transition-all duration-500"></div>
              <div className="w-full md:w-1/2 md:ml-auto md:pl-12">
                <div className="glass-card p-8 rounded-3xl border border-white/5 group-hover:border-secondary/50 transition-all duration-500">
                  <span className="text-secondary font-black tracking-widest text-xs uppercase mb-2 block">2023 – 2025</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Khyati World School, Ahmedabad</h3>
                  <p className="text-slate-400 font-medium leading-relaxed uppercase tracking-widest text-[10px]">Higher Secondary Education</p>
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="milestone-node relative flex flex-col md:items-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute left-[-34px] md:left-1/2 md:transform md:-translate-x-1/2 top-4 w-6 h-6 bg-dark border-4 border-slate-700 rounded-full z-30 node-dot transition-all duration-500"></div>
              <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                <div className="glass-card p-8 rounded-3xl border border-white/5 group-hover:border-green-500/50 transition-all duration-500">
                  <span className="text-green-500 font-black tracking-widest text-xs uppercase mb-2 block">2025 – 2029</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Swaminarayan University, Kalol</h3>
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-400 font-medium uppercase tracking-widest text-[10px]">Bachelor of Technology</p>
                    <div className="h-px w-8 bg-green-500/30 my-2"></div>
                    <p className="text-white font-bold text-xs mb-2"><span className="text-green-500">🏆</span> Finalist (1st Runner-up) – REPO REBOOT'25 (DA-IICT) | 2025</p>
                    <p className="text-white font-bold text-xs"><span className="text-amber-500">🥉</span> Top Finisher (3rd Runner-up) – Hack Innovate 2026 (Adani University) | 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
