import firebase from "firebase/app";

import "firebase/firestore";

firebase.initializeApp({
	apiKey: "AIzaSyAZu_SXp49wF5-_Xy4cqC0IaDl-blxvBwk",
	authDomain: "evernote-clone-82605.firebaseapp.com",
	projectId: "evernote-clone-82605",
	storageBucket: "evernote-clone-82605.appspot.com",
	messagingSenderId: "528232114591",
	appId: "1:528232114591:web:21a52524025d76c70b35aa",
	measurementId: "G-8HVS6Z1W78",
});

export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebase;
