import Calc from "./components/memo/Calc";
import TodoList from "./components/todo/TodoList";

export default function App() {
  console.log("Run App Component");
  return (
    <>
      <Calc from={1} to={100000000} />
      <TodoList />
    </>
  );
}
