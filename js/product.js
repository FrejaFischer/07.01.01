// https://kea-alt-del.dk/t7/api/products/1525

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelectorAll(".displayname").forEach(displayProductname);
  function displayProductname(giveName) {
    giveName.textContent = product.productdisplayname;
  }

  document.querySelector("#type_brand .subcategory").textContent = product.subcategory;
  document.querySelector("#type_brand .brand").textContent = product.brandname;
  document.querySelector("#price .price_change").textContent = "DKK " + product.price + ",-";
  document.querySelector("#price #new_price").textContent = "DKK " + (product.price / 100) * product.discount + ",-";
  document.querySelector("#price .discount").textContent = product.discount + "% discount";
  document.querySelector("#info .color").textContent = product.basecolour;
  document.querySelector("#info .i_number").textContent = product.id;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout == false) {
    console.log("in stock");
    document.querySelector("#soldout").classList.add("hide");
  }

  if (product.discount !== null) {
    console.log("not null");

    document.querySelector("#new_price").textContent = "DKK " + Math.trunc((product.price / 100) * product.discount) + ",-";
    document.querySelector("p:first-child").classList.add("price_change");
  } else {
    console.log("null");
    document.querySelector("#new_price").classList.add("hide");
    document.querySelector(".discount").classList.add("hide");
    document.querySelector("p:first-child").classList.remove("price_change");
  }
}
