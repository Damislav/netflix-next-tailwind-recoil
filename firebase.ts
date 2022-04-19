import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCUuia_4nMdhTxpHNMNNEvX4ysuKBYP2bc',
  authDomain: 'netflix-clone-e0e16.firebaseapp.com',
  projectId: 'netflix-clone-e0e16',
  storageBucket: 'netflix-clone-e0e16.appspot.com',
  messagingSenderId: '566561103128',
  appId: '1:566561103128:web:7cd201dfdd598f99abd26d',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
