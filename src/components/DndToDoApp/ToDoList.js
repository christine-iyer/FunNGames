import Todo from './Todo'


export default function TodoList({
  todos,
  addTodo,
  completeTodo,
  deleteTodo,
  editTodoText
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
          <div className="nowlist">
            {/* <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Container className="p-3" style={{  backgroundColor:'rgba(23,155,87,0.3)' }} align="center">
          <h3>FunNGames</h3>
          <SortableContext
            items={abcs}
            strategy={verticalListSortingStrategy}
          >
           {abcs.map(({id, value}) => <SortableItem key={id} id={id} value={value} />)}
          </SortableContext>
          </Container>
      </DndContext> */}

            <h1>Todo Items</h1>
            <ul>
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
            </ul>

          </div>

          <div className="neverlist">
            {/* <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Container className="p-3" style={{  backgroundColor:'rgba(23,155,87,0.3)' }} align="center">
          <h3>FunNGames</h3>
          <SortableContext
            items={abcs}
            strategy={verticalListSortingStrategy}
          >
           {abcs.map(({id, value}) => <SortableItem key={id} id={id} value={value} />)}
          </SortableContext>
          </Container>
      </DndContext> */}

            

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
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </>
  )
}