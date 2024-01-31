import React, { useState } from 'react'
import { taskItemType } from '../types/TaskTypes'
interface propType {
  task: taskItemType;
  editHandler: (id: string | number, newTitle: string) => void;
  deleteHandler: (id: string | number) => void;
  completedHandler: (id: string | number) => void
}
const TaskItem = ({ task , editHandler , deleteHandler, completedHandler}: propType) => {
  const [editTask, setEditTask] = useState<boolean>(false)
  const [editValue, setEditValue] = useState<taskItemType['title']>(task.title)
const handleSubmit = (e:any)=>{
  e.preventDefault()
  editHandler(task.id , editValue)
  setEditTask(false)
}
  return (
    <div className='task-item'>
      <input type='checkbox' checked={task.isCompleted} onChange={()=>completedHandler(task.id)} className='check' />
      {editTask ? 
      <form onSubmit={handleSubmit}>
      <input type='text' value={editValue} onChange={(e) => setEditValue(e.target.value)} />
      <button type='submit'>Done</button>
      </form> : <p>{task.title}</p> }
      <div className='btns'>
      <button onClick={()=>setEditTask(true)}>Edit</button>
      <button onClick={()=>deleteHandler(task.id)}>Delete</button>
      </div>
    </div>
  )
}

export default TaskItem
