import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListNumbersComponent from './components/ListNumbersComponent'
import AddNumberComponent from './components/AddNumberComponent';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path ="/" exact component = {AddNumberComponent}></Route>
                <Route path ="/database" component = {ListNumbersComponent}></Route>
                <Route path ="/input-number" component = {AddNumberComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
    
  );
}

export default App;
