import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
  validatePassword,
} from 'firebase/auth';
import auth from './firebase.config';
import axios from 'axios';
const authContext = createContext(null);
export const useAuth = () => React.useContext(authContext);
function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    function unsubscribe() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setUser(user);
          console.log(user);
          axios.post(
            `${import.meta.env.VITE_BACKEND}/createUser?name=${
              user.displayName
            }&email=${user.email}&token=${user.accessToken}`
          );
          // ...
        } else {
          setUser(null);
          console.log('user signed out');
          // User is signed out
          // ...
        }
      });
    }
    unsubscribe();
    return () => {
      unsubscribe();
    };
  }, [auth]);
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        // setUser(null);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  function loginWithX() {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        // setUser(null);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);
        // ...
      });
  }
  function loginWithEmail(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
      });
  }
  function signUpWithEmail(name, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          // Profile updated!
          // ...
          const user = auth.currentUser;
          console.log(user);
          setUser(user);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
        // ..
      });
  }
  function logout() {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(undefined);
      console.log('user signed out');
    });
  }
  // get userData
  function getUserData(email) {
    console.log(email);
    axios
      .get(`${import.meta.env.VITE_BACKEND}/getUserByEmail/${email}`)
      .then((res) => {
        console.log(res.data);
      });
  }

  // getUserData();
  //validate Password
  function validatePass(password) {
    const status = validatePassword(getAuth(), password);
  }
  const val = {
    // auth,
    loginWithGoogle,
    loginWithX,
    loginWithEmail,
    signUpWithEmail,
    logout,
    user,
    validatePass,
    getUserData,
  };

  return <authContext.Provider value={val}>{children}</authContext.Provider>;
}

export default AuthProvider;
