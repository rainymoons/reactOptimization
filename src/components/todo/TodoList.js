import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useState } from "react";

export default function TodoList() {
  console.log("Run TodoList Component");

  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <h4>
        완료: {todoList.filter((todo) => todo.isDone).length} / 미완료:{" "}
        {todoList.filter((todo) => !todo.isDone).length}
      </h4>
      <ul>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
        ))}
      </ul>
      <AddTodo setTodoList={setTodoList} />
    </div>
  );
}
