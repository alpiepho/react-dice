'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  'offline.html',
  'images/balloon_128x128.png',
  'images/balloon_144x144.png',
  'images/balloon_152x152.png',
  'images/balloon_192x192.png',
  'images/balloon_256x256.png',
  'images/balloon_500x500.png',
  'images/firmware-broadcom-sas-sata-controller.jpg',
  'images/firmware-hp-digital-camera.jpg',
  'images/irmware-hp-digital-entertainment.jpg',
  'images/firmware-hp-dvd-writer.jpg',
  'images/firmware-hp-flatbed-scanner.jpg',
  'images/firmware-pelco-sarix_1.jpg',
  'images/pure-css-cellphone1.jpg',
  'images/pure-css-cellphone2.jpg',
  'images/pure-css-laptop.jpg',
  'images/pure-css-monitor.jpg',
  'images/screenshot-aws-scratch.jpg',
  'images/screenshot-barchart.jpg',
  'images/screenshot-commandline-heros.jpg',
  'images/screenshot-fcc-dv-cert.png',
  'images/screenshot-fcc-fe-cert.png',
  'images/screenshot-forcedirect.png',
  'images/screenshot-gameoflife.png',
  'images/screenshot-gc-app.png',
  'images/screenshot-gcstats.png',
  'images/screenshot-heatmap.png',
  'images/screenshot-joe-cool.png',
  'images/screenshot-js-calculator.png',
  'images/screenshot-old-portfolio.png',
  'images/screenshot-player-template.png',
  'images/screenshot-pmodoro.png',
  'images/screenshot-project-portfolio.png',
  'images/screenshot-purecss.png',
  'images/screenshot-quote.png',
  'images/screenshot-roguelike.png',
  'images/screenshot-rpn-hex-calc.png',
  'images/screenshot-rpn-hex-chrome.png',
  'images/screenshot-rpn-hex-vscode.png',
  'images/screenshot-sample-app.png',
  'images/screenshot-scatter.png',
  'images/screenshot-simon.png',
  'images/screenshot-terms3.png',
  'images/screenshot-terms4.png',
  'images/screenshot-tic-tac-toe.png',
  'images/screenshot-tribute.png',
  'images/screenshot-ttt-watir.png',
  'images/screenshot-twitch.png',
  'images/screenshot-voting-app.png',
  'images/screenshot-weather.png',
  'images/screenshot-wikipedia.png',
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  // CODELAB: Add fetch event handler here.

});
