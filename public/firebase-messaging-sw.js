/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */

importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-messaging.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  new RegExp('https://firebasestorage.googleapis.com/v0/b/pinart-notifications.appspot.com/.*'),
  new workbox.strategies.StaleWhileRevalidate(),
);

// Initialize Firebase
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

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
