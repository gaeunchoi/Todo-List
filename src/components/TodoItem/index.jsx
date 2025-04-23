import "./style.css";
import { useRef, useState } from "react";

export default function TodoItem({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onEdit,
  onDelete,
}) {
  const editInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);

  const handleChangeCheckBox = () => {
    onUpdate(id);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      handleEditBtn();
    }
  };

  const handleEditBtn = () => {
    onEdit(id, editContent);
    setIsEditing(!isEditing);
  };

  const handleDeleteBtn = () => {
    onDelete(id);
  };

  return (
    <div className="todo-item-container">
      <input type="checkbox" checked={isDone} onChange={handleChangeCheckBox} />
      {isEditing ? (
        <input
          className="todo-item-content"
          type="text"
          value={editContent}
          ref={editInputRef}
          onChange={(e) => setEditContent(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className="todo-item-content">{content}</span>
      )}
      <span className="todo-item-date">
        {new Date(date).toLocaleDateString()}
      </span>
      <button onClick={handleEditBtn}>수정</button>
      <button onClick={handleDeleteBtn}>삭제</button>
    </div>
  );
}
