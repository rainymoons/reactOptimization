import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useCallback, useState } from "react";

export default function TodoList() {
  console.log("Run TodoList Component");

  const [todoList, setTodoList] = useState([]);

  // 재생성을 고려하는 함수, 의존배열
  // tempFunction에는 메모이제이션 되어있는 함수가 들어간다.
  const tempFunction = useCallback(() => {}, []);

  const onClickAddButtonHandler = useCallback(
    (task, dueDate) => {
      setTodoList((prevTodoList) => [
        {
          id: prevTodoList.length,
          isDone: false,
          task,
          dueDate,
        },
        ...prevTodoList,
      ]);
    },
    [] // setTodoList를 의존배열에 넣으면 setTodoList가 바뀔때 재생성해라. 근데 안바뀜. 왜? setTodoList가 안바뀌기 때문. 왜? useState꺼니까. todoList로 하면 바뀜.
  );

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
      <AddTodo
        // setTodoList={setTodoList}
        onClickAddButtonHandler={onClickAddButtonHandler}
      />
    </div>
  );
}
