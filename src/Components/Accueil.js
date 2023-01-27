import Hero from "./Hero";
import Topics from "./Topics";
import NewArticles from "./NewArticles";

function Accueil(props) {
  return (
    <div>
      <Hero></Hero>
      <Topics />
      <NewArticles />
    </div>
  );
}

export default Accueil;
