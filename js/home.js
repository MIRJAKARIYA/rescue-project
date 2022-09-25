const cartItems = [];

const parentContainer = document.getElementById("parent__cart_container");

const putData = (filter) =>{
  let filteredData = vehicleData;
  parentContainer.innerHTML = ''
  if(filter !== 'ALL VEHICLES'){
    filteredData = vehicleData.filter(data => data.category === filter)
  }
 
  filteredData.forEach((data) => {
    const { category, description, image, name, price, quantity, id } = data;
    const div = document.createElement("div");
    div.classList.add("card", "card-compact", "bg-base-100", "shadow-xl");
    div.innerHTML = `
      <figure><img src="${image}" class="w-full h-[200px]" alt="vehecle" /></figure>
      <div class="card-body">
         <div class="flex justify-between">
         <h2 class="card-title text-md text-primary">${name}</h2>
         <h2 class="text-sm btn btn-secondary btn-outline btn-xs">${category}</h2>
         </div>
         <p title="${description}">${
      description.length < 80 ? description : description.slice(0, 100) + "..."
    }</p>
        <div>
          <p>Price: ${price}</p>
          <p>quantity: ${quantity}</p>
        </div>
        <div class="card-actions flex justify-between">
        <input type="number" placeholder="Enter quantity" class="input input-bordered input-primary w-[60%] quantity-input" />
          <button onclick="addToCart('${id}',this)" class="btn btn-primary w-[35%]" disabled>Buy Now</button>
        </div>
      </div>
      `;
    parentContainer.appendChild(div);

    const quantityFields = document.getElementsByClassName("quantity-input");
for (const quantity of quantityFields) {
  quantity.addEventListener("keyup", (e) => {
    if (e.target.value !== "") {
      e.target.parentNode.children[1].removeAttribute("disabled");
    } else {
      e.target.parentNode.children[1].setAttribute("disabled", true);
    }
  });
}
  });
}

putData('ALL VEHICLES')

document.getElementById('select-category').addEventListener('change',(e)=>{
  const search = e.target.value

  putData(e.target.value)
})

// event listeners here


// add to cart function
function addToCart(id, button) {
  const inputValue = button.parentNode.children[0];
  const quantity = inputValue.value;
  inputValue.value = "";
  button.setAttribute("disabled", true);
  console.log(id);
  const isExists = cartItems.find((data) => data.id == id);
  if (!isExists) {
    const item = vehicleData.find((data) => data.id == id);
    cartSingleItem = {
      id: id,
      quantity: quantity,
      image: item.image,
      price: item.price,
    };
    cartItems.push(cartSingleItem);
    setItemsToTheCart();
  }
  else{
    alert('item already exists')
  }
}

// set items to the cart
const setItemsToTheCart = () => {
  let totalPrice = 0;
  const selectedItemsContainer = document.getElementById("all-selected-items");
  selectedItemsContainer.innerHTML = ''
  cartItems.forEach((item) => {
    totalPrice += parseInt(item.price);
    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "justify-between",
      "border-2",
      "border-warning",
      "p-3",
      "shadow-md",
      "h-[120px]",
      "bg-black",
      "mb-2"
    );
    div.innerHTML = `
    <div class="w-[30%]">
      <img src="${item.image}" class="w-full h-full" />
    </div>
    <div class="w-[60%]">
      <p>unit price: ${item.price}</p>
      <p>quantity:${item.quantity}</p>
      <p>total price: ${parseInt(item.price) * parseInt(item.quantity)}</p>
      <button class="btn btn-error btn-xs ml-auto block">delete</button>
    </div>
  `;
    selectedItemsContainer.appendChild(div);

  });
};

//navigate to login page
const navigateToLogin = () => {
  location.pathname = "/index.html";
};
