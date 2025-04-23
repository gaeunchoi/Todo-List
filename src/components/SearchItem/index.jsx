import "./style.css";

export default function SearchItem({ onChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="검색어를 입력하세요"
      onChange={onChange}
    />
  );
}
