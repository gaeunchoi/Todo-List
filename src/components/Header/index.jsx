import "./style.css";

export default function Header() {
  const today = `${new Date().getFullYear()}년 ${
    new Date().getMonth() + 1
  }월 ${new Date().getDate()}일`;

  console.log(today);

  return (
    <div className="header-container">
      <h1>📋 Todo List</h1>
      <h4>
        오늘은 <span className="date-highlight">{today}</span> 입니다
      </h4>
    </div>
  );
}
