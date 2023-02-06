// https://kea-alt-del.dk/t7/api/products/1525

fetch("https://kea-alt-del.dk/t7/api/products/1525")
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
  document.querySelector("#price .price_change").textContent = product.price;
  document.querySelector("#price #new_price").textContent = (product.price / 100) * product.discount;
  document.querySelector("#price .discount").textContent = product.discount + "% discount";
  document.querySelector("#info .color").textContent = product.basecolour;
  document.querySelector("#info .i_number").textContent = product.id;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout == false) {
    console.log("in stock");
    document.querySelector("#soldout").classList.add("hide");
  }
}
