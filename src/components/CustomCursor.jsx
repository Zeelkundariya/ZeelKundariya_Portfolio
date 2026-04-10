import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current
    if (!dot || !outline) return

    let mouseX = 0, mouseY = 0
    let outlineX = 0, outlineY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const animateCursor = () => {
      outlineX += (mouseX - outlineX) * 0.15
      outlineY += (mouseY - outlineY) * 0.15
      outline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`
      requestAnimationFrame(animateCursor)
    }

    window.addEventListener('mousemove', onMouseMove)
    animateCursor()

    // Hover detection
    const addHoverListeners = () => {
      const targets = 'a, button, .project-container, .skill-card, .menu-item'
      document.querySelectorAll(targets).forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'))
      })
    }
    // Delay to ensure DOM is ready
    setTimeout(addHoverListeners, 1000)
    setTimeout(addHoverListeners, 3000)

    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-outline" ref={outlineRef}></div>
    </>
  )
}
