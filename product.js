// Firebase Config
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const collectionName = urlParams.get('collection');

if (!productId) {
    alert("Product ID not found");
    window.location.href = 'index.html';
}


async function loadProductDetails() {
    let collections = [];
    
    // If collection is specified in URL, check that first
    if (collectionName) {
        collections = [collectionName, "Brands", "products", "products collaction", "users"];
    } else {
        collections = ["Brands", "products", "products collaction", "users"];
    }
    
    let product = null;

    for (const col of collections) {
        const querySnapshot = await getDocs(collection(db, col));
        querySnapshot.forEach((doc) => {
            if (doc.id === productId) {
                product = { id: doc.id, ...doc.data() };
            }
        });
        if (product) break; 
    }

    if (!product) {
        alert("Product not found");
        window.location.href = 'index.html';
        return;
    }

    // Populate HTML
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `₹${product.price}`;
    document.getElementById('product-description').textContent = product.description || "No description available.";
    document.getElementById('product-main-image').src = product.image;

    // For thumbnails, assume single image for now
    document.getElementById('thumb1').src = product.image;
    document.getElementById('thumb2').src = product.image;
    document.getElementById('thumb3').src = product.image;

    // Update page title
    document.title = `${product.name} | Megamart`;
}

// Add to Cart functionality
window.addToCart = async function() {
    // Get product data from multiple collections
    let collections = [];
    
    // If collection is specified in URL, check that first
    if (collectionName) {
        collections = [collectionName, "Brands", "products", "products collaction", "users"];
    } else {
        collections = ["Brands", "products", "products collaction", "users"];
    }
    
    let product = null;

    for (const col of collections) {
        const querySnapshot = await getDocs(collection(db, col));
        querySnapshot.forEach((doc) => {
            if (doc.id === productId) {
                product = { id: doc.id, ...doc.data() };
            }
        });
        if (product) break; // Stop if found
    }

    if (!product) {
        alert("Product not found");
        return;
    }

    // Get existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already in cart
    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Added to cart: " + product.name);
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = total;
}

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Thumbnail click to change main image
document.getElementById('thumb1').addEventListener('click', () => {
    document.getElementById('product-main-image').src = document.getElementById('thumb1').src;
});
document.getElementById('thumb2').addEventListener('click', () => {
    document.getElementById('product-main-image').src = document.getElementById('thumb2').src;
});
document.getElementById('thumb3').addEventListener('click', () => {
    document.getElementById('product-main-image').src = document.getElementById('thumb3').src;
});

// Add to Cart button event
document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);

// Load product on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProductDetails();
    updateCartCount();
});
