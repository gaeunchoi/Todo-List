import "./style.css";
import SearchItem from "../SearchItem";
import TodoItem from "../TodoItem";
import { useState } from "react";

export default function ListContent({ todos, onUpdate, onEdit, onDelete }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredTodos = () => {
    if (search === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="item-list-container">
      <h4>📌 List</h4>
      <SearchItem onChange={handleSearch} />
      <div className="todo-list-wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
