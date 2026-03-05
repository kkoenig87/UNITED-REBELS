importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

// Das ist deine Firebase-Konfiguration aus deinem HTML-Code
firebase.initializeApp({
  apiKey: "AIzaSyD4M0EZiwohVckXIinS2_GwF1khlKfpgOk",
  authDomain: "hsg-rebelhub.firebaseapp.com",
  projectId: "hsg-rebelhub",
  storageBucket: "hsg-rebelhub.firebasestorage.app",
  messagingSenderId: "240623232398",
  appId: "1:240623232398:web:012f79f0ebfa20cc3ff0df"
});

const messaging = firebase.messaging();

// Dieser Block feuert, wenn die App im Hintergrund ist und eine Push-Nachricht reinkommt
messaging.onBackgroundMessage(function(payload) {
  console.log('Background Message empfangen: ', payload);
  
  const notificationTitle = payload.notification.title || 'UNITED REBELS';
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/apple-touch-icon.png', // Euer App Icon
    badge: '/apple-touch-icon.png',
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
