  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBygmGdoGl_LBhJwYVapD1m0bW46Fvjrv4",
    authDomain: "megamart-7f2e4.firebaseapp.com",
    projectId: "megamart-7f2e4",
    storageBucket: "megamart-7f2e4.firebasestorage.app",
    messagingSenderId: "633085427770",
    appId: "1:633085427770:web:47e4c208014cc00f983503"
  };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  window.login = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Successful");
        window.location.href = "/Home/Dashboard/profile.html"; 
      })
      .catch((error) => {
        alert("Invalid Email or Password");
      });
  };


  