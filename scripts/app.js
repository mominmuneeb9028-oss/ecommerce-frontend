console.log("E-Commerce Website Loaded");
function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("active");
}


  // 🔥 Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBygmGdoGl_LBhJwYVapD1m0bW46Fvjrv4",
  authDomain: "megamart-7f2e4.firebaseapp.com",
  projectId: "megamart-7f2e4",
  storageBucket: "megamart-7f2e4.firebasestorage.app",
  messagingSenderId: "633085427770",
  appId: "1:633085427770:web:47e4c208014cc00f983503"
};


// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);

// Helper function to get product by ID from both collections
async function getProductById(id) {
  console.log("getProductById called with id:", id);
  // First try "products" collection
  const productsSnapshot = await getDocs(collection(db, "products"));
  console.log("products collection docs:", productsSnapshot.size);
  for (const doc of productsSnapshot.docs) {
    console.log("Checking doc id:", doc.id);
    if (doc.id === id) {
      console.log("Found in products collection:", doc.data());
      return { id: doc.id, ...doc.data() };
    }
  }

  // If not found, try "products collection"
  const productsCollectionSnapshot = await getDocs(collection(db, "products collection"));
  console.log("products collection docs:", productsCollectionSnapshot.size);
  for (const doc of productsCollectionSnapshot.docs) {
    console.log("Checking doc id:", doc.id);
    if (doc.id === id) {
      console.log("Found in products collection:", doc.data());
      return { id: doc.id, ...doc.data() };
    }
  }

  console.log("Product not found for id:", id);
  return null;
}


async function loadBrands() {
  const brandsContainer = document.getElementById("brands");

  const querySnapshot = await getDocs(collection(db, "Brands"));
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();

    const img = document.createElement("img");
    img.src = data.image;
    img.style.height = "70px";

    brandsContainer.appendChild(img);
  });
}

loadBrands();


// 🔥 STEP 4: PRODUCTS FETCH CODE (PASTE HERE)

const productContainer = document.getElementById("productContainer");

async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    const product = doc.data();

    productContainer.innerHTML += `
      <div class="product-card" onclick="openProduct('${doc.id}')">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        
        <p class="price">₹${product.price}</p>
        <div class="product-actions">
  <button class="add-bag-btn" onclick="addToCart('${doc.id}');event.stopPropagation();">
     ADD TO CARD
  </button>

  <button class="wishlist-outline" onclick="addToWishlist('${doc.id}');event.stopPropagation();">
    <i class="fa-regular fa-heart"></i>
  </button>
</div>
</div>
    `;
  });
}

loadProducts();



// 🔥 FURNITURE FETCH CODE

// 🔥 FURNITURE FETCH CODE (FINAL)

// 🔥 FURNITURE FETCH CODE (WITH CART + HEART)

const furnitureContainer = document.getElementById("furnitureContainer");

async function loadFurnitureProducts() {
  console.log("🔥 Furniture function called");

  const snapshot = await getDocs(collection(db, "products collection"));
  console.log("🔥 Furniture docs:", snapshot.size);

  furnitureContainer.innerHTML = "";

  snapshot.forEach((doc) => {
    const item = doc.data();

    // 👉 sirf furniture category
    if (item.category !== "furniture") return;

    furnitureContainer.innerHTML += `
      <div class="furniture-card">
        <img src="${item.image}" alt="${item.name}">
        <h6>${item.name}</h6>
        <p class="furniture-price">₹${item.price}</p>

        <div class="product-actions">
          <button class="add-bag-btn" onclick="addToCart('${doc.id}');event.stopPropagation();">
            ADD TO CART
          </button>

          <button class="wishlist-outline" onclick="addToWishlist('${doc.id}');event.stopPropagation();">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    `;
  });
}

loadFurnitureProducts();


// 💻 LAPTOP COLLECTION FETCH CODE

const laptopContainer = document.getElementById("laptopContainer");

async function loadLaptopProducts() {
  console.log("💻 Laptop function called");

  const snapshot = await getDocs(collection(db, "products collection"));
  console.log("💻 Laptop docs:", snapshot.size);

  laptopContainer.innerHTML = "";

  snapshot.forEach((doc) => {
    const item = doc.data();

    // 👉 Sirf laptop category
    if (item.category !== "laptop") return;

    laptopContainer.innerHTML += `
      <div class="furniture-card">
        <img src="${item.image}" alt="${item.name}">
        <h6>${item.name}</h6>
        <p class="furniture-price">₹${item.price}</p>

        <div class="product-actions">
          <button class="add-bag-btn" onclick="addToCart('${doc.id}');event.stopPropagation();">
            ADD TO CART
          </button>

          <button class="wishlist-outline" onclick="addToWishlist('${doc.id}')">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    `;
  });
}

loadLaptopProducts();

// 👟 SHOES COLLECTION FETCH CODE

const shoesContainer = document.getElementById("shoesContainer");

async function loadShoesProducts() {
  console.log("👟 Shoes function called");

  const snapshot = await getDocs(collection(db, "products collection"));
  console.log("👟 Shoes docs:", snapshot.size);

  shoesContainer.innerHTML = "";

  snapshot.forEach((doc) => {
    const item = doc.data();

    // 👉 sirf shoes category
    if (item.category !== "shoes") return;

    shoesContainer.innerHTML += `
      <div class="furniture-card">
        <img src="${item.image}" alt="${item.name}">
        <h6>${item.name}</h6>
        <p class="furniture-price">₹${item.price}</p>

        <div class="product-actions">
          <button class="add-bag-btn" onclick="addToCart('${doc.id}');event.stopPropagation();">
            ADD TO CART
          </button>

          <button class="wishlist-outline" onclick="addToWishlist('${doc.id}');event.stopPropagation();">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    `;
  });
}

loadShoesProducts();

// ================= PRODUCT OPEN =================
window.openProduct = function(id) {
  localStorage.setItem("selectedProduct", id);
  window.location.href = "product.html";
};


// ================= ADD TO CART =================
window.addToCart = async function(id) {
  console.log("addToCart called with id:", id);
  const productData = await getProductById(id);
  console.log("productData:", productData);

  if (!productData) {
    console.error("Product not found for id:", id);
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Current cart:", cart);

  const index = cart.findIndex(item => item.id === id);

  if (index > -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...productData, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("Updated cart:", cart);
  alert("Added to Cart ✅");
};


// ================= ADD TO WISHLIST =================
window.addToWishlist = async function(id) {
  const productData = await getProductById(id);

  if (!productData) return;

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const exists = wishlist.find(item => item.id === id);
  if (exists) {
    alert("Already in Wishlist ❤️");
    return;
  }

  wishlist.push(productData);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Added to Wishlist ❤️");
};





