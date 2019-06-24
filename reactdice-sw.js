'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  'offline.html',
  'assets/1.png',
  'assets/2.png',
  'assets/3.png',
  'assets/4.png',
  'assets/5.png',
  'assets/6.png'
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    }).catch(function(err) {
      console.log(err);
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




// This is the "Offline page" service worker

const CACHE = "reactdice-page";
const offlineFallbackPage = "offline.html";

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function (event) {
  console.log("[React-Dice] Install Event processing");

  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('[React-Dice] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })

    // caches.open(CACHE).then(function (cache) {
    //   console.log("[React-Dice] Cached offline page during install");

    //   if (offlineFallbackPage === "offline.html") {
    //     return cache.add(new Response("Update the value of the offlineFallbackPage constant in the serviceworker."));
    //   }

    //   return cache.add(offlineFallbackPage);
    // })
  );
  self.skipWaiting();
});

// If any fetch fails, it will show the offline page.
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(function (error) {
      // The following validates that the request was for a navigation to a new document
      if (
        event.request.destination !== "document" ||
        event.request.mode !== "navigate"
      ) {
        return;
      }

      console.error("[React-Dice] Network request Failed. Serving offline page " + error);
      return caches.open(CACHE).then(function (cache) {
        return cache.match(offlineFallbackPage);
      });
    })
  );
});

// This is an event that can be fired from your page to tell the SW to update the offline page
self.addEventListener("refreshOffline", function () {
  const offlinePageRequest = new Request(offlineFallbackPage);

  return fetch(offlineFallbackPage).then(function (response) {
    return caches.open(CACHE).then(function (cache) {
      console.log("[React-Dice] Offline page updated from refreshOffline event: " + response.url);
      return cache.put(offlinePageRequest, response);
    });
  });
});
