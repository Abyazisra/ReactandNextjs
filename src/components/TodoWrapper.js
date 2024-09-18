import react ,{ useState } from 'react';
import Todoform from './Todoform';
import { nanoid } from 'nanoid';
import Todo from './Todo';

import TodoEditform from './TodoEditform';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState ([])

const addTodo = (todo) => {
  setTodos([...todos, {id: nanoid(), task: todo, comleted:false, isEditing:false}]);
}

const toggleComplete = (id) => {
  setTodos(
    todos.map((todo) => 
    todo.id === id ? {...todo, completed: !todo.completed} : todo)
  );
}
const editTodo = (id) => {
  setTodos(
    todos.map((todo) => 
    todo.id === id ? { ...todo,  isEditing: !todo.isEditing }: todo )
  );
}

const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));

}

const editTask = (task,id) => {
  setTodos(
    todos.map((todo) =>
    todo.id ===id ? {...todo, task, isEditing: !todo.isEditing} : todo)
  );
}

  return (
    
    
    <div className="TodoWrapper">
    <h1>Write down your Day</h1>
       <Todoform addTodo={addTodo}/>
       {todos.map((todo) =>
        todo.isEditing ? (
          <TodoEditform editTodo={editTask} task={todo} />
        ) :
       ( 
        <Todo 
        key={todo.id} 
        task={todo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleComplete={toggleComplete}
      
         />
       )

       )}
    </div>
    
  )
}


