import React, {useState} from 'react'

const Todoform = ({addTodo}) => {
    const [value, setvalue] = useState("")

    const handlesubmit= (e)=> {

        e.preventDefault();

        if (value){
            addTodo(value);
            setvalue("");
        }
    };

  return (
    <form onSubmit={handlesubmit} className='Todoform'> 
      <input  value={value} onChange={(e)=> setvalue(e.target.value)} className='todo-input' type='text' placeholder='Enter to do Task' />  
       <button type='submit' className='todo-btn'>Include Task</button>
    </form>
  )
}

export default Todoform
 

