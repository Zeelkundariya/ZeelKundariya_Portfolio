export default function Skills() {
  const row1Skills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', glow: 'rgba(227,79,38,0.6)' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', glow: 'rgba(21,114,182,0.6)' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', glow: 'rgba(97,218,251,0.6)', spin: true },
    { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', glow: 'rgba(247,223,30,0.6)' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', glow: 'rgba(51,153,51,0.6)' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', glow: 'rgba(6,182,212,0.6)' },
  ]

  const row2Skills = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', glow: 'rgba(240,80,50,0.6)' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', glow: 'rgba(0,89,156,0.6)' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', glow: 'rgba(71,162,72,0.6)' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', glow: 'rgba(255,108,55,0.6)' },
    { name: 'Wireframing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', glow: null },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', glow: 'rgba(255,255,255,0.6)', invert: true },
  ]

  const SkillCard = ({ skill }) => (
    <div className="glass-card skill-card w-40 h-40 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:bg-slate-800/80 transition-all duration-300 flex-shrink-0">
      <img
        src={skill.icon}
        alt={skill.name}
        className={`w-14 h-14 group-hover:scale-110 transition-all ${skill.spin ? 'group-hover:animate-spin' : ''} ${skill.invert ? 'invert' : ''}`}
        style={skill.glow ? { filter: `drop-shadow(0 0 0px transparent)` } : {}}
        onMouseEnter={(e) => { if (skill.glow) e.target.style.filter = `drop-shadow(0 0 15px ${skill.glow})` }}
        onMouseLeave={(e) => { e.target.style.filter = 'drop-shadow(0 0 0px transparent)' }}
      />
      <span className="text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
    </div>
  )

  return (
    <section id="skills" className="py-24 bg-transparent relative pb-40 overflow-hidden" style={{zIndex: 1}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I work with a variety of modern technologies and am always learning more.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Row 1: Scrolling Left */}
          <div className="marquee-wrapper">
            <div className="marquee-content py-4">
              {row1Skills.map((s, i) => <SkillCard key={`r1-${i}`} skill={s} />)}
              {/* Duplicates for seamless loop */}
              {row1Skills.map((s, i) => <SkillCard key={`r1d-${i}`} skill={s} />)}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="marquee-wrapper marquee-reverse">
            <div className="marquee-content py-4">
              {row2Skills.map((s, i) => <SkillCard key={`r2-${i}`} skill={s} />)}
              {/* Duplicates for seamless loop */}
              {row2Skills.map((s, i) => <SkillCard key={`r2d-${i}`} skill={s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
