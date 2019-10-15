import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './secrets';

const base = firebase.initializeApp(firebaseConfig);

export default base;
