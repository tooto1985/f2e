fetch('header.html').then(res => res.text()).then(text => {
    document.querySelector('#header').innerHTML = text
})
fetch('footer.html').then(res => res.text()).then(text => {
    document.querySelector('#footer').innerHTML = text
})
