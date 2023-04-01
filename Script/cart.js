let container = document.getElementById("CartData");

let cartData = JSON.parse(localStorage.getItem("cart")) || [];

DisplayData(cartData);
function DisplayData() {
  container.innerHTML = "";

  cartData.forEach((el) => {
    let crd = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("p");
    let rate = document.createElement("p");
    let price = document.createElement("h3");
    let category = document.createElement("p");
    let Remove = document.createElement("button");
    Remove.classList.add("rmv");
    let inc = document.createElement("button");
    Remove.classList.add("rmv");
    let dic = document.createElement("button");
    let quantity = document.createElement("span");

    image.src = el.image;
    name.innerText = el.product_name;
    rate.innerText = el.ratting;
    price.innerText = `₹${el.price}`;
    category.innerText = el.category;
    inc.innerText = "+";
    Remove.innerText = "Remove";
    dic.innerText = "-";
    quantity.innerText = el.quantity;

    Remove.addEventListener("click", () => {
      cartData = cartData.filter(function (ele) {
        return ele.id !== el.id;
      });
      localStorage.setItem("cart", JSON.stringify(cartData));
      DisplayData();
    });

    inc.addEventListener("click", () => {
      el.quantity++;
      localStorage.setItem("cart", JSON.stringify(cartData));
      DisplayData();
    });

    dic.addEventListener("click", () => {
      if (el.quantity > 1) {
        el.quantity--;
        localStorage.setItem("cart", JSON.stringify(cartData));
        DisplayData();
      }
    });

    crd.append(image, name, rate, price, inc, quantity, dic, Remove);
    container.append(crd);
  });
  let total = document.getElementById("cartTotal");

  let sum = 0;
  for (let i = 0; i < cartData.length; i++) {
    sum += cartData[i].quantity * cartData[i].price;
  }
  total.innerText = sum;
}
DisplayData();

let checkout = document.getElementById("buynow");

checkout.addEventListener("click", () => {
  location.href = "./checkout.html";
});
