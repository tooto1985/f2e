fetch('common.html').then(res => res.text()).then(html => {
    var div = document.createElement('div')
    div.innerHTML = html
    document.querySelector('#header').innerHTML = div.querySelector('#header').innerHTML
    document.querySelector('#footer').innerHTML = div.querySelector('#footer').innerHTML
})
