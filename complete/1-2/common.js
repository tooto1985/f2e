﻿fetch('common.html').then(res => res.text()).then(text => {
    var div = document.createElement('div')
    div.innerHTML = text
    document.querySelector('#header').innerHTML = div.querySelector('#header').innerHTML
    document.querySelector('#footer').innerHTML = div.querySelector('#footer').innerHTML
})
