import logo from './logo.svg';
import React from "react";
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//https://towardsdatascience.com/build-a-simple-todo-app-using-react-a492adc9c8a4
function Todo({ todo, index, markTodo, removeTodo, makeTopThree }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" ,fontWeight: todo.topThree ? "bold" : ""}}>{todo.text}</span>
      {/* <span style={{ fontWeight: todo.topThree ? "bold" : ""}}>Top Three</span> */}
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>{' '}
        <Button variant="outline-info" onClick={() => makeTopThree(index)}>Top 3</Button>
      </div>
    </div>
  );
}
function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Brain Dump</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function topThree({todo}) {
  return (
    <p>hello</p>
  );
}
function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a todo",
      isDone: false,
      topThree: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const makeTopThree = index => {
    const newTodos = [...todos];
    newTodos[index].topThree = true;
    setTodos(newTodos);
  };
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    newTodos[index].topThree = false;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <p>TimeBoxing... Yay!</p>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                makeTopThree = {makeTopThree}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
        {/* <p>Top Three</p> */}
        
      </header>
    </div>
  );
}

export default App;
