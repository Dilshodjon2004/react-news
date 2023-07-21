import { useState } from "react";
import { useHttp } from "../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { newsCreated } from "../components/NewsList/news_slice";

const NewsAddForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { filterLoadingStatus, filters } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newNews = {
      id: v4(),
      name: name,
      description: description,
      category: category,
    };
    request("http://localhost:3001/news", "POST", JSON.stringify(newNews))
      .then((res) => console.log("Success"))
      .then(dispatch(newsCreated(newNews)))
      .catch((err) => console.log(err));

    setName("");
    setCategory("");
    setDescription("");
  };

  const renderFilters = (filters, status) => {
    if (status === "loading") {
      return <option>Loading options</option>;
    } else if (status === "error") {
      return <option>Error options</option>;
    }

    if (filters && filters.length > 0) {
      return filters.map(({ name, label }) => {
        if (name === "all") {
          return;
        } else {
          return (
            <option key={name} value={name}>
              {label}
            </option>
          );
        }
      });
    }
  };

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name for new Info:
        </label>
        <input
          type="text"
          name="name"
          required
          className="form-control"
          id="name"
          placeholder="What is the name of Info?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Description
        </label>
        <textarea
          type="text"
          name="text"
          required
          className="form-control"
          id="text"
          placeholder="What about your Info?"
          style={{ height: "120px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Choose category of Info:
        </label>
        <select
          required
          className="form-select"
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Category of News...</option>
          {renderFilters(filters, filterLoadingStatus)}
        </select>
      </div>
      <button type="submit" className="btn shadow-lg text-light btn-dark w-100">
        Create news
      </button>
    </form>
  );
};

export default NewsAddForm;
