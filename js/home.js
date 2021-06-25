//side bar
var menu = document.getElementById("bar");
var item = document.getElementById("item");
let login = document.getElementById("login");
menu.onclick = function () {
  if (item.style.right == "-300px") {
    item.style.right = "0";
  } else {
    item.style.right = "-300px";
  }
};

//show items
let itemArr = [
  {
    itemId: "J-1001",
    category: "pufferjacket",
    brand: "Burton",
    feature:
      " Front zip closure.It is lightweight, breathable, and easy to clean.",
    img: "./images/jacket7.jpg",
    price: "$42.00",
  },
  {
    itemId: "C-1007",
    category: "longcoat",
    brand: "shotof",
    feature: "This coat is a stunning color, lovely length, and keeps warm.",
    img: "./images/lcoat3.jpg",
    price: "$64.00",
  },
  {
    itemId: "F-1011",
    category: "fauxfur",
    brand: "Viifaa Material",
    feature:
      "2019 new fashion women luxurious Large raccoon fur collar hooded coat warm Fox fur liner parkas long winter jacket.",
    img: "./images/fur1.jpg",
    price: "$42.00",
  },
  {
    itemId: "S-1014",
    category: "sweater",
    brand: "Juno",
    feature: "Boat Neck Wine Red Sweater",
    img: "./images/sweater6.jpg",
    price: "$44.99",
  },
  {
    itemId: "H-1020",
    category: "hoodie",
    brand: "Nike",
    feature: "Women's nike air oversized hoodie",
    img: "./images/hoodie6.jpg",
    price: "$42.00",
  },
  {
    itemId: "F-1012",
    category: "fauxfur",
    brand: "Viifaa Material",
    feature:
      " a non-stretch fabric, long sleeves, underlined, finished with a clip on front closure.",
    img: "./images/jacket10.jpg",
    price: "$42.00",
  },
  {
    itemId: "J-1002",
    category: "pufferjacket",
    brand: "Nils",
    feature:
      "Cropped puffer jacket that features a front zip and two side pockets. Made with recycled polyester.",
    img: "./images/jacket8.png",
    price: "$50",
  },
  {
    itemId: "C-1006",
    category: "longcoat",
    brand: "Palm Angels",
    feature:
      "  extra long sleeves, tapered waistband and a lovely ruffle detailing on the coat collar, shoulders and sleeve cuffs",
    img: "./images/lcoat2.jpg",
    price: "$55.00",
  },
  {
    itemId: "J-1003",
    category: "pufferjacket",
    brand: "Helly Hansen",
    feature:
      "Jacket with adjustable high collar. Long sleeves with interior elastic cuffs. Side pockets.",
    img: "./images/jacket11.jpg",
    price: "$34",
  },
  {
    itemId: "J-1004",
    category: "pufferjacket",
    brand: "Patagonia",
    feature:
      "Crop jacket is A Short Down Puffy With Hand-Warming Pockets, An Adjustable And Contoured Hood, And Is Water-Resistant.",
    img: "./images/jacket9.jpg",
    price: "$42",
  },
  {
    itemId: "C-1005",
    category: "longcoat",
    brand: "Maomaokong",
    feature: "This coat is a stunning color, lovely length, and keeps warm.",
    img: "./images/coat1.jpg",
    price: "$60.43",
  },

  {
    itemId: "F-1009",
    category: "fauxfur",
    brand: "stand studio",
    feature:
      "Jacket with 70% down and 30% feather,a detachable faux fur hood trim and long sleeves.",
    img: "./images/jacket15.jpg",
    price: "$200",
  },
  {
    itemId: "F-1010",
    category: "fauxfur",
    brand: "Viifaa Material",
    feature: "a collared neckline on a cropped fit and tiered faux fur.",
    img: "./images/fur5.jpg",
    price: "$44.99",
  },
  {
    itemId: "C-1008",
    category: "longcoat",
    brand: "Palm Angels",
    feature: "StandardWomen Solid Color Long Sleeve Turn-down Collar Long Coat",
    img: "./images/lcoat5.jpg",
    price: "$52.95",
  },

  {
    itemId: "S-1013",
    category: "sweater",
    brand: "Juno",
    feature:
      "Women's Sweater Jumper Dress Short Mini Dress White Long Sleeve Off Shoulder",
    img: "./images/sweater4.jpg",
    price: "$50",
  },
  {
    itemId: "H-1019",
    category: "hoodie",
    brand: "Fila",
    feature:
      "Oversized boxy cut, finished with micro-ribbed stretch edges. The model wears a size XS.",
    img: "./images/hoodie7.jpg",
    price: "$48.00",
  },
  {
    itemId: "S-1015",
    category: "sweater",
    brand: "Juno",
    feature: "Cable Knit Pullover Sweater",
    img: "./images/sweater7.jpg",
    price: "$42.00",
  },

  {
    itemId: "S-1016",
    category: "sweater",
    brand: "Juno",
    feature: "Mohair Big Sweater",
    img: "./images/sweater5.jpg",
    price: "$42.00",
  },
  {
    itemId: "H-1017",
    category: "hoodie",
    brand: "Missguided",
    feature:
      "black long sleeve hoodie dress with a neon green playboy print on the back.",
    img: "./images/hoodie4.jpg",
    price: "$48",
  },
  {
    itemId: "H-1018",
    category: "hoodie",
    brand: "missguided",
    feature:
      "oversized fit - for a more regular fit, try sizing down! Mini - Sits mid thigh 65% polyester 35% cotton.",
    img: "./images/hoodie8.jpg",
    price: "$44.99",
  },
];
for (let i = 0; i < itemArr.length; i++) {
  let itemDiv = document.getElementById("section");
  let boxDiv = document.createElement("div");
  boxDiv.setAttribute("class", `box all ${itemArr[i].category}`);
  itemDiv.appendChild(boxDiv);
  let imgbxDiv = document.createElement("div");
  imgbxDiv.setAttribute("class", "imgBx");
  boxDiv.appendChild(imgbxDiv);
  let img = document.createElement("img");
  img.setAttribute("src", itemArr[i].img);
  imgbxDiv.appendChild(img);
  let contentDiv = document.createElement("div");
  contentDiv.setAttribute("class", "content");
  boxDiv.appendChild(contentDiv);
  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode(itemArr[i].brand);
  h2.appendChild(h2Text);
  contentDiv.appendChild(h2);
  let p = document.createElement("p");
  pText = document.createTextNode(itemArr[i].feature);
  p.appendChild(pText);
  contentDiv.appendChild(p);
  let span = document.createElement("span");
  let spanText = document.createTextNode(itemArr[i].price);
  span.appendChild(spanText);
  contentDiv.appendChild(span);
  let addDiv = document.createElement("div");
  addDiv.setAttribute("class", "addToCart fas fa-cart-plus");
  let addDivText = document.createTextNode("Add To Cart");
  addDiv.appendChild(addDivText);
  contentDiv.appendChild(addDiv);
  let idSpan = document.createElement("span");
  idSpan.setAttribute("class", "number");
  let idText = document.createTextNode(itemArr[i].itemId);
  idSpan.appendChild(idText);
  contentDiv.appendChild(idSpan);
}

const categoryTitle = document.querySelectorAll(".category-title");
const allCategoryPosts = document.querySelectorAll(".all");
for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener(
    "click",
    filterPosts.bind(this, categoryTitle[i])
  );
}

function filterPosts(item) {
  for (let i = 0; i < allCategoryPosts.length; i++) {
    if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
      allCategoryPosts[i].style.display = "block";
    } else {
      allCategoryPosts[i].style.display = "none";
    }
  }
}
//popup
function closePopup() {
  let blur = document.getElementById("blur");
  blur.classList.toggle("active");
  let popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
//Add To Cart
let addToCart = document.getElementsByClassName("addToCart");
for (let j = 0; j < addToCart.length; j++) {
  addToCart[j].addEventListener("click", updateCartContainer);
}
let cartContainer = document.getElementsByClassName("cartContainer")[0];
function updateCartContainer(e) {
  let blur = document.getElementById("blur");
  blur.classList.toggle("active");
  let popup = document.getElementById("popup");
  popup.classList.toggle("active");
  let currentElement = e.target;
  let parentContent = currentElement.parentElement;
  let itemBox = parentContent.parentElement;
  let itemId = itemBox.getElementsByClassName("number")[0].innerText;
  let itemImg = itemBox.querySelector("img").src;
  let itemBrand = itemBox.querySelector("h2").innerText;
  let itemPrice = itemBox.querySelector("span").innerText;
  let itemNumber = cartContainer.getElementsByClassName("idNumber");
  for (let i = 0; i < itemNumber.length; i++) {
    if (itemNumber[i].textContent == itemId) {
      alert("This product is already added to cart");
      return;
    }
  }
  addNewRowInCart(itemId, itemImg, itemBrand, itemPrice);
  let totalPrice = 0;
  let quantity = cartContainer.getElementsByClassName("quantity");

  let cartPrice = cartContainer.getElementsByClassName("cartPrice");
  for (let i = 0; i < cartPrice.length; i++) {
    quantity[i].addEventListener("change", quantityChanged);
    let qty = quantity[i].value;
    totalPrice =
      totalPrice + parseInt(cartPrice[i].textContent.replace("$", "")) * qty;
  }
  document.getElementsByClassName("cartTotal")[0].textContent =
    "Total Price: $" + totalPrice;
}
function addNewRowInCart(itemId, itemImg, itemBrand, itemPrice) {
  let tr = document.createElement("tr");
  cartContainer.appendChild(tr);
  let tdId = document.createElement("td");
  tdId.setAttribute("class", "idNumber");
  let idText = document.createTextNode(itemId);
  tdId.appendChild(idText);
  tr.appendChild(tdId);
  let tdImg = document.createElement("td");
  let image = document.createElement("img");
  image.setAttribute("src", itemImg);
  tdImg.appendChild(image);
  tr.appendChild(tdImg);
  let tdBrand = document.createElement("td");
  let tdBrandText = document.createTextNode(itemBrand);
  tdBrand.appendChild(tdBrandText);
  tr.appendChild(tdBrand);
  let tdSelect = document.createElement("td");
  let selectBox = document.createElement("select");
  let option = document.createElement("option");
  optionText = document.createTextNode("XS");
  option.appendChild(optionText);
  selectBox.appendChild(option);
  let option1 = document.createElement("option");
  option1Text = document.createTextNode("S");
  option1.appendChild(option1Text);
  selectBox.appendChild(option1);
  let option2 = document.createElement("option");
  option2Text = document.createTextNode("XL");
  option2.appendChild(option2Text);
  selectBox.appendChild(option2);
  tdSelect.appendChild(selectBox);
  tr.appendChild(tdSelect);
  let tdInput = document.createElement("td");
  let input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("min", "1");
  input.setAttribute("value", "1");
  input.setAttribute("class", "quantity");
  tdInput.appendChild(input);
  tr.appendChild(tdInput);
  let tdPrice = document.createElement("td");
  tdPrice.setAttribute("class", "cartPrice");
  let tdPriceText = document.createTextNode(itemPrice);
  tdPrice.appendChild(tdPriceText);
  tr.appendChild(tdPrice);
  let tdRemove = document.createElement("td");
  tdRemove.setAttribute("class", "removeButton");
  let icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-trash-alt");
  tdRemove.appendChild(icon);
  let removeBtn = document.createElement("button");
  let btnText = document.createTextNode("Remove");
  removeBtn.appendChild(btnText);
  tdRemove.appendChild(removeBtn);
  tr.appendChild(tdRemove);
  let removeButton = document.getElementsByClassName("removeButton");
  for (var i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", removeFromCart);
  }
}
function quantityChanged() {
  let totalPrice = 0;
  let quantity = cartContainer.getElementsByClassName("quantity");

  let cartPrice = cartContainer.getElementsByClassName("cartPrice");
  for (let i = 0; i < cartPrice.length; i++) {
    quantity[i].addEventListener("change", quantityChanged);
    let qty = quantity[i].value;
    totalPrice =
      totalPrice + parseInt(cartPrice[i].textContent.replace("$", "")) * qty;
  }
  document.getElementsByClassName("cartTotal")[0].textContent =
    "Total Price: $" + totalPrice;
}
function removeFromCart(e) {
  let parentTd = e.target.parentElement;
  parentTd.parentElement.remove();
  updatePriceAfterRemove();
}
function updatePriceAfterRemove() {
  totalPrice = 0;
  let cartPrice = cartContainer.getElementsByClassName("cartPrice");
  for (let i = 0; i < cartPrice.length; i++) {
    priceFormatedNumb = cartPrice[i].innerText.replace("$", "");
    totalPrice = totalPrice + parseInt(priceFormatedNumb);
  }
  document.getElementsByClassName("cartTotal")[0].innerText = new Number(
    totalPrice
  ).toLocaleString("en");
}
// Fix Navigation Bar
window.onscroll = () => {
  let navBar = document.getElementById("navBar");
  if (window.pageYOffset > 0) {
    navBar.classList.add("fix");
  } else {
    navBar.classList.remove("fix");
  }
};
