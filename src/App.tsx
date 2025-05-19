import * as React from "react";

const App = () => {
  const [todos, setTodos] = React.useState([
    { name: "Clean house", id: 1 },
    { name: "Fold clothes", id: 2 },
    { name: "Cook dinner", id: 3 },
    { name: "Pick up Jess", id: 4 },
  ]);

  const [todo, setTodo] = React.useState("");

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.length === 0 && <p>Add a todo.</p>}
      <ul>
        {todos.map((todo, key) => (
          <div>
            <li key={key}>{todo.name}</li>

            <button onClick={() => removeTodo(todo.id)}>x</button>
          </div>
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          todos.push({ name: todo, id: todos.length + 1 })
          setTodo("")
        }}
      >
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          name="Todo"
          id="todo"
          value={todo}
          autoFocus={true}
        />
        <button type="submit">Submit</button>
        <br />
        <label htmlFor="Task">Task</label>
      </form>
    </div>
  );
};

export default App;

