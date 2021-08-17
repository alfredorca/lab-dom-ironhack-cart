// ITERATION 1

function updateSubtotal(product) {
 
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotalPrice =  price * quantity;
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = subTotalPrice
  return subTotalPrice;
  
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let total = 0;
  for (const product of products) {
    updateSubtotal(product)
    total += updateSubtotal(product)
  }

  // ITERATION 3
  let displayTotal = document.querySelector('#total-value span');
  displayTotal.innerHTML = total;

}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
