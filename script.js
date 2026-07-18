// Smooth fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// AI Assistant
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("👋 Welcome to Elders Empire Unique Enterprise!\n\nHow can we help you today?");
  }, 1500);
});
