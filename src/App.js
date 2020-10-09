import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SideBar from './components/Sidebar';
import Discover from './pages/Discover';
import './App.css'
import Movie from './pages/Movie';
import Person from './pages/Person';
import Genre from './pages/Genre';
function App() {
  useEffect(() => {
    window.scrollTo(x => {
      console.log(x)
    })
  })
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Route exact path="/" component={Discover} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route exact path="/person/:id" component={Person} />
        <Route exact path="/genres/:id" component={Genre} />
      </Router>
    </div>
  );
}

export default App;
