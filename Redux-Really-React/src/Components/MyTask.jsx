import React from 'react'
import { editToTask, deleteToTask } from '../FEATURE-S'
import { useDispatch } from 'react-redux'

console.log(editToTask.type)

export const MyTask = ({taskData}) => {
const dispatch=useDispatch();
let {task,id}=taskData;
  return (
    <div>

<h4>{task}</h4>

<button onClick={()=>dispatch(editToTask(taskData)) }>Edit</button>
<button onClick={()=>dispatch(deleteToTask(id))}>Delete</button>

    </div>
  )
}
