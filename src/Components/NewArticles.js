import "../styles/news.css";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Article from "./Article";
import axios from "axios";

function NewArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setArticles(response.data);
    });
  }, []);
  console.log(articles);
  let i = 0;

  return (
    <div className="news">
      <h1>A la une</h1>
      {articles.length > 0 ? (
        articles.map((article) => {
          i++;
          if (i < 4)
            return (
              <Article
                title="Belle soeur coincée dans machine "
                date="12/02/2023"
                image="/images/coincee_machine_a_lave.jpg"
                body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis ratione praesentium nam asperiores odit sequi temporibus vero voluptates quia amet sunt accusamus molestiae dicta at blanditiis tempora, explicabo dignissimos."
                key={i}
              />
            );
          else return <></>;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default NewArticles;
