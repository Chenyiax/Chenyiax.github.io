import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from "./header/header";
import Home from "./home/Home";





function App() {
  return (
      <div className="App">
          <div className="flex-container">
              <Header></Header>
              <BrowserRouter>
                  <Switch>
                      <div className="container">
                          <Route exact path="/" component={Home} />

                      </div>
                  </Switch>
              </BrowserRouter>
          </div>
      </div>
  );
}

export default App;
