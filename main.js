import "./style.css";

document.querySelectorAll("button").forEach((button) => {
  const rect = button.getBoundingClientRect();
  button.dataset.dimension = `${Number(rect.width).toFixed(2)}x${Number(rect.height).toFixed(2)}`;
});
