import "../styles/topics.css";
import Tag from "./Tag";

function Topics() {
  const tagFetched = [
    "complotisme",
    "ladararobinx",
    "moula",
    "jazz",
    "trafficinternet",
    "rés",
    "sciences",
  ];
  const tags = [];
  for (let i = 0; i < tagFetched.length; i++) {
    tags.push(<Tag key={i}>{tagFetched[i]}</Tag>);
  }
  return (
    <div className="topics">
      <h1>Les themes sont</h1>
      <div className="tags">{tags}</div>
    </div>
  );
}
export default Topics;
