const addToCart = document.querySelector(".product-page__add-to-cart");
const prodName = document.querySelector(".header__title").innerHTML;
const price = document.querySelector(".product-page__price").innerHTML;
addToCart.addEventListener("click", (e) => {
  const count = document.querySelector(".quanity__counter").innerHTML;
  let cartData = JSON.parse(decodeURIComponent(localStorage.getItem("cart")));
  if (cartData == null) {
    localStorage.setItem(
      "cart",
      encodeURIComponent(
        JSON.stringify({
          [prodName]: {
            name: prodName,
            price: price,
            count: count,
          },
        })
      )
    );
  } else {
    const newItem = {
      [prodName]: {
        name: prodName,
        price: price,
        count: count,
      },
    };
    const newCart = {...cartData, ...newItem}
    localStorage.setItem("cart", encodeURIComponent(JSON.stringify(newCart)));
  }
});
