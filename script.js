document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("index")) {
    document.getElementById("home-link")?.classList.add("active");
  } else if (path.includes("info")) {
    document.getElementById("info-link")?.classList.add("active");
  }
});