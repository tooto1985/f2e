fetch('Menu.html').then(res => res.text()).then(text => {
  document.querySelector('.menu').innerHTML = text
  document.querySelectorAll('a').forEach(a => {
    if (a.pathname == location.pathname) {
      a.setAttribute('class', 'selected')
    }
  })
  if (!document.querySelector('a.selected')) {
    document.querySelectorAll('a')[0].setAttribute('class', 'selected')
  }
})
