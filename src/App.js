import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from "./header/header";
import Home from "./home/Home";
import Publications from "./publications/Publications";





function App() {
  return (
      <div className="App">
          <div className="flex-container">
              <BrowserRouter>
                  <Header></Header>
                  <Switch>
                      <div className="container">
                          <Route exact path="/" component={Home} />
                          <Route exact path="/publications" component={Publications} />
                      </div>
                  </Switch>
              </BrowserRouter>
          </div>
      </div>
  );
}

export default App;
