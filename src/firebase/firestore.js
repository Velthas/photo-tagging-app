import { db } from './firebase-config';
import { getDoc, getDocs, addDoc, doc, collection } from 'firebase/firestore';

const Firestore = (() => {
  const getCoords = async (charName, level) => {
    const docRef = doc(db, 'Game', `level-${level}`, 'characters', `${charName}`);
    const char = await getDoc(docRef);
    return char.data();
  };

  const getScoreboard = async (level) => {
    const colRef = collection(db, 'Game', `level-${level}`, 'scoreboard');
    const docs = await getDocs(colRef);
    const parsedDocs = docs.docs.map(doc => doc.data());
    return parsedDocs;
  };

  const addScore = async (level, payload) => {
    const colRef = collection(db, 'Game', `level-${level}`, 'scoreboard');
    addDoc(colRef, payload);
  };
  
  return {getCoords, getScoreboard, addScore}
})();

export default Firestore;
