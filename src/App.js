import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SideBar from './components/Sidebar';
import Header from './components/Header';
import './App.scss'
import { routes }  from './configs' 

function App() {
  console.log(routes)
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="main">
          <SideBar />
            <Switch>
              {routes.map(route => (
                <Route 
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
