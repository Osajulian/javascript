let task = new Object();

task.title = 'my task';
task.description = 'my description';
task.arthur = 'Julian'

Object.defineProperty(task, 'title', {
    value: 'my task II2',
    configurable: true
})

const urgentTask = Object.create(task)

Object.defineProperty(urgentTask, 'title', {
    value: 'UrgerntTask',
    writable: false
})

console.log(urgentTask.title = 'UG')

console.log(urgentTask.title)

// task.title = 'new Name'
// console.log(task.title);