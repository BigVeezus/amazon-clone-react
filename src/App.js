import './App.css';
import Header from './Header/header';
import Home from './Home/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Checkout from './Checkout/checkout';


function App() {
  return (
  <div className="App">
  <Router>
    <Switch>
      <Route path="/checkout">
        <Header/>
        <Checkout/>
      </Route>

      <Route path="/">
        <Header/>
        <Home/>
      </Route>
    </Switch>
  </Router>

  
  </div>
  );
}

export default App;
