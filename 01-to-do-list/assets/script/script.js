const form = document.querySelector('.form-container')
const button = document.querySelector('.add-todo')
const section = document.querySelector('.section-cards')
let todos = []

const getFromLocalStorage = () => {
    todos = JSON.parse(localStorage.getItem('tasks')) || []
    renderTodos()
}

const addTask = () => {
    const inputText = document.getElementById('input-text')
    if (inputText.value === '') {

        //Task is empty
        const error = document.querySelector('.error')
    
        error.style.opacity = '1'
        error.style.visibility = 'visible'
        setTimeout(() => {
            error.style.opacity = '0'
            error.style.visibility = 'hidden'
        }, 1500);
        return
    }

    //Create a new task like an object
    const taskObject = {
        task: inputText.value,
        id : Date.now(),
        date : new Date().toLocaleDateString(), 
    }
    todos = [...todos, taskObject]
    renderTodos()
    
    //Clear input text after the task
    inputText.value = ''
}

const renderTodos = () => {

    section.innerHTML = ''

    if (todos.length > 0) {
        todos.forEach(todo => {

            const {task, id, date} = todo
            const card = document.createElement('div')
            card.classList.add('card')

            card.innerHTML = `
            <div class="container-card" data-key='${id}'>
                <button class="delete-icon">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <div class="todo-text">
                    ${task}
                </div>
                <div class="todo-date">
                    ${date}
                </div>
            </div>
            `

            section.insertBefore(card,section.firstChild)
        })
    }

    addToLocalStorage()
}

const addToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(todos))
}

const deleteTask = (taskKey) => {
    const idTask = Number(taskKey)
    todos = todos.filter(todo => todo.id !== idTask)
    renderTodos()
}
document.addEventListener('click', e => {
    if (e.target.classList.contains('delete-icon')) {
        e.stopPropagation()
        deleteTask(e.target.parentElement.getAttribute('data-key'))
    }
    if (e.target.classList.contains('fa-trash')) {
        e.stopPropagation()
        deleteTask(e.target.parentElement.parentElement.getAttribute('data-key'))
    }
})

document.addEventListener('DOMContentLoaded', getFromLocalStorage)

form.addEventListener('submit', e => {
    e.preventDefault()
    addTask()
})