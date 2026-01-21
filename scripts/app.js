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
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        
        <p class="price">₹${product.price}</p>
        <div class="product-actions">
  <button class="add-bag-btn" onclick="addToCart('${doc.id}')">
     ADD TO CARD
  </button>

  <button class="wishlist-outline" onclick="addToWishlist('${doc.id}')">
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
          <button class="add-bag-btn" onclick="addToCart('${doc.id}')">
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
          <button class="add-bag-btn" onclick="addToCart('${doc.id}')">
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
          <button class="add-bag-btn" onclick="addToCart('${doc.id}')">
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

loadShoesProducts();






