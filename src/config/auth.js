import { auth } from "./firebaseConfig"; import { 
createUserWithEmailAndPassword, 
signInWithEmailAndPassword } from "firebase/auth";
// Sign Up Function
export const signUp = async (email, password) => { try 
  {
    const userCredential = await 
    createUserWithEmailAndPassword(auth, email, 
    password); return userCredential.user;
  } catch (error) {
    console.error(error); return null;
  }
};
// Sign In Function
export const signIn = async (email, password) => { try 
  {
    const userCredential = await 
    signInWithEmailAndPassword(auth, email, password); 
    return userCredential.user;
  } catch (error) {
    console.error(error); return null;
  }
};
