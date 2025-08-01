document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter")
  const nowSolid = document.getElementById("now-solid")
  const nowFade = document.getElementById("now-fade")
  const nowStroke = document.getElementById("now-stroke")
  const subtext = document.getElementById("subtext")

  const fadeInEls = document.querySelectorAll(".fade-in")
  fadeInEls.forEach(el => {
    const delay = el.style.animationDelay || "0s"
    el.style.animation = `fadeInUp 0.8s ease ${delay} forwards`
  })

  let i = 0
  const loader = setInterval(() => {
    if (i <= 100) {
      counter.textContent = i

      nowSolid.style.display = i <= 37 ? "inline" : "none"
      nowFade.style.display = (i > 37 && i <= 59) ? "inline" : "none"
      nowStroke.style.display = i > 59 ? "inline" : "none"

      if (i >= 56) {
        subtext.style.opacity = "1"
      }

      i++
    } else {
      clearInterval(loader)
    }
  }, 40)
})
