setInterval(() => {
  document.querySelector('h1').textContent = `Hello ${new Date().toLocaleTimeString()}`
}, 100)
