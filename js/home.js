const cartItems = []

const parentContainer = document.getElementById('parent__cart_container')

vehicleData.forEach(data => {

    const {category, description, image, name, price, quantity, id} = data;
    const div = document.createElement('div');
    div.classList.add('card', 'card-compact', 'bg-base-100', 'shadow-xl')
    div.innerHTML = `
    <figure><img src="${image}" class="w-full h-[200px]" alt="vehecle" /></figure>
    <div class="card-body">
       <div class="flex justify-between">
       <h2 class="card-title text-md text-primary">${name}</h2>
       <h2 class="text-sm btn btn-secondary btn-outline btn-xs">${category}</h2>
       </div>
       <p title="${description}">${description.length < 80?description:description.slice(0,100)+'...'}</p>
      <div>
        <p>Price: ${price}</p>
        <p>quantity: ${quantity}</p>
      </div>
      <div class="card-actions flex justify-between">
      <input type="text" placeholder="Enter quantity" class="input input-bordered input-primary w-[60%] quantity-input" />
        <button onclick="addToCart('${id}',this)" class="btn btn-primary w-[35%]" disabled>Buy Now</button>
      </div>
    </div>
    `
    parentContainer.appendChild(div)
})

// event listeners here 
const quantityFields = document.getElementsByClassName('quantity-input')
for(const quantity of quantityFields){
  quantity.addEventListener('keyup',(e)=>{


    if(e.target.value !== ''){
      e.target.parentNode.children[1].removeAttribute('disabled')
    }
    else{
      e.target.parentNode.children[1].setAttribute('disabled',true)
    }
  })
}


// add to cart function 
function addToCart(id,button){
  const inputValue = button.parentNode.children[0]
  const quantity = inputValue.value
  inputValue.value = ''
  button.setAttribute('disabled',true)
  console.log(id in cartItems)
  console.log(quantity)
  const singleItem = {
    id: id,
    quantity: quantity
  }
  cartItems.push(singleItem)
  setItemsToTheCart()
  
}


// set items to the cart 
const setItemsToTheCart = () =>{
  console.log(cartItems)
  const selectedItemsContainer = document.getElementById('all-selected-items');

}

const singleCartItem = () =>{
  
}

//navigate to login page
const navigateToLogin = () =>{
  location.pathname = '/index.html'
}
