# 🛍️ Ecommerce Frontend

Ecommerce frontend project created to practice frontend web development concepts.

This project displays products dynamically using a free API, supports user signup/login using Firebase Authentication, and stores minimal data in Firebase. It’s built with basic web technologies and is perfect for learning and demo purposes.

---

## 🚀 Features

✔️ Responsive UI using **Bootstrap**, **HTML**, **CSS**, and **JavaScript**  
✔️ Fetches product data from **FakeStore API (Free Dummy Products API)**  
✔️ Basic product list & product detail displays  
✔️ Firebase **Authentication** (Sign up / Sign in)  
✔️ Firebase **Realtime Database** / Firestore (optional storage)*  
✔️ Interactive UI with add-to-cart features (if applicable in your code)

\* *(Update this if you're using just Auth or both Auth + DB)*

---

## 🧰 Tech Stack

| Feature | Technology |
|---------|------------|
| Frontend | HTML, CSS, JavaScript |
| Styling | Bootstrap |
| API | FakeStore Free API |
| Backend | Firebase (Authentication & Database) |

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/mominmuneeb9028-oss/ecommerce-frontend.git

2.. **Open the project**
Navigate into the project folder:

cd ecommerce-frontend


3.**Install Dependencies**

This project uses plain HTML/CSS/JS and Bootstrap — no npm install required.

4.**Configure Firebase**

✔️ Go to Firebase Console
✔️ Create a new project
✔️ Enable Authentication (Email/Password or providers)
✔️ Enable Realtime Database or Firestore
✔️ Replace your Firebase config in your JS file:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};


5.**Run locally**
Simply open index.html in your browser.

📡 APIs Used

FakeStore API – for fetching dummy products
Website: https://fakestoreapi.com/

📁 Project Structure
ecommerce-frontend/
├── assets/
├── styles/
├── scripts/
├── index.html
├── product.html
├── README.md
└── ...
