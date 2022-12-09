import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDYZ1pqgUZWENKmgjlkIT3lhXMzbIvWPlo',
  authDomain: 'tag-em-all.firebaseapp.com',
  projectId: 'tag-em-all',
  storageBucket: 'tag-em-all.appspot.com',
  messagingSenderId: '697093076151',
  appId: '1:697093076151:web:a363b534f965b216e44932',
  measurementId: 'G-Y645MJESES',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
