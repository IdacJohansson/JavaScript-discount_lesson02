function discountCalculator() {
  let enterValue = prompt("Enter your price");
  let price = parseFloat(enterValue);

  if (isNaN(price)) {
    console.log("Invalid input. Please enter a number.");
    return;
  } else {
    let theDiscount = price * 0.1;
    let totalPrice = price - theDiscount;
    console.log("Your discounted price: " + totalPrice + " $");
  }
}
discountCalculator();
