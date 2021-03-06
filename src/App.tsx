import React,{useState} from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialtodos:Todo[]=[
  {
    text:"new work",
    complete:false
  },
  {
    text:"test work",
    complete:false
  },
  {
    text:"start work",
    complete:false
  }
]


function App() {
  const [todos, setTodos] = useState<Todo[]>(initialtodos)

  const toggleTodo = (selectedTodo:Todo)=>{
    const newTodos = todos.map(todo=>{
      if(todo === selectedTodo){
        return{
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const addTodo:AddTodo=(text:string)=>{
    const newTodo = {text,complete:false}
    setTodos([...todos,newTodo])
  }

  const deleteTo:deleteTo = (todoKey:number)=>{
    const newTodos = todos.filter((todo,key)=>key !== todoKey)
    setTodos(newTodos)
  }


  return (
    <div className="App">
      <TodoList todos={todos} deleteTo={deleteTo} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
