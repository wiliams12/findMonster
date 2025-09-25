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

document.addEventListener("DOMContentLoaded", fetchSales);