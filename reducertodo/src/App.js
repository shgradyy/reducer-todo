import React from 'react';
import { Form } from './components/form';
import Todo from './components/todolist';
import { simpReducer, initialTodoState } from './reducers/reducerComp';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(initialTodoState, simpReducer);
  return (
    <div className="App">
      <Form dispatch={dispatch} />
      <Todo />
    </div>
  );
}

export default App;
