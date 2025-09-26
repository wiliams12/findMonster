function renderSales(data) {
    console.log(data);
    const container = document.querySelector(".price-list ul");

    data.forEach(item => {
      const entry = document.createElement("li");

      const header = document.createElement("h4");
      header.textContent = item.shop;

      const info = document.createElement("p");
      info.textContent = item.price;

      entry.appendChild(header);
      entry.appendChild(info);

      container.appendChild(entry);
    });

}


async function fetchSales() {
  try {
    console.log("fetched");
    const response = await fetch("/salesAPI");
    const data = await response.json();
    renderSales(data);
  } catch (error) {
    console.error("Error fetching sales:", error);
  }
}


function playMusic() {
  player = document.querySelector(".audio-container audio");
  player.play();
  console.log("click");
}

document.addEventListener("DOMContentLoaded", fetchSales);

// document.addEventListener("DOMContentLoaded", playMusic);
document.querySelector(".leading-img").addEventListener("mousemove", playMusic);
