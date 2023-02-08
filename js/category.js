fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then(showCategories);

function showCategories(cats) {
  //looper og kalder showProduct
  cats.forEach(showCategory);
}

function showCategory(cat) {
  console.log("hallo?");
  //fang template
  const template = document.querySelector("template").content;
  //lav en kopi
  const clone = template.cloneNode(true);
  //ændre indhold
  clone.querySelector("h2").textContent = cat.category;

  clone.querySelector(".category_link").href = `productlist.html?category=${cat.category}`;

  //appende
  document.querySelector("#category_list").appendChild(clone);
}
