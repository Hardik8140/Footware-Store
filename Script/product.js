const container = document.getElementById("allproduct");

let footproduct = [
  {
    id: 1,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10001_410_ALT100/crocs",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 450,
    category: "Clogs",
  },
  {
    id: 2,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/203591_50P_ALT100/crocs",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 599,
    category: "Clogs",
  },
  {
    id: 3,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/207118_610_ALT100/crocs-classic-lucky-charms-clog-red-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 499,
    category: "Clogs",
  },
  {
    id: 4,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208469_90H_ALT100/crocs-nba-all-star-mega-crush-clog-multi-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 799,
    category: "Clogs",
  },
  {
    id: 5,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208472_90H_ALT100/crocs-minecraft-elevated-clog-multi-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 999,
    category: "Clogs",
  },
  {
    id: 6,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/207938_2Y2_ALT100/crocs-classic-platform-lined-clog-w-bone-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 399,
    category: "Clogs",
  },
  {
    id: 7,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/207938_411_ALT100/crocs",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 799,
    category: "Clogs",
  },
  {
    id: 8,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/207989_007_ALT100/crocs-mega-crush-sandal-light-grey-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 499,
    category: "Clogs",
  },
  {
    id: 9,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/207937_1FT_ALT100/crocs-echo-clog-atmosphere-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 599,
    category: "Clogs",
  },
  {
    id: 10,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208037_0C4_ALT100/crocs-classic-vera-bradley-harry-potter-clog-black-multi-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 450,
    category: "Clogs",
  },

  {
    id: 11,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/207989_007_ALT100/crocs-mega-crush-sandal-light-grey-charm-view",
    product_name: "Mega Crus Sandal",
    ratting: "⭐⭐⭐⭐",
    price: 599,
    category: "Sandals",
  },
  {
    id: 12,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208537_100_ALT100/crocs-crocs-splash-glossy-strappy-sandal-white-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 799,
    category: "Sandals",
  },
  {
    id: 13,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208217_2Y2_ALT100/crocs-splash-strappy-sandal-bone-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 999,
    category: "Sandals",
  },
  {
    id: 14,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/207446_2YC_ALT100/crocs-classic-cozzzy-sandal-bone-mushroom-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 899,
    category: "Sandals",
  },
  {
    id: 15,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/206753_00W_ALT100/crocs-women-s-crocs-tulum-strappy-sandal-black-tan-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 399,
    category: "Sandals",
  },
  {
    id: 16,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208245_1FT_ALT100/crocs-crush-glitter-sandal-atmosphere-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 599,
    category: "Sandals",
  },
  {
    id: 17,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208254_2Y3_ALT100/crocs-all-terrain-topographic-sandal-bone-multi-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 450,
    category: "Sandals",
  },
  {
    id: 18,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/product-set-new-years-23-pack_001_ALT100/crocs-new-years-2023-pack",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 499,
    category: "Sandals",
  },
  {
    id: 19,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/207576_066_ALT100/crocs-women-s-kadee-ii-heart-print-flip-black-white-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 450,
    category: "Sandals",
  },
  {
    id: 20,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/product-set-spring-break-for-her-pack_001_ALT100/crocs-spring-break-for-her-pack",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 599,
    category: "Sandals",
  },

  {
    id: 21,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/206121_410_ALT100/crocs-classic-crocs-slide-navy-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 450,
    category: "Slides",
  },
  {
    id: 22,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208180_3UG_ALT100/crocs-classic-platform-slide-jade-stone-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 499,
    category: "Slides",
  },
  {
    id: 23,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208538_5Q6_ALT100/crocs-crocs-splash-glossy-slide-moon-jelly-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 799,
    category: "Slides",
  },
  {
    id: 24,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208537_100_ALT100/crocs-crocs-splash-glossy-strappy-sandal-white-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 999,
    category: "Slides",
  },
  {
    id: 25,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208728_2Y2_ALT100/crocs-brooklyn-slide-bone-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 399,
    category: "Slides",
  },
  {
    id: 26,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208215_001_ALT100/crocs-baya-ii-slide-black-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 599,
    category: "Slides",
  },
  {
    id: 27,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208361_2Y2_ALT100/crocs-splash-slide-bone-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 999,
    category: "Slides",
  },
  {
    id: 28,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208217_2Y2_ALT100/crocs-splash-strappy-sandal-bone-charm-view",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 450,
    category: "Slides",
  },
  {
    id: 29,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/product-set-the-bach-pack_001_ALT100/crocs-the-bach-pack",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 999,
    category: "Slides",
  },
  {
    id: 30,
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/product-set-champs-and-kisses-pack_001_ALT100/crocs-champs-and-kisses-pack",
    product_name: "Classic Clog",
    ratting: "⭐⭐⭐⭐",
    price: 399,
    category: "Slides",
  },
];

let cartData = JSON.parse(localStorage.getItem("cart")) || [];

// filter Data

let fill = document.querySelector("#filterImg ");
let but = document.querySelectorAll(".btn");

for (let i = 0; i < but.length; i++) {
  but[i].addEventListener("click", function () {
    let filtered = footproduct.filter((ele) => {
      return ele.category === but[i].innerText;
    });
    // console.log(filtered);
    DisplayData(filtered);
  });
}

// Search Product

let search = document.getElementById("search");
let inp = document.getElementById("inp");

search.addEventListener("input", () => {
  if (inp.value === "") {
    DisplayData(footproduct);
  } else {
    let searchData = footproduct.filter((el) => {
      if (
        el.category.toUpperCase().includes(inp.value.toUpperCase()) === true
      ) {
        return true;
      } else {
        return false;
      }
    });
    // console.log(searchData);
    DisplayData(searchData);
  }
});

// Sorting Data

let sortbtn = document.getElementById("type");
sortbtn.addEventListener("change", filterData);

function filterData() {
  if (sortbtn.value === "") {
    DisplayData(footproduct);
  } else {
    if (sortbtn.value === "lth") {
      let sortData = [...footproduct];
      sortData.sort((a, b) => {
        return a.price - b.price;
      });
      DisplayData(sortData);
    } else {
      let sortData = [...footproduct];
      sortData.sort((a, b) => {
        return b.price - a.price;
      });
      DisplayData(sortData);
    }
  }
}

// Fetch Data

DisplayData(footproduct);
function DisplayData(data) {
  container.innerHTML = "";

  data.forEach((el) => {
    let crd = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("p");
    let rate = document.createElement("p");
    let price = document.createElement("h3");
    let category = document.createElement("p");
    let addTocart = document.createElement("button");
    image.onclick = () => {
      localStorage.setItem("id", el.id);
      console.log(el.id);
      location.href = "./productPage.html";
    };
    image.src = el.image;
    name.innerText = el.product_name;
    rate.innerText = el.ratting;
    price.innerText = `₹${el.price}`;
    category.innerText = el.category;
    addTocart.innerText = "Add to Cart";

    addTocart.addEventListener("click", () => {
      if (checkAvailable(el)) {
        alert("Prodict already in Cart");
      } else {
        cartData.push({ ...el, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cartData));
      }
    });

    crd.append(image, name, rate, price, addTocart);
    container.append(crd);
  });
}

function checkAvailable(el) {
  for (let i = 0; i < cartData.length; i++) {
    if (el.id === cartData[i].id) {
      return true;
    }
  }
  return false;
}
