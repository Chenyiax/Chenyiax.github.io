import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from "./header/header";
import Home from "./home/Home";
import Publications from "./publications/Publications";
import Teaching from "./teaching/Teaching";
import Services from "./services/Services";
import Members from "./members/Members";
import Alumni from "./alumni/Alumni";
import Resource from "./resource/Resource";
import Research from "./research/Research";
import Photos from "./photos/Photos";





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
                          <Route exact path="/teaching" component={Teaching} />
                          <Route exact path="/services" component={Services} />
                          <Route exact path="/members" component={Members} />
                          <Route exact path="/alumni" component={Alumni} />
                          <Route exact path="/resource" component={Resource} />
                          <Route exact path="/research" component={Research} />
                          <Route exact path="/photos" component={Photos} />
                          <div className="note">
                              © 2024 MICS Lab<br/>
                              Powered by Chenyiax
                          </div>
                      </div>
                  </Switch>
              </BrowserRouter>
          </div>
      </div>
  );
}

export default App;
