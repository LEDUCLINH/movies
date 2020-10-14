import Discover from '../../pages/Discover';
import Movie from '../../pages/Movie';
import Person from '../../pages/Person';
import Genre from '../../pages/Genre';
import Search from '../../pages/Search';

export const routes = [
  {
    exact: true,
    path: "/",
    component: Discover
  },
  {
    exact: true,
    path: "/movie/:id",
    component: Movie
  },
  {
    exact: true,
    path: "/person/:id",
    component: Person
  },
  {
    exact: true,
    path: "/genres/:genre",
    component: Genre
  },
  {
    exact: true,
    path: "/search/:name",
    component: Search
  },
]