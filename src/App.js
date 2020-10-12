import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SideBar from './components/Sidebar';
import Discover from './pages/Discover';
import './App.scss'
import Movie from './pages/Movie';
import Person from './pages/Person';
import Genre from './pages/Genre';
import Header from './components/Header';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="main">
          <SideBar />
          <Route exact path="/" component={Discover} />
          <Route exact path="/movie/:id" component={Movie} />
          <Route exact path="/person/:id" component={Person} />
          <Route exact path="/genres/:genre" component={Genre} />
          <Route exact path="/search/:name" component={Search} />
        </div>
      </Router>
    </div>
  );
}

export default App;
