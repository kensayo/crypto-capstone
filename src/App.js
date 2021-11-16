import Main from './components/main';
import {
  BrowserRouter as Router, Switch, Route, NavLink,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faAngleLeft, faWrench } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Router>
        <nav className="d-flex justify-content-between flex-row">
          <NavLink exact to="/">
            <FontAwesomeIcon icon={faAngleLeft} />
          </NavLink>  
          <span>Crypto Capstone</span>
          <div>
          <FontAwesomeIcon icon={faMicrophone} />  
            <FontAwesomeIcon icon={faWrench} />
          </div>
        </nav>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
