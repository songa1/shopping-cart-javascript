// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');

  let totalPrice = +price * +quantity;

  subtotal.innerHTML = +totalPrice;

  return +totalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');


  // ITERATION 3
  //... your code goes here

  let total = 0;

  for(let i = 0;i < products.length; i++){
    total += updateSubtotal(products[i])
  }

  let totalHolder = document.querySelector('#total-value span');

  totalHolder.innerHTML = +total;
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here

  event.currentTarget.parentNode.parentNode.parentNode.removeChild(target);

  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productsHolder = document.querySelector('tbody');

  let product = document.querySelectorAll('.create-product input');

  let productName = product[0].value;
  let productPrice = Number(product[1].value);

  // Create row
  let newRow = document.createElement('tr');
  newRow.setAttribute('class', 'product');

  // Name column
  let nameRow = document.createElement('td');
  nameRow.setAttribute('class', 'name');
  let nameSpan = document.createElement('span');
  nameSpan.innerText = productName;

  nameRow.appendChild(nameSpan);

  // Price column
  let priceRow = document.createElement('td');
  priceRow.setAttribute('class', 'price');
  let priceSpan = document.createElement('span');
  priceSpan.innerText = productPrice.toFixed(2);

  priceRow.textContent = "$"
  priceRow.appendChild(priceSpan);

  // Quantity column
  let qtyRow = document.createElement('td');
  qtyRow.setAttribute('class', 'quantity');
  let qtyInput = document.createElement('input');
  qtyInput.setAttribute('type', 'number');
  qtyInput.setAttribute('value', '0');
  qtyInput.setAttribute('placeholder', 'Quantity');

  qtyRow.appendChild(qtyInput);

  // Subtotal column
  let totalRow = document.createElement('td');
  totalRow.setAttribute('class', 'subtotal');
  let totalSpan = document.createElement('span');
  totalRow.textContent = "$"
  totalSpan.innerText = 0

  totalRow.appendChild(totalSpan);

  // Action column
  let btnRow = document.createElement('td');
  btnRow.setAttribute('class', 'action');
  let removeBtn = document.createElement('button');

  removeBtn.classList = 'btn btn-remove';
  removeBtn.innerText = 'Remove'

  btnRow.appendChild(removeBtn);

  newRow.appendChild(nameRow)
  newRow.appendChild(priceRow)
  newRow.appendChild(qtyRow)
  newRow.appendChild(totalRow)
  newRow.appendChild(btnRow)

  productsHolder.appendChild(newRow)

  product[0].value = ''
  product[1].value = ''
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let productsList = document.getElementsByClassName('product');

  for(let i = 0; i < productsList.length; i++){
    let remove = productsList[i].querySelector('.btn-remove');
    remove.addEventListener('click', (e)=> {
      removeProduct(e)
    })
  }
});
