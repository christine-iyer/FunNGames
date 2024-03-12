import { useState } from "react"
import ToDoList from "./ToDoList"
import {
     arrayMove,
     SortableContext,
     verticalListSortingStrategy
     
   } from "@dnd-kit/sortable";
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
     
     function handleDragEnd(event) {
          console.log("Drag end called");
          const { active, over } = event;
          console.log("ACTIVE: " + active.id);
          console.log("OVER :" + over.id);
      
          if (active.id !== over.id) {
            setTodos((items) => {
              // const activeIndex = items.indexOf(active.id);
              // const overIndex = items.indexOf(over.id);
              const activeIndex = items.findIndex(({ id }) => id ===  active.id);
              const overIndex = items.findIndex(({ id }) => id ===  over.id);
              console.log(arrayMove(items, activeIndex, overIndex));
              return arrayMove(items, activeIndex, overIndex);
            });
          }
        }


     return (
          <div className="App">
               <ToDoList
                    todos={todos}
                    addTodo={addTodo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                    handleDragEnd={handleDragEnd}
               />
          </div>
     )
}