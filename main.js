const { getApp } = require('graffiti')
const { document, window } = getApp().createWindow()

const el = document.createElement('div')
el.appendChild(document.createTextNode('Hello'))

document.body.appendChild(el)
