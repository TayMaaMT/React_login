import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import './App.css';

function App() {
  
    return (

        <Router>
        <Switch>
          <Route path="/signUp">
           <SignUp />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
    </Router>
  );

}

export default App;
