import Lenis from "@studio-freight/lenis"

const lenis = new Lenis({
  duration: 0.6,
  easing: t => t * (2 - t), // easeOutQuad
  smoothWheel: true,
  smoothTouch: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)