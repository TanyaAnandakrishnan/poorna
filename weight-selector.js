function updatePrice(selectElement, category) {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const price = selectedOption.getAttribute('data-price');
  const priceElement = selectElement.closest('.product-actions').querySelector('.price');
  priceElement.textContent = `₹${price}.00`;
}

// Add weight selectors to products on page load
document.addEventListener('DOMContentLoaded', function() {
  const products = [
    // Oil products (500ml, 1L)
    { selector: '.product-card:nth-child(1) .product-actions', type: 'oil', basePrice: 310, baseName: 'Cold Pressed Groundnut Oil' },
    { selector: '.product-card:nth-child(2) .product-actions', type: 'oil', basePrice: 120, baseName: 'Cold Pressed Groundnut Oil (Refined)' },
    { selector: '.product-card:nth-child(3) .product-actions', type: 'oil', basePrice: 460, baseName: 'Cold Pressed Gingely Oil' },
    { selector: '.product-card:nth-child(4) .product-actions', type: 'oil', basePrice: 160, baseName: 'Cold Pressed Gingely Oil (Light)' },
    { selector: '.product-card:nth-child(5) .product-actions', type: 'oil', basePrice: 450, baseName: 'Cold Pressed Coconut Oil' },
    { selector: '.product-card:nth-child(6) .product-actions', type: 'oil', basePrice: 170, baseName: 'Cold Pressed Coconut Oil (Virgin)' },
    
    // Mix products (250g, 500g)
    { selector: '.product-card:nth-child(7) .product-actions', type: 'mix', basePrice: 134, baseName: 'Black Rice Porridge Mix' },
    { selector: '.product-card:nth-child(8) .product-actions', type: 'mix', basePrice: 134, baseName: 'Karuppu Kavuni Pongal Ready Mix' },
    { selector: '.product-card:nth-child(9) .product-actions', type: 'mix', basePrice: 134, baseName: 'Karuppu Kavuni Rice Flour' },
    
    // Laddu products (100g, 200g)
    { selector: '.product-card:nth-child(25) .product-actions', type: 'laddu', basePrice: 99, baseName: 'Karupu Kavuni Laddu' },
    { selector: '.product-card:nth-child(27) .product-actions', type: 'laddu', basePrice: 81, baseName: 'Mapillai Samba Laddu' }
  ];

  products.forEach(product => {
    const element = document.querySelector(product.selector);
    if (element) {
      const priceDiv = element.querySelector('.price');
      const buttonGroup = element.querySelector('.button-group');
      
      let selectorHTML = '';
      
      if (product.type === 'oil') {
        selectorHTML = `
          <select class="weight-selector" onchange="updatePrice(this, 'oil')">
            <option value="500" data-price="${product.basePrice / 2}">500ml - ₹${product.basePrice / 2}</option>
            <option value="1000" data-price="${product.basePrice}" selected>1L - ₹${product.basePrice}</option>
          </select>
        `;
      } else if (product.type === 'mix') {
        selectorHTML = `
          <select class="weight-selector" onchange="updatePrice(this, 'mix')">
            <option value="250" data-price="${product.basePrice}" selected>250g - ₹${product.basePrice}</option>
            <option value="500" data-price="${product.basePrice * 2}">500g - ₹${product.basePrice * 2}</option>
          </select>
        `;
      } else if (product.type === 'laddu') {
        selectorHTML = `
          <select class="weight-selector" onchange="updatePrice(this, 'laddu')">
            <option value="100" data-price="${Math.round(product.basePrice / 2)}">100g - ₹${Math.round(product.basePrice / 2)}</option>
            <option value="200" data-price="${product.basePrice}" selected>200g - ₹${product.basePrice}</option>
          </select>
        `;
      }
      
      if (selectorHTML) {
        const container = document.createElement('div');
        container.className = 'weight-price-container';
        container.innerHTML = selectorHTML + `<div class="price">₹${product.basePrice}.00</div>`;
        
        element.insertBefore(container, buttonGroup);
        priceDiv.remove();
      }
    }
  });
});