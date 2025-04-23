import "./style.css";
import { useRef, useState } from "react";

export default function CreateItem({ onCreate }) {
  const [newTodo, setNewTodo] = useState("");
  const newTodoRef = useRef();

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      handleAddBtn();
    }
  };

  const handleAddBtn = () => {
    if (newTodo === "") {
      newTodoRef.current.focus();
      return;
    }

    onCreate(newTodo);
    setNewTodo("");
  };

  return (
    <div className="create-item-container">
      <input
        type="text"
        value={newTodo}
        placeholder="추가할 Todo를 입력하세요"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddBtn}>추가</button>
    </div>
  );
}
