/* eslint-disable import/no-unresolved */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCNEWtS7BhcFoSu8M6n4I83_Rh2wQsiAqo',
  authDomain: 'pinart-notifications.firebaseapp.com',
  databaseURL: 'https://pinart-notifications.firebaseio.com',
  projectId: 'pinart-notifications',
  storageBucket: 'pinart-notifications.appspot.com',
  messagingSenderId: '597460722544',
  appId: '1:597460722544:web:d19261a0376fd018ba25b5',
};
firebase.initializeApp(config);

console.log(firebase.apps.length);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

db.enablePersistence({ synchronizeTabs: true });

const storage = firebase.storage();

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log('Message: ', payload);
  const options = {
    body: payload,
  };
  // eslint-disable-next-line no-unused-vars
  const notification = new Notification('Notificación', options);
  window.alert(payload.notification.body);
});


export default {
  db,
  storage,
  messaging,
};
