import React, { useState } from 'react'

const TodoEditform = ({editTodo, task}) => {

    const[value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        
          e.preventDefault();
          
          editTodo(value, task.id);
          setValue(" ")
        };


  return (
    <form onSubmit ={handleSubmit} className='TodoForm'>
      <input type='text' value={value} className="todo-input" placeholder='Update task' onChange={(e) => setValue(e.target.value) } />

      <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  )
}

export default TodoEditform
