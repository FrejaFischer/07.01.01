const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  const template = document.querySelector("#product_item_template").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(".subcategory").textContent = product.subcategory;
  copy.querySelector(".brand").textContent = product.brandname;

  copy.querySelector("#price").textContent = "DKK " + product.price + ",-";

  if (product.discount !== null) {
    copy.querySelector("#new_price").textContent = "DKK " + Math.trunc((product.price / 100) * product.discount) + ",-";

    copy.querySelector("#price").classList.add("price_change");
  } else {
    copy.querySelector("#new_price").classList.add("hide");
  }

  if (product.soldout == false) {
    copy.querySelector("#soldout").classList.add("hide");
  } else {
    copy.querySelector("img").classList.add("gone");
  }

  copy.querySelector(".link_product").setAttribute("href", `product.html?id=${product.id}`);
  //appende
  document.querySelector("#product_list").appendChild(copy);
}
