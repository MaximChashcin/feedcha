import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCWJYAmM977L6XfIUTGMdBNvl-xqSxcY8s",
    authDomain: "fireshipproject-6c4b8.firebaseapp.com",
    projectId: "fireshipproject-6c4b8",
    storageBucket: "fireshipproject-6c4b8.appspot.com",
    messagingSenderId: "553801845828",
    appId: "1:553801845828:web:ef5cc1f03f4d1fa7f58011"
  };
  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();
  export const increment = firebase.firestore.FieldValue.increment;

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */

   export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
   }

   export function postToJSON(doc) {
    const data = doc.data();
    return {
      ...data,
      // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
      createdAt: data?.createdAt.toMillis() || 0,
      updatedAt: data?.updatedAt.toMillis() || 0,
    };
  }

  export const fromMillis = firebase.firestore.Timestamp.fromMillis;

  // Storage exports
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

