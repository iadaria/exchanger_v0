//This is for Web application
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/database';
// //import 'firebase/auth';
// import 'firebase/storage';

// var firebaseConfig = {
//     apiKey: "AIzaSyCCpagqLohH4pv1F3H4leV8jhMl7E-JYSE",
//     authDomain: "exchanger-v0.firebaseapp.com",
//     databaseURL: "https://exchanger-v0.firebaseio.com",
//     projectId: "exchanger-v0",
//     storageBucket: "exchanger-v0.appspot.com",
//     messagingSenderId: "1088744563414",
//     appId: "1:1088744563414:web:988c007423cbe4e10f1f77",
//     measurementId: "G-0CM8RM54RG"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.firestore();
// // firebase.analytics();

// export default firebase;

/* Firebase for React Native */
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth';
import '@react-native-firebase/database';

firebase.firestore();

export default firebase;
