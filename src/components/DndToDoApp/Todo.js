import { useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap//Button";
import Form from "react-bootstrap/Form";
import CloseButton from 'react-bootstrap/CloseButton';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Todo({ todo, completeTodo, editTodoText, deleteTodo }) {
  const [showInput, setShowInput] = useState(false)
  return (

    <Card>
      <div className="left">
        <Form.Text className='card-title'
          onClick={(e) => {
            setShowInput(!showInput)
          }}
        >
          {todo.text}
        </Form.Text>
        <Form.Control
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editTodoText(todo.id, e)
              setShowInput(false)
            }
          }}
        />
      </div>
      <label className="middle">
        
        <Form.Check
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            completeTodo(todo.id, e)
          }}
        />
      </label>
      <CloseButton
      className='button'
        checked={todo.completed}
        onClick={(e) => {
          deleteTodo(todo.id)
        }}
      >
        
      </CloseButton>
    </Card>
  )
}