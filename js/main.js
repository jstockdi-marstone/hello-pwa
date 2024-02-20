window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

const installMessage = document.getElementById('install-message');

// Detect platform and update message
if (navigator.userAgent.match(/.(iPhone|iPod|iPad).*/) && 'ontouchstart' in document) {
  installMessage.innerText = "Tap \"Share\" > \"Add to Home Screen\"";
} else if (navigator.userAgent.match(/Android/i)) {
  installMessage.innerText = "Tap the menu button > \"Add to Home Screen\"";
} else {
  installMessage.innerText = "Click the menu button and install as an app";
}


