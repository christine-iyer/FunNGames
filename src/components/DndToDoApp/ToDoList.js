import Todo from './Todo'
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
  
} from "@dnd-kit/sortable";
import { Container } from 'react-bootstrap';

export default function TodoList({
  todos,
  addTodo,
  completeTodo,
  deleteTodo,
  editTodoText,handleDragEnd
}) {
  
  
  return (
    <>

      <div className='newtodo'>
        <h1>Create Todo</h1>
        <input
          type="text"
          onKeyDown={(e) => {
            e.key === "Enter" && addTodo(e)
          }}
        />
      </div>
      {todos.length ? (
        <>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >


          <Container className="nowlist">


            <h1>Todo Items</h1>
            <SortableContext items={todos}>
              {todos
                .filter((i) => !i.completed)
                .map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                      editTodoText={editTodoText}
                    />
                  )
                })}
            </SortableContext>

          </Container>

          <div className="neverlist">


            

            <h1>Completed Items </h1>
            <ul>

              {todos
                .filter((i) => i.completed)
                .map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                      editTodoText={editTodoText}
                    />
                  )
                })}
            </ul>
          </div>
          </DndContext>
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </>
    
  )

}