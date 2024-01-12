import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const providerLogin = (provider) => {
          setLoading(true);
          return signInWithPopup(auth, provider)
     }

     const signIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     const logOut = () => {
          setLoading(true);
          return signOut(auth);
     }

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               console.log('current user is: ', currentUser)
               setUser(currentUser);
               setLoading(false);
          })
          return () => {
               unsubscribe();
          }
     }, [])
     const authInfo = {providerLogin, user, loading, setLoading, logOut,signIn, createUser}
     return (
          <div>
               <AuthContext.Provider value={authInfo}>
                    {children}
               </AuthContext.Provider>
               
          </div>
     );
};

export default AuthProvider;