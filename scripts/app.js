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
          <button onclick="addToCart('${doc.id}')">Add to Cart</button>
          <button onclick="addToWishlist('${doc.id}')" class="wishlist-btn"><i class="bi bi-heart"></i></button>
        </div>


        
      </div>
    `;
  });
}

loadProducts();