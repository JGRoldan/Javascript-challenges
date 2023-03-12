const icon = document.querySelector('.icon'),
    items = document.querySelectorAll('ul li')
    

items.forEach((item) => {

    item.addEventListener('click', (e) => {
        icon.innerHTML = e.target.textContent
        
        icon.classList.add('slide-up')
        setTimeout(() => {
            icon.classList.remove('slide-up')
        },800)
    })
})



