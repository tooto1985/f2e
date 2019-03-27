fetch('header.html').then(res => res.text()).then(html => {
    document.querySelector('#header').innerHTML = html
})
fetch('footer.html').then(res => res.text()).then(html => {
    document.querySelector('#footer').innerHTML = html
})
