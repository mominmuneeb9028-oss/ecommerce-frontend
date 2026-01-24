import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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
const db = getFirestore(app);

window.register = function(){

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirmpassword").value;

if(password !== confirm){
document.getElementById("msg").innerHTML="Passwords do not match";
return;
}

createUserWithEmailAndPassword(auth,email,password,username)
.then(async (userCredential)=>{
let user = userCredential.user;

await setDoc(doc(db,"users",user.uid),{
username: username,
email: email,
password: password,

}); 

alert("Registration Successful");
window.location.href = "/Home/Dashboard/profile.html";
})
.catch((error)=>{
document.getElementById("msg").innerHTML=error.message;
});

}

