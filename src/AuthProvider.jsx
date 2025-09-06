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
import { useQuery, useQueryClient } from '@tanstack/react-query';

const authContext = createContext(null);
export const useAuth = () => React.useContext(authContext);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const client = useQueryClient();

  const { data: userData, refetch: refetchUser } = useQuery({
    queryKey: ['userData', user?.email], // react-query will update when user changes
    enabled: !!user?.email, // only run if user has email
    queryFn: async () => {
      const email = user.email;
      const { data } = await axios.get(`/getUserByEmail/${email}`);
      console.log(data);
      return data[0];
    },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        if (user.email) {
          await axios.post(
            `/createUser?name=${user.displayName}&email=${user.email}`
          );
        }
      } else {
        setUser('userNotFound');
      }
    });

    return () => unsubscribe();
  }, [user, userData]);
  useEffect(() => {
    if (
      user &&
      userData &&
      (!localStorage.getItem('token') ||
        localStorage.getItem('token') === 'undefined' ||
        localStorage.getItem('token') === 'null')
    ) {
      const createToken = async () => {
        try {
          const res = await axios.post(`/createToken`, {
            email: user.email,
            name: user.displayName,
            company_id: userData.company_id,
            role: userData.role,
            uid: user.uid,
          });
          localStorage.setItem('token', res.data);
        } catch (err) {
          console.error('Token creation failed:', err);
        }
      };

      createToken();
    }
  }, [userData, user]);

  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // console.log(user);
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
        // console.log(user);
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
        // console.log(user);
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
          // console.log(user);
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
      setUser(null);
      // console.log('user signed out');
    });
  }

  // userData();
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
    userData,
  };

  return (
    <authContext.Provider value={val}>
      {/* <QueryClientProvider client={queryClient}>{children}</QueryClientProvider> */}
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
