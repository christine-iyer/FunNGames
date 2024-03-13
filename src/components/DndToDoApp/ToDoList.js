import Todo from './Todo'
import { SortableItem } from './SortableItem'
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {arrayMove,SortableContext,verticalListSortingStrategy} from "@dnd-kit/sortable";
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

<Container className="nowlist">
 <h1>Todo Items</h1>
       {todos.filter((i) => !i.completed).map((todo) => {
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
</Container>

<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Container className="p-3" style={{  backgroundColor:'rgba(23,155,87,0.3)' }} align="center">
          <h3>To Dos in a Sortable Fashion</h3>
          <SortableContext items={todos} strategy={verticalListSortingStrategy}>
           {todos
           .filter((i)=> !i.completed)
           .map(({id, text}) => <SortableItem key={id} id={id} text={text}  />)}
           <button onClick={deleteTodo}>X</button>
          </SortableContext>
          </Container>
      </DndContext>


          <div className="neverlist">


<h1>Completed Items </h1>
<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Container className="p-3" style={{  backgroundColor:'rgba(23,155,87,0.3)' }} align="center">
          <h3>Key Wins in a Sortable Fashion</h3>
          <SortableContext items={todos} strategy={verticalListSortingStrategy}>
           {todos
           .filter((i)=> i.completed)
           .map(({id, text}) => <SortableItem key={id} id={id} text={text} deleteTodo={deleteTodo}>
            
           </SortableItem>)}
       

          </SortableContext>
          </Container>
      </DndContext>


            {/* <ul>
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
            </ul> */}
          </div>
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </>
  )
}