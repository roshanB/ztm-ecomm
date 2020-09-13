import firebase from "firebase/app"; //Tried_import_firebase_utility_library
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAkaiPTWkGrQvATLr6uq1FuufmiU2VFmCk",
  authDomain: "ztm-ecomm.firebaseapp.com",
  databaseURL: "https://ztm-ecomm.firebaseio.com",
  projectId: "ztm-ecomm",
  storageBucket: "ztm-ecomm.appspot.com",
  messagingSenderId: "109023820095",
  appId: "1:109023820095:web:064cf6511ab1a12f2d3b8a",
  measurementId: "G-JDCCPJCZ9M",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // Tried_see_path_direct_to_document documentRef
  const userSnap = await userRef.get(); // Tried_see_await documentSnapshot

  if (!userSnap.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //Tried_using_set_to_create
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user in firestore ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth(); //Tried_firebase_auth_possible_by_line 3
export const firestore = firebase.firestore();

//Tried_google_authentication_utility

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //Tried_always_trigger_google_popup
export const signInWithGoogle = () => auth.signInWithPopup(provider); //Tried_sign_in_with_google_popup

export default firebase; //Tried_exporting_firebase_in_case_we_need_whole_library
