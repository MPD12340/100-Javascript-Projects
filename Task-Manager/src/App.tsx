import { useState, useEffect } from 'react'
import { taskItemType } from './types/TaskTypes'
import TaskItem from './components/TaskItem'
import './sass/todo.scss'
import { getTasks, saveTasks } from './utils/data'
const App = () => {
  const [tasks, setTasks] = useState<taskItemType[]>(getTasks())
  const [title, setTitle] = useState<taskItemType['title']>('')
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (title === '') return
    const newTask: taskItemType = {
      title,
      isCompleted: false,
      id: String(Math.random())
    }
    setTasks(prev => [...prev, newTask])
    setTitle('')
  }

  const completeHandler = (id: string | number) => {
    const completedTasks = tasks.map((task: taskItemType) => {
      if (task.id === id) task.isCompleted = !task.isCompleted
      return task
    })
    setTasks(completedTasks)
  }

  const editHandler = (id: string | number, newTitle: string) => {
    const updatedTasks = tasks.map((task: taskItemType) => {
      if (task.id === id) task.title = newTitle
      return task
    })
    setTasks(updatedTasks)
  }
  const deleteHandler = (id: string | number) => {
    const remainingTasks = tasks.filter((task) => task.id !== id)
    setTasks(remainingTasks)
  }

  useEffect(() => { saveTasks(tasks) }, [tasks])
  return (
    <div className='task-page'>
      <h1>Task Manager</h1>
    <div className='task-container'>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type='submit'>Add Task</button>
      </form>
      <hr />
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} editHandler={editHandler} deleteHandler={deleteHandler} completedHandler={completeHandler} />
      ))}
    </div>
    </div>
  )
}

export default App