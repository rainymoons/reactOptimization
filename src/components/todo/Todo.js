import todoStyle from "./Todo.module.css";

//onClickDoneHandler이 앱에 있는 스테이트를 바꾸는 것
export default function Todo({ todo, setTodoList }) {
  // todo는 객체리터럴이므로 분해
  const { id, isDone, task, dueDate } = todo;

  // todo의 완료상태 여부에 따라 css 다르게 적용
  const itemStyle = {
    color: isDone ? "#CCC" : "#333",
    textDecoration: isDone ? "line-through" : "none",
  };

  const onClickDoneHandler = (event) => {
    // TodoContext에 있는 contextDone 함수 호출

    const checkedDoneId = parseInt(event.target.value);
    const isChecked = event.target.checked;

    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => {
        if (todo.id === checkedDoneId) {
          todo.isDone = isChecked; // 체크하면 바꿔서 넣어라.
        }
        return todo; // 여기서 반환하는 대상은 Map임. 그러면 state를 새로 만드는 것(메모리 주소가 바뀐다.)
      })
    );
  };

  return (
    <li className={todoStyle.todoItem} style={itemStyle}>
      <div className={todoStyle.inputWrapper}>
        <input
          defaultValue={id}
          type="checkbox"
          onChange={onClickDoneHandler}
          checked={isDone ? "checked" : ""}
        />
      </div>
      <div className={todoStyle.todoName}>{task}</div>
      <div>{dueDate}</div>
    </li>
  );
}
