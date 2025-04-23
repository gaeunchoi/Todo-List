import "./App.css";
import ListContent from "./components/ListContent";
import Header from "./components/Header";
import { useRef, useState } from "react";
import CreateItem from "./components/CreateItem";

const dumpData = [
  {
    id: 0,
    isDone: true,
    content: "Todo-List 제작",
    date: new Date().getTime(),
  },
  { id: 1, isDone: false, content: "청소기 밀기", date: new Date().getTime() },
  { id: 2, isDone: false, content: "방청소 하기", date: new Date().getTime() },
  {
    id: 3,
    isDone: false,
    content: "Search test 1",
    date: new Date().getTime(),
  },
  {
    id: 4,
    isDone: false,
    content: "sEARCH TEST 2",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(dumpData);
  let idCnt = useRef(5);

  const handleCreate = (data) => {
    const newData = {
      id: idCnt.current++,
      isDone: false,
      content: data,
      date: new Date().getTime(),
    };
    setTodos([...todos, newData]);
  };

  const handleUpdate = (targetId) => {
    const newTodos = todos.map((todo) =>
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    );

    setTodos(newTodos);
  };

  const handleEdit = (targetId, editContent) => {
    const newTodos = todos.map((todo) =>
      todo.id === targetId ? { ...todo, content: editContent } : todo
    );

    setTodos(newTodos);
  };

  const handleDelete = (targetId) => {
    const newTodos = todos.filter((todo) => todo.id !== targetId);
    setTodos(newTodos);
  };

  return (
    <div className="main-container">
      <Header />
      <CreateItem onCreate={handleCreate} />
      <ListContent
        todos={todos}
        onUpdate={handleUpdate}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
