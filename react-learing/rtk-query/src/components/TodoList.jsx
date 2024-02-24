import { useState } from "react";
import { useGetTodosQuery } from "../api/apiSlice";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodo("");
  };

  const newItemSection = (
    <form action="">
      <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
      <button className="submit" onClick={(e) => handleSubmit(e)}>
        Add new
      </button>
    </form>
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = <div>
        {todos.map(todo => {
            return <h2>{todo.title}</h2>
        })}
    </div>
  } else if (isError) {
    content = <p>error</p>;
  }
  return (
    <div>
      <main>
        <h1>TodoList</h1>
        {newItemSection}
        {content}
      </main>
    </div>
  );
}

export default TodoList;
