const products = {
  product2: {
    name: "Cold Pressed Groundnut Oil",
    options: [{ weight: "500ml", price: 310.00 }],
    basePrice: 310,
    weight: "500ml",
    img: "images/p2.png",
    desc: "Freshly cold-pressed groundnut oil rich in vitamin E and healthy fats. It enhances flavor, supports heart health, and is ideal for everyday cooking and frying.",
    video: "images/p1v.mp4",
    gallery: [
      { type: "image", src: "images/p2r.png" },
      { type: "image", src: "images/p2.png" },
    ],
  },
  product3: {
    name: "Cold Pressed Groundnut Oil (Refined)",
    options: [{ weight: "200ml", price: 120.00 }],
    basePrice: 120,
    weight: "200ml",
    img: "images/p3.png",
    desc: "Lightly refined groundnut oil that retains nutrition while offering a milder aroma and taste. Perfect for versatile cooking.",
    video:"images/p1v.mp4",
    gallery: [
      { type: "image", src: "images/p3r.jpeg" },
      { type: "image", src: "images/p3.png" },
    ],
  },
  product4: {
    name: "Cold Pressed Gingely Oil",
    options: [{ weight: "500ml", price: 460.00 }],
    basePrice: 460,
    weight: "500ml",
    img: "images/p4.png",
    desc: "Pure cold-pressed sesame oil (gingely oil) extracted from premium seeds. Traditionally used for cooking, massage, and oil therapy. Supports bone and heart health.",
    video: "images/p1v.mp4",
    gallery: [
      { type: "image", src: "images/p4.png" },
      { type: "image", src: "images/p4r.jpg" },
    ],
  },
  product5: {
    name: "Cold Pressed Gingely Oil (Light)",
    options: [{ weight: "200ml", price: 160.00 }],
    basePrice: 160,
    weight: "200ml",
    img: "images/p5.png",
    desc: "Lightly filtered gingely oil that maintains nutrients and aroma while providing a smoother flavor. Excellent for sautéing and seasoning.",
    video: "images/p1v.mp4",
    gallery: [
      { type: "image", src: "images/p5.png" },
      { type: "image", src: "images/p4r.jpg" },
    ],
  },
  product6: {
    name: "Cold Pressed Coconut Oil",
    options: [{ weight: "500ml", price: 450.00 }],
    basePrice: 450,
    weight: "500ml",
    img: "images/p6.png",
    desc: "Unrefined, cold-pressed coconut oil — aromatic, pure, and natural. Great for cooking, hair care, and skin nourishment.",
    video: "images/p1v.mp4",
    gallery: [
      { type: "image", src: "images/p6.png" },
      { type: "image", src: "images/p6r.jpg" },
    ],
  },
  product7: {
    name: "Cold Pressed Coconut Oil (Virgin)",
    options: [{ weight: "200ml", price: 170.00 }],
    basePrice: 170,
    weight: "200ml",
    img: "images/p7.png",
    desc: "Virgin coconut oil made using traditional extraction methods. Retains natural aroma and nutrients, ideal for healthy cooking and skincare.",
    video: "images/p1v.mp4",
    gallery: [
      { type: "image", src: "images/p7.png" },
      { type: "image", src: "images/p6r.jpg" },
    ],
  },
  karupu_rice: {
    name: "Black Rice Porridge",
    options: [
        { weight: "250g", price: 134.00 },
        { weight: "500g", price: 250.00 },
    ],
    basePrice: 134,
    weight: "250g / 500g",
    img: "images/karupurice-1.jpeg",
    desc: "Black rice is rich in antioxidants, which help fight free radicals and slow aging. It supports heart health by lowering cholesterol and improving blood circulation. Regular consumption aids digestion, boosts energy, and helps maintain healthy skin and hair.",
    video: "images/karuupu_kanji.mp4",
    gallery: [
      { type: "image", src: "images/karupurice-1.jpeg" },
      { type: "image", src: "images/p8.png" },
      { type: "image", src: "images/black_rice.png" },
    ],
  },
  product9: {
    name: "Karuppu Kavuni Pongal Ready Mix",
    options: [
        { weight: "250g", price: 134.00 },
        { weight: "500g", price: 250.00 },
    ],
    basePrice: 134,
    weight: "250g / 500g",
    img: "images/p9.png",
    desc: "Healthy and wholesome pongal mix made with traditional Karuppu Kavuni rice. A perfect breakfast rich in protein and fiber.",
    video: "images/p9v.mp4",
    gallery: [
      { type: "image", src: "images/p9r.png" },
      { type: "image", src: "images/p9.png" },
    ],
  },
  product10: {
    name: "Karuppu Kavuni Rice Flour",
    options: [
        { weight: "500g", price: 200.00 },
        { weight: "1kg", price: 390.00 },
    ],
    basePrice: 134,
    weight: "500g / 1kg",
    img: "images/p10r.png",
    desc: "Finely ground flour made from black rice (Karuppu Kavuni). Ideal for baking, dosa, and traditional sweets. High in antioxidants.",
    video: "images/p10v.mp4",
    gallery: [
      { type: "image", src: "images/p10r.png" },
      { type: "image", src: "images/p10.png" },
    ],
  },
  product11: {
    name: "Mapillai Samba Kanji / Porridge Ready Mix",
    options: [
        { weight: "250g", price: 108.00 },
        { weight: "500g", price: 200.00 },
    ],
    basePrice: 108,
    weight: "250g / 500g",
    img: "images/p11rr.png",
    desc: "Nutrient-rich porridge mix from Mapillai Samba rice. Easy to digest, energizing, and perfect for a wholesome breakfast.",
    video: "images/p11v.mp4",
    gallery: [
      { type: "image", src: "images/p11.png" },
      { type: "image", src: "images/p11r.png" },
      { type: "image", src: "images/p11rr.png" },
    ],
  },
  product12: {
    name: "Mapillai Samba Pongal Ready Mix",
    options: [
        { weight: "250g", price: 100.00 },
        { weight: "500g", price: 175.00 },
    ],
    basePrice: 175,
    weight: "250g",
    img: "images/p12.png",
    desc: "Traditional pongal ready mix made from Mapillai Samba rice. Delicious, fiber-rich, and ideal for balanced nutrition.",
    video: "images/p12v.mp4",
    gallery: [
      { type: "image", src: "images/p12.png" },
      { type: "image", src: "images/p12r.png" },
    ],
  },
  product13: {
    name: "Mapillai Samba Puttu Ready Mix",
    options: [
        { weight: "250g", price: 108.00 },
        { weight: "500g", price: 200.00 },
    ],
    basePrice: 108,
    weight: "250g / 500g",
    img: "images/product13.png",
    desc: "Soft and aromatic puttu mix made from Mapillai Samba rice. Perfect for a nutritious breakfast with coconut or curry.",
    video: "images/p13v.mp4",
    gallery: [
      { type: "image", src: "images/p13.png" },
      { type: "image", src: "images/p13r.png" },
    ],
  },
  product14: {
    name: "Mapillai Samba Rice Flour",
    options: [
        { weight: "500g", price: 200.00 },
        { weight: "1kg", price: 390.00 },
    ],
    basePrice: 108,
    weight: "500g / 1kg",
    img: "images/product14.png",
    desc: "Smooth and fine rice flour from Mapillai Samba rice. Great for traditional dishes like kozhukattai, idiyappam, and baked goods.",
    video: "images/p10v.mp4",
    gallery: [
      { type: "image", src: "images/p14.png" },
      { type: "image", src: "images/p14r.png" },
    ],
  },
  product15: {
    name: "Poongar Kanji / Porridge Ready Mix",
    options: [
        { weight: "250g", price: 120.00 },
        { weight: "500g", price: 220.00 },
    ],
    basePrice: 120,
    weight: "250g / 500g",
    img: "images/product15.png",
    desc: "Porridge mix from Poongar rice — easy to digest, gentle on the stomach, and rich in essential nutrients.",
    video: "images/p15v.mp4",
    gallery: [
      { type: "image", src: "images/p15.png" },
      { type: "image", src: "images/p15r.png" },
    ],
  },
  product16: {
    name: "Poongar Pongal Ready Mix",
    options: [
        { weight: "250g", price: 120.00 },
        { weight: "500g", price: 220.00 },
    ],
    basePrice: 120,
    weight: "250g / 500g",
    img: "images/p16.png",
    desc: "A ready-to-cook pongal mix made from Poongar rice. Nourishing and flavorful, ideal for a traditional, healthy meal.",
    video: "images/p16v.mp4",
    gallery: [
      { type: "image", src: "images/p16.png" },
      { type: "image", src: "images/p16r.png" },
    ],
  },
  product17: {
    name: "Poongar Puttu Ready Mix",
    options: [
        { weight: "250g", price: 120.00 },
        { weight: "500g", price: 220.00 },
    ],
    basePrice: 120,
    weight: "250g / 500g",
    img: "images/p17.png",
    desc: "Wholesome puttu mix made from Poongar rice. Makes soft, steamed cakes that pair well with coconut and jaggery.",
    video: "images/p17v.mp4",
    gallery: [
      { type: "image", src: "images/p17.png" },
      { type: "image", src: "images/p17r.png" },
    ],
  },
  product18: {
    name: "Poongar Rice Flour",
    options: [{ weight: "500g", price: 205.00 }],
    basePrice: 205,
    weight: "500g",
    img: "images/p18.png",
    desc: "Naturally light and fine rice flour made from Poongar rice. Suitable for traditional recipes and baking.",
    video: "images/p18v.mp4",
    gallery: [
      { type: "image", src: "images/p18.png" },
      { type: "image", src: "images/p18r.png" },
    ],
  },
  product19: {
    name: "Multi Millet Dosa Ready Mix",
    options: [
        { weight: "500g", price: 170.00 },
        { weight: "1kg", price: 330.00 },
    ],
    basePrice: 93,
    weight: "500g / 1kg",
    img: "images/p19.png",
    desc: "A blend of nutrient-dense millets to make crispy, protein-rich dosas. Great source of fiber and minerals.",
    video: "images/p19v.mp4",
    gallery: [
      { type: "image", src: "images/p19.png" },
      { type: "image", src: "images/p19r.png" },
    ],
  },
  product20: {
    name: "Karuppu Kavuni, Mapillai Samba, Poongar Adai Dosa Mix",
    options: [{ weight: "500g", price: 120.00 }],
    basePrice: 120,
    weight: "500g",
    img: "images/product20.png",
    desc: "High-protein adai dosa mix combining three traditional rice varieties. Delicious, filling, and naturally gluten-free.",
    video: "images/p20v.mp4",
    gallery: [
      { type: "image", src: "images/product20.png" },
      { type: "image", src: "images/product20_alt.png" },
    ],
  },
  product21: {
    name: "Power Packed Nutri Mix for Mom & Kids",
    options: [{ weight: "250g", price: 134.00 }],
    basePrice: 134,
    weight: "250g",
    img: "images/p21.png",
    desc: "Balanced nutritional mix made with millets, pulses, and natural ingredients. Boosts strength and supports overall growth for both kids and mothers.",
    video: "images/p22v.mp4",
    gallery: [
      { type: "image", src: "images/p21.png" },
      { type: "image", src: "images/p21r.png" },
    ],
  },
  product22: {
    name: "Kattuyanam Kanji / Porridge Ready Mix",
    options: [{ weight: "250g", price: 165.00 }],
    basePrice: 165,
    weight: "250g",
    img: "images/p22.png",
    desc: "Wholesome porridge mix made from traditional Kattuyanam rice, known for its rich iron and fiber content. Helps boost energy, supports digestion, and keeps you active throughout the day.",
    video: "images/p21v.mp4",
    gallery: [
      { type: "image", src: "images/p22.png" },
      { type: "image", src: "images/p22r.png" },
    ],
  },
  product23: {
    name: "Kattuyanam Pongal Ready Mix",
    options: [{ weight: "250g", price: 165.00 }],
    basePrice: 165,
    weight: "250g",
    img: "images/p23.png",
    desc: "Healthy pongal ready mix made from heritage Kattuyanam rice. Delicious, filling, and packed with nutrients — perfect for a hearty traditional meal.",
    video: "images/p23v.mp4",
    gallery: [
      { type: "image", src: "images/p23.png" },
      { type: "image", src: "images/p23r.png" },
    ],
  },
  product24: {
    name: "Kattuyanam Puttu Ready Mix",
    options: [{ weight: "250g", price: 165.00 }],
    basePrice: 165,
    weight: "250g",
    img: "images/p24.png",
    desc: "Soft and flavorful puttu mix prepared from Kattuyanam rice. A nutrient-rich, easy-to-cook breakfast option that pairs well with coconut and jaggery.",
    video: "images/p24v.mp4",
    gallery: [
      { type: "image", src: "images/p24.png" },
      { type: "image", src: "images/p23r.png" },
    ],
  },
  product25: {
    name: "Karupu Kavuni Soup Mix",
    options: [
        { weight: "250g", price: 134.00 },
        { weight: "500g", price: 250.00 },
    ],
    basePrice: 134,
    weight: "250g / 500g",
    img: "images/p25r.png",
    desc: "Nutritious soup blend made from heritage Karuppu Kavuni rice, prized for its antioxidant richness and deep flavor. Supports immunity, aids digestion, and fuels your body with sustained energy throughout the day.",
    video: "images/p25v.mp4",
    gallery: [
      { type: "image", src: "images/p25r.png" },
      { type: "image", src: "images/p25.png" },
    ],
  },
  product26: {
    name: "Karupu Kavuni Laddu",
    options: [{ weight: "200g", price: 99.00 }],
    basePrice: 99,
    weight: "200g",
    img: "images/p26r.png",
    desc: "Nutritious laddu made from heritage Karuppu Kavuni rice, rich in antioxidants and natural flavor. Boosts stamina and supports heart health with every wholesome bite.",
    video: "images/p26v.mp4",
    gallery: [
      { type: "image", src: "images/p26r.png" },
      { type: "image", src: "images/p26.png" },
    ],
  },
  product27: {
    name: "Mapillai Samba Soup Mix",
    options: [
        { weight: "250g", price: 108.00 },
        { weight: "500g", price: 200.00 },
    ],
    basePrice: 108,
    weight: "250g / 500g",
    img: "images/p27r.png",
    desc: "Hearty soup blend made from traditional Mapillai Samba rice, rich in iron and antioxidants. Boosts stamina, supports digestion, and keeps you energized through the day.",
    video: "images/p25v.mp4",
    gallery: [
      { type: "image", src: "images/p27.png" },
      { type: "image", src: "images/p27r.png" },
    ],
  },
  product28: {
    name: "Mapillai Samba Laddu",
    options: [{ weight: "200g", price: 81.00 }],
    basePrice: 81,
    weight: "200g",
    img: "images/p28r.jpg",
    desc: "Energizing laddu made from nutrient-rich Mapillai Samba rice, packed with iron and fiber. Supports stamina, boosts vitality, and offers a wholesome way to satisfy your sweet cravings.",
    video: "images/p26v.mp4",
    gallery: [
      { type: "image", src: "images/p28.png" },
      { type: "image", src: "images/p28r.jpg" },
    ],
  },
  product29: {
    name: "Hill Honey / Mazhai Then",
    options: [
        { weight: "250g", price: 195.00 },
        { weight: "500g", price: 380.00 },
    ],
    basePrice: 195,
    weight: "500g",
    img: "images/p29r.png",
    desc: "Raw hill honey with natural sweetness and enzyme-rich goodness. Great for immunity and everyday wellness.",
    video: "images/p29v.mp4",
    gallery: [
      { type: "image", src: "images/p29.png" },
      { type: "image", src: "images/p29r.png" },
    ],
  },
  product30: {
    name: "Castor Oil",
    options: [{ weight: "100ml", price: 90.00 }],
    basePrice: 90,
    weight: "100ml",
    img: "images/p30r.png",
    desc: "Cold-pressed castor oil, rich in fatty acids and vitamin E. Nourishes skin, strengthens hair, and supports natural healing.",
    video: "images/p1v.mp4",
    gallery: [
      { type: "image", src: "images/p30.png" },
      { type: "image", src: "images/p30r.png" },
    ],
  },
  product31: {
    name: "Herbal Hair Oil",
    options: [{ weight: "100ml", price: 90.00 }],
    basePrice: 90,
    weight: "100ml",
    img: "images/p31r.png",
    desc: "Herbal Hair Oil is made with natural ingredients that help reduce hair fall, strengthen roots, and promote healthy growth. Regular use supports scalp health and improves overall hair texture.",
    video: "images/product20_recipe.mp4",
    gallery: [
      { type: "image", src: "images/p31.png" },
      { type: "image", src: "images/p31r.png" },
    ],
  },
};

/**
 * Handles the "Buy Now" action by constructing a WhatsApp message.
 */
function openWhatsAppOrderDirect(productKey, weight, price) {
  const product = products[productKey];
  if (!product) {
    alert('Product not found');
    return;
  }

  const whatsappNumber = "919443073111";
  const productName = product.name;
  
  const message = `Hello! I want to order:\n\n*Product:* ${productName}\n*Selected Option:* ${weight} - ₹${price}\n\nThank you!`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
  
  try {
    window.open(whatsappUrl, '_blank');
  } catch (error) {
    console.error('WhatsApp error:', error);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}

function openWhatsAppOrder(productKey, hasOptions, isDetailPage = false) {
  const product = products[productKey];
  if (!product) {
    alert('Product not found');
    return;
  }
  
  let selectedWeight;
  let selectedPrice;

  if (hasOptions && isDetailPage) {
    const selectedOption = document.querySelector('input[name="product-option"]:checked');
    if (selectedOption) {
      selectedWeight = selectedOption.value;
      selectedPrice = selectedOption.dataset.price;
    } else {
      alert("Please select a weight/size option before proceeding.");
      return;
    }
  } else {
    if (product.options && product.options.length > 0) {
        selectedWeight = product.options[0].weight;
        selectedPrice = product.options[0].price.toFixed(2);
    } else {
        selectedWeight = product.weight.split('/')[0].trim();
        selectedPrice = product.basePrice.toFixed(2);
    }
  }

  const whatsappNumber = "919443073111";
  const productName = product.name;
  
  const message = `Hello! I want to order:\n\n*Product:* ${productName}\n*Selected Option:* ${selectedWeight} - ₹${selectedPrice}\n\nThank you!`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
  
  try {
    window.open(whatsappUrl, '_blank');
  } catch (error) {
    console.error('WhatsApp error:', error);
    // Fallback URL
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}

function showDetail(productKey) {
  const p = products[productKey];
  if (!p) {
    console.error('Product not found:', productKey);
    return;
  }
  
  const list = document.getElementById("productList");
  const detail = document.getElementById("productDetail");

  const hasMultipleOptions = p.options && p.options.length > 1;

  let galleryHTML = "";
  if (p.gallery?.length) {
    galleryHTML = `
      <div class="gallery">
        ${p.gallery
          .map(
            (item) =>
              `<img src="${item.src}" alt="Gallery" onclick="changeMainImage('${item.src}')">`
          )
          .join("")}
      </div>`;
  }

  let sliderHTML = "";
  if (p.gallery?.length > 1) {
    sliderHTML = `
      <div class="image-slider">
        ${p.gallery
          .map(
            (item, index) =>
              `<img src="${item.src}" alt="Gallery" class="slider-image ${index === 0 ? 'active' : ''}" data-index="${index}">`
          )
          .join("")}
        <button class="slider-arrows prev-arrow" onclick="changeSlide(-1)">‹</button>
        <button class="slider-arrows next-arrow" onclick="changeSlide(1)">›</button>
        <div class="slider-nav">
          ${p.gallery
            .map(
              (_, index) =>
                `<div class="slider-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></div>`
            )
            .join("")}
        </div>
      </div>`;
  } else {
    sliderHTML = `<img id="mainImage" src="${p.img}" alt="${p.name}">`;
  }

  let optionsHTML = "";
  let priceWeightHTML = "";

  if (p.options && p.options.length >= 1) {
    optionsHTML = `
      <div class="product-options">
        <h4>Select Weight/Size:</h4>
        <div class="weight-options">
          ${p.options.map((option, index) => `
            <label class="option">
              <input type="radio" name="product-option" value="${option.weight}" data-price="${option.price.toFixed(2)}" ${index === 0 ? 'checked' : ''}>
              <span>${option.weight} - ₹${option.price.toFixed(2)}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  } else {
    priceWeightHTML = `
        <p><strong>Price:</strong> <span class="highlight-value">₹${p.basePrice.toFixed(2)}</span></p>
        <p><strong>Weight:</strong> <span class="highlight-value">${p.weight.split('/')[0].trim()}</span></p>
    `;
  }

  document.getElementById("detailContainer").innerHTML = `
    <div class="back-btn" onclick="goBack()">Back</div>
    <div class="image-section">
      ${sliderHTML}
    </div>
    <div class="detail-info">
      <h2>${p.name}</h2>
      ${priceWeightHTML}
      ${optionsHTML}
      <p><strong>Description:</strong> ${p.desc}</p>
      <div class="button-group">
        <div class="buy-btn" onclick="openWhatsAppOrder('${productKey}', ${hasMultipleOptions}, true)">Buy Now →</div>
        <div class="video-btn" onclick="showVideo('${p.video}')">🎥 Recipe Video</div>
      </div>
    </div>
  `;

  // Add event listeners for option changes if there are multiple options
  if (hasMultipleOptions) {
    setTimeout(() => {
      const optionInputs = document.querySelectorAll('input[name="product-option"]');
      optionInputs.forEach(input => {
        input.addEventListener('change', function() {
          // Update any dynamic content if needed
          const selectedWeight = this.value;
          const selectedPrice = this.dataset.price;
          console.log('Selected option:', selectedWeight, 'Price: ₹' + selectedPrice);
          
          // You can add code here to update price display if needed
          // For example, if you have a dynamic price element:
          // const priceElement = document.querySelector('.dynamic-price');
          // if (priceElement) priceElement.textContent = '₹' + selectedPrice;
        });
      });
    }, 100);
  }

  currentSlideIndex = 0;

  list.style.display = "none";
  detail.style.display = "block";
  window.scrollTo(0, 0);
}

function changeMainImage(src) {
  document.getElementById("mainImage").src = src;
}

function goBack() {
  const list = document.getElementById("productList");
  const detail = document.getElementById("productDetail");
  const modal = document.querySelector(".video-modal");

  list.style.display = "grid";
  detail.style.display = "none";

  if (modal) modal.remove();
}

function showVideo(videoSrc) {
  const modal = document.createElement("div");
  modal.className = "video-modal";
  modal.innerHTML = `
    <div class="video-content">
      <span class="close-btn" onclick="closeVideo(this)">×</span>
      <video controls autoplay>
        <source src="${videoSrc}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  `;
  modal.onclick = (e) => {
    if (e.target === modal) closeVideo(modal.querySelector(".close-btn"));
  };
  document.body.appendChild(modal);
}

function closeVideo(btn) {
  const modal = btn.closest(".video-modal");
  const video = modal.querySelector("video");
  video.pause();
  modal.remove();
}

let currentSlideIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slider-image');
  const dots = document.querySelectorAll('.slider-dot');
  
  if (slides.length === 0) return;
  
  const oldIndex = currentSlideIndex;
  
  slides[currentSlideIndex].classList.remove('active');
  dots[currentSlideIndex].classList.remove('active');
  
  if (direction > 0) {
    slides[currentSlideIndex].classList.add('prev');
  }
  
  currentSlideIndex += direction;
  
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  
  slides[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex].classList.add('active');
  
  setTimeout(() => {
    slides[oldIndex].classList.remove('prev');
  }, 600);
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slider-image');
  const dots = document.querySelectorAll('.slider-dot');
  
  if (slides.length === 0) return;
  
  slides[currentSlideIndex].classList.remove('active');
  dots[currentSlideIndex].classList.remove('active');
  
  currentSlideIndex = index;
  
  slides[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex].classList.add('active');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

function showHome() {
  return;
}

function showProducts() {
  const list = document.getElementById("productList");
  const detail = document.getElementById("productDetail");
  
  list.style.display = "grid";
  detail.style.display = "none";
  window.scrollTo(0, 0);
}

function showAbout() {
  return;
}

function searchProducts() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const productName = card.querySelector('h2').textContent.toLowerCase();
    const productDesc = card.querySelector('.description-hidden').textContent.toLowerCase();

    if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function initializeProductListBuyButtons() {
    document.querySelectorAll('#productList .product-card').forEach(card => {
        const productKeyMatch = card.getAttribute('onclick').match(/'(.*?)'/);
        if (!productKeyMatch) return;
        const productKey = productKeyMatch[1];
        
        const buyBtn = card.querySelector('.buy-btn');
        if (buyBtn) {
            const product = products[productKey];
            if (!product) return;

            const hasMultipleOptions = product.options && product.options.length > 1;
            
            if (hasMultipleOptions) {
                 buyBtn.onclick = (e) => {
                     e.stopPropagation();
                     showDetail(productKey);
                 };
            } else {
                buyBtn.onclick = (e) => {
                    e.stopPropagation();
                    openWhatsAppOrder(productKey, false, false); 
                };
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeProductListBuyButtons);