const cartItems = {}

const parentContainer = document.getElementById('parent__cart_container')

vehicleData.forEach(data => {
    console.log(data)
    const {category, description, image, name, price, quantity} = data;
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
      <input type="text" placeholder="Enter quantity" class="input input-bordered input-primary w-[60%]" />
        <button class="btn btn-primary w-[35%]">Buy Now</button>
      </div>
    </div>
    `
    parentContainer.appendChild(div)
})
