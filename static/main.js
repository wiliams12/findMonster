async function fetchSales() {
  try {
    const response = await fetch("/api/sales");
    const data = await response.json();
    renderSales(data); // pass to render function
  } catch (error) {
    console.error("Error fetching sales:", error);
  }
}

function renderSales(data) {
    
}

function playMusic() {
  player = document.querySelector(".audio-container audio");
  player.play();
  console.log("click");
}

document.addEventListener("DOMContentLoaded", fetchSales);

document.addEventListener("DOMContentLoaded", playMusic);
document.querySelector(".leading-img").addEventListener("mousemove", playMusic);
