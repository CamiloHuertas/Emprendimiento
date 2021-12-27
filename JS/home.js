const d = document
const btn = d.querySelector(".hamburger")
const menu = d.querySelector(".navigation")
const overlay = d.getElementById("overlay")

// menu toggle

btn.addEventListener("click", () => {
  menu.classList.toggle("active")
  d.querySelector(".hamburger").classList.toggle("is-active")
  overlay.classList.toggle("active")
})

// overlay


d.addEventListener("click", (e) => {
  
  if (menu.className === "navigation active") {
    overlay.className = "overlay active"
    if (e.target.id === "overlay" || e.target.id === "header") {
      overlay.className = "overlay"
      menu.className = "navigation"
      d.querySelector(".hamburger").classList.remove("is-active")
    }
  }

})

// Scroll reveal

ScrollReveal().reveal(".header", {
  delay: "500",
  origin: "bottom",
  distance: "100px"
})
ScrollReveal().reveal(".banner", {
  delay: "500",
  origin: "left",
  distance: "500px"
})
ScrollReveal().reveal(".title", {
  delay: "500",
})
ScrollReveal().reveal(".text", {
  delay: "500",
})