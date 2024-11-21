import { useRef } from "react";
import addTodoStyle from "./AddTodo.module.css";
import { Alert } from "../ui/Modal";

export default function AddTodo({ setTodoList }) {
  // ref부터 만든다.
  const taskRef = useRef();
  const dueDateRef = useRef();
  const alertRef = useRef();

  // task 내용과 duedate내용을 가져와서 setTodoList에 추가
  const onClickAddButtonHandler = () => {
    const task = taskRef.current.value;
    const dueDate = dueDateRef.current.value;

    let alertMessages = [];
    if (!task) {
      alertMessages.push("task를 입력하세요.");
    }

    if (!dueDate) {
      alertMessages.push("due date를 입력하세요.");
    }

    // Modal을 위한 조건
    if (!task || !dueDate) {
      // show에 전달할 배열을 만들어서 넣어줘야 함.
      alertRef.current.show(alertMessages);
      //alert("내용을 입력해야 합니다.");
      return;
    }
    setTodoList((prevTodoList) => [
      {
        id: prevTodoList.length,
        isDone: false,
        task,
        dueDate,
      },
      ...prevTodoList,
    ]);

    // 입력값 초기화
    taskRef.current.value = "";
    dueDateRef.current.value = "";
  };

  return (
    <div className={addTodoStyle.addTodoWrapper}>
      <label className={addTodoStyle.addTodoLabel} htmlFor="task">
        Task
      </label>
      <input
        className={addTodoStyle.addTodoInput}
        type="text"
        id="task"
        placeholder="Input Task"
        ref={taskRef}
      />

      <label className={addTodoStyle.addTodoLabel} htmlFor="due-date">
        Due Date
      </label>
      <input type="date" id="due-date" ref={dueDateRef} />

      <button
        className={addTodoStyle.addTodoButton}
        onClick={onClickAddButtonHandler}
      >
        등록
      </button>

      <Alert alertRef={alertRef} />
    </div>
  );
}
