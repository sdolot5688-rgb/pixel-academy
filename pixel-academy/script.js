function playClick() {
  document.getElementById("clickSound").play();
}

function openCourse(name) {
  document.getElementById("clickSound").play();
  alert("Opening " + name + " course 🎮");
}

// Hover sound
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    document.getElementById("hoverSound").play();
  });
});

function openLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginBox").style.display = "none";
}
