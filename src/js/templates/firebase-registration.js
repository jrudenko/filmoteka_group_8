// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut, 
}
from 'firebase/auth';
import '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
import { error, success, info } from '@pnotify/core';

const refs = {
    // Firebase
  registerForm: document.querySelector('.modal__form-registration'),
  loginForm: document.querySelector('.modal__form-login'),
  signInModal: document.querySelector('.backdrop[data-modal-signin]'),
  signUpBtn: document.querySelector('.user-box__signup'),
  signInBtn: document.querySelector('.user-box__signin'),
  signIn: document.querySelector('.modal__button'),
  logOutBtn: document.querySelector('.logout-js'),
  signUpModal: document.querySelector('.backdrop[data-modal-signup]'),
  signUpNowBtn: document.querySelector('.signup-now__button'),
  googleBtn: document.querySelector('.google-signin'),
  showPassBtn: document.querySelector('.show-pass'),
  fieldPass: document.querySelector('.pass-js'),
  signupWpapper:document.querySelector('.signup-wpapper'),
}


const firebaseConfig = {
  apiKey: "AIzaSyAhw4vdrq6zh6xoucOyfBfmVPrQ7kH8128",
  authDomain: "filmoteka-goit-group-8.firebaseapp.com",
  databaseURL: "https://filmoteka-goit-group-8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filmoteka-goit-group-8",
  storageBucket: "filmoteka-goit-group-8.appspot.com",
  messagingSenderId: "90971574603",
  appId: "1:90971574603:web:fb9d31de5aec56a6bd18ce",
  measurementId: "G-685DL9GM6N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

refs.signUpBtn.addEventListener('click', openSignUpModal);
refs.signInBtn.addEventListener('click', openSignInModal);
refs.logOutBtn.addEventListener('click', LogOutFilmoteka);
refs.signUpNowBtn.addEventListener('click', signUpNow);
refs.loginForm.addEventListener('sumbit', signinEmailAndPassword);
refs.googleBtn.addEventListener('click', signInGoogleAcount);
refs.registerForm.addEventListener('submit', getDataForm);
refs.showPassBtn.addEventListener('click', showPass);

// создать акаунт
function getDataForm(e) {
  e.preventDefault();
  let password = '';
  const email = e.currentTarget.email.value;
  if (e.currentTarget.pass.value === e.currentTarget.secondpass.value) {
    password = e.currentTarget.pass.value;
  } else {
    error({
      title: 'Error',
      text: 'Passwords did not match',
      delay: 2000,
    });
  }
  
  console.log(email, password);
  refs.signUpModal.classList.add('hide');


  // createNewUser(email, password);
}

// function createNewUser(email, password) {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       document.body.style.overflow = 'visible';
//       document.querySelector('.signup-wpapper').classList.remove('load');
//       success({
//         title: 'Success!',
//         text: 'Your account successfully created.',
//         delay: 1000,
//       });
//     })

//     .then(() => {
//       refs.signUpModal.classList.add('hide');
//       e.currentTarget.email.value = '';
//       e.currentTarget.pass.value = '';
//       e.currentTarget.secondpass.value = '';
//     })
//     .catch(
//   );
// }


// вход в систему
function signinEmailAndPassword(e) {
  e.preventDefault();
  const email = e.currentTarget.email.value;
  const password = e.currentTarget.pass.value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    // Signed in
    const user = userCredential.user;
    document.body.style.overflow = 'visible';
    refs.signupWpapper.classList.remove('load');
  })
  .then(() => {
    refs.signInModal.classList.add('hide');
    e.currentTarget.email.value = null;
    e.currentTarget.pass.value = null;
    window.location.reload(true);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    error({
      title: 'Error',
      text: errorMessage,
      delay: 2000,
    });
    refs.signupWpapper.classList.remove('load');
  })
  .finally(() => {
    refs.loginForm.classList.remove('hide');
  });
}

// получить данные пользоваткля
onAuthStateChanged(auth, (user) => {
  if (user) {
    refs.signUpBtn.classList.add('hide');
    refs.signInBtn.classList.add('hide');
    refs.logOutBtn.classList.remove('hide');
    
    const uid = user.uid;
    success({
      title: 'Success!',
      text: 'You have successfully signed in.',
      delay: 1000,
    });
  } else {
    // User is signed out
    refs.signUpBtn.classList.remove('hide');
    refs.signInBtn.classList.remove('hide');
    refs.logOutBtn.classList.add('hide');
  }
});

// вход Google
function signInGoogleAcount() {
  signInWithPopup(auth, provider)
  .then(result => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    if (user) {
      refs.signUpBtn.classList.add('hide');
      refs.signInBtn.classList.add('hide');
      refs.logOutBtn.classList.remove('hide');
      window.location.reload();
    }
  })
  .catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
  });
}

function openSignUpModal() {
  refs.signUpModal.classList.remove('hide');
  refs.signUpModal.addEventListener('click', hideSignUpModal);
  window.addEventListener('keydown', hideSignUpEsc);
  document.body.style.overflow = 'hidden';
}

function openSignInModal() {
  refs.signInModal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  refs.signInModal.addEventListener('click', hideSignInModal);
  window.addEventListener('keydown', hideSignInEsc);
}

function showPass() {
  if (refs.fieldPass.type === 'password') {
    refs.fieldPass.type = 'text';
  } else {
    refs.fieldPass.type = 'password';
  }
}

function signUpNow() {
  refs.signInModal.classList.add('hide');
  refs.signUpModal.classList.remove('hide');
  refs.signUpModal.addEventListener('click', hideSignUpModal);
  window.addEventListener('keydown', hideSignUpEsc);
}

// спрятать модалки
function hideSignInModal(e) {
  if (e.currentTarget === e.currentcurrentTarget) {
    refs.signInModal.classList.add('hide');
    document.body.style.overflow = 'visible';
  }
}

function hideSignUpModal(e) {
  if (e.currentTarget === e.currentcurrentTarget) {
    refs.signUpModal.classList.add('hide');
    document.body.style.overflow = 'visible';
  }
}

function hideSignInEsc(e) {
  if (e.key === 'Escape') {
    document.body.style.overflow = 'visible';
    refs.signInModal.classList.add('hide');
  }
}

function hideSignUpEsc(e) {
  if (e.key === 'Escape') {
    document.body.style.overflow = 'visible';
    refs.signUpModal.classList.add('hide');
  }
}

// выйти с акаунтa
function LogOutFilmoteka() {
  signOut(auth)
  .then(() => {
    info({
      text: 'You have been logged out.',
      delay: 1000,
    });
  });
}



