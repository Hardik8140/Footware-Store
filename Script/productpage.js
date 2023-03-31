let detail = document.getElementById("cont");
let productDetailed = document.getElementById("pro");

let size = document.getElementById("size");

let productData = JSON.parse(localStorage.getItem("Product-data")) || [];
let addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", () => {
  localStorage.setItem("Product-data", JSON.stringify(productDetailed));
});
