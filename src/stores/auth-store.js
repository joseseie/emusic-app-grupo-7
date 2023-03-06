import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from 'boot/firebase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userAuth: null,
  }),
  getters: {

  },
  actions: {

    createAccount () {

      let email = 'teste@gmail.com'
      let password = '123456'

      console.log('createAccount() called...')

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log('user auth: ', user)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log('Firebase auth error: ', errorMessage)
          // ..
        });

    },

    loginWithPassword () {

      let email = 'teste@gmail.com'
      let password = '123456'

      console.log('loginWithPassword() called...')

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('User autenticado: ', user)
          // ...
        })
        .catch((error) => {

          const errorCode = error.code;
          const errorMessage = error.message;

          console.log('Firebase auth Login error: ', errorMessage)

        });

    },

    listenAuthChange () {

      console.error('listenAuthChange() called...')

      onAuthStateChanged(auth, (user) => {
        if (user) {

          this.userAuth = user

          console.log('Listened, user auth: ', user)

        }
      });

    },

    logout () {

      console.error('logout() called...')

      signOut(auth).then(() => {

        this.userAuth = null

      }).catch((error) => {
        // An error happened.
      });


    }

  },
});
