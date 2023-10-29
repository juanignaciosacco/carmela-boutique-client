import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 } from 'uuid';
import heic2any from 'heic2any';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoXqP4L44z16TABUbHt3rFVi9QFFAJDKo",
  authDomain: "carmela-boutique.firebaseapp.com",
  projectId: "carmela-boutique",
  storageBucket: "carmela-boutique.appspot.com",
  messagingSenderId: "243966268322",
  appId: "1:243966268322:web:e6c94311742cb80a8758fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)


export async function deletFile(file) {
  const desertRef = ref(storage, file)
  await deleteObject(desertRef).then(() => {
    alert("Se borro la imagen exitosamente")
  }).catch((error) => {
    console.log(error)
  })
}

export async function uploadFile(file, imageHeic) {
  let name = ""
  if (file.name === undefined) {
    name = v4() + imageHeic.name
  } else {
    name = v4() + file.name
  }
  const storageRef = ref(storage, name)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}


export async function convertHeic(imageHeic) {
  let img
  await heic2any({ blob: imageHeic, toType: "image/jpg", quality: 1 })
    .then((newImage) => {
      img = newImage
    })
    .catch((error) => {
      console.log(error)
    })
  const ur = await uploadFile(img, imageHeic)
  return ur
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
