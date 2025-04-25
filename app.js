// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(() => {
      console.log('✅ Service Worker Registered');
    });
  });
}

// Fake certificate download
function downloadCertificate() {
  const link = document.createElement('a');
  link.href = 'data:text/plain;charset=utf-8,Certificate of Completion: CodTech Internship';
  link.download = 'CodTech_Certificate.txt';
  link.click();
}

// Push Notification
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    new Notification('Welcome to CodTech PWA Shop! 🎉');
  }
});
