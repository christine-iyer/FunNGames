import { useState } from "react"
import ToDoList from "./ToDoList"
export default function DndToDoList() {
     const [todos, setTodos] = useState([])

     const addTodo = (e) => {
          const newTodo = { text: e.target.value, id: Date.now(), completed: false }
          setTodos([newTodo, ...todos])
          e.target.value = ''
     }
     const completeTodo = (id, e) => {
          const todosCopy = [...todos]
          const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
          todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
          setTodos(todosCopy)
     }
     const editTodoText = (id, e) => {
          const todosCopy = [...todos]
          const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
          todosCopy[indexOfTodo].text = e.target.value
          setTodos([...todosCopy])
          e.target.value = ""
     }

     const deleteTodo = (id) => {
          const todosCopy = [...todos]
          const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
          todosCopy.splice(indexOfTodo, 1)
          setTodos([...todosCopy])
     };
     return (
          <div className="App">
               <ToDoList
                    todos={todos}
                    addTodo={addTodo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
               />
          </div>
     )
}