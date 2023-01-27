import "../styles/article.css";

function Article(props) {
  return (
    <div className="article">
      <img src={props.image} alt={props.title} />
      <div className="infos">
        <h3>{props.title}</h3>
        <p className="body">{props.body}</p>
        <h4>{props.date}</h4>
      </div>
    </div>
  );
}
export default Article;
