import { useEffect, useCallback } from "react";
import { useHttp } from "../hook/useHttp";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews, newsDeleted } from "../redux/actions";
import Spinner from "./Spinner";
import Error from "./Error";
import NewsListItem from "./NewsListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createSelector } from "reselect";
import "./style/NewsList.css";

const NewsList = () => {
  const filteredNewsSelected = createSelector(
    (state) => state.filter.activeFilter,
    (state) => state.news.news,
    (filter, news) => {
      if (filter === "all") {
        console.log("render");
        return news;
      } else {
        return news.filter((item) => item.category === filter);
      }
    }
  );

  const filteredNews = useSelector(filteredNewsSelected);

  const filterLoadingStatus = useSelector(
    (state) => state.filter.filterLoadingStatus
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchNews(request));
    // eslint-disable-next-line
  }, []);

  const onDelete = useCallback((id) => {
    request(`http://localhost:3001/news/${id}`, "DELETE")
      .then((data) => console.log(data + "Deleted"))
      .then(dispatch(newsDeleted(id)))
      .catch(() => dispatch("NEWS_FETCHING_ERROR"));
    // eslint-disable-next-line
  }, []);

  if (filterLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filterLoadingStatus === "error") {
    return <Error />;
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={500} classNames="item">
          <h4 className="text-center mt-5">News doesn't exist</h4>
        </CSSTransition>
      );
    } else {
      return arr
        .map(({ id, ...props }) => {
          return (
            <CSSTransition key={id} timeout={500} classNames="item">
              <NewsListItem onDelete={() => onDelete(id)} {...props} />
            </CSSTransition>
          );
        })
        .reverse();
    }
  };

  const element = renderNewsList(filteredNews);

  return <TransitionGroup component="ul">{element}</TransitionGroup>;
};

export default NewsList;
