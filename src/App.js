import Navbar from "./components/Navbar";
import NewsAddForm from "./components/NewsAddForm";
import NewsFilter from "./components/NewsFilter";
import NewsList from "./components/NewsList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <NewsList />
        <div className="content__page">
          <NewsAddForm />
          <NewsFilter />
        </div>
      </div>
    </div>
  );
};

export default App;
