const items = document.querySelectorAll('ul li'),
    body = document.querySelector('.body')

items.forEach((item) => {

    item.addEventListener('click', (e) => {

        const icon = document.createElement('div')
        icon.classList.add('icon')
        
        icon.innerHTML = `
            ${e.target.textContent}
            <p>JGRDeveloper</p>
        `
        icon.classList.add('slide-up')
        icon.style.left = `${Math.random() * 50}%` 
        body.appendChild(icon)

        setTimeout(() => {
            icon.classList.remove('slide-up')
            body.removeChild(icon)
        },800)
    })
})
