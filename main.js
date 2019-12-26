const { createWindow } = require('graffiti')
const { document, window } = createWindow()

const el = document.createElement('div')
el.appendChild(document.createTextNode('Hello'))

document.body.appendChild(el)
